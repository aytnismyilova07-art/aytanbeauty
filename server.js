 const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// SQLite verilənlər bazasına qoşulma
const db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) {
        console.error('Verilənlər bazasına qoşulma xətası:', err.message);
    } else {
        console.log('SQLite verilənlər bazasına uğurla qoşuldu!');
    }
});

// Cədvəllərin yaradılması və avtomatik məhsulların doldurulması
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT UNIQUE,
        password TEXT,
        role TEXT DEFAULT 'customer'
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        category TEXT,
        price REAL,
        image TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS orders (
        id TEXT PRIMARY KEY,
        customerName TEXT,
        email TEXT,
        phone TEXT,
        address TEXT,
        total REAL,
        status TEXT,
        items TEXT
    )`);

    // Admin istifadəçisini əlavə et
    db.run(`INSERT OR IGNORE INTO users (name, email, password, role) VALUES ('Aytən Admin', 'admin@aytanbeauty.az', 'admin', 'admin')`);

    // Məhsulları yeniləyirik
    db.run(`DELETE FROM products`, () => {
        const initialProducts = [
            ['Rose Glow Vitamin C Hyaluron Serumu', 'uz-qullugu', 48.50, 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600'],
            ['Velvet Soft Nude Dodaq Boyası', 'makiyaj', 26.00, 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=600'],
            ['Botanical Repair Saç Maskası', 'sac-qullugu', 34.00, 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=600'],
            ['Luminous Glow SPF 50+ Günəş Kremi', 'uz-qullugu', 39.90, 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600'],
            ['Jasmine & French Vanilla Ətir 100ml', 'etirler', 115.00, 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=600'],
            ['Shea Butter Bədən Losyonu', 'beden-qullugu', 24.50, 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600'],
            ['YSL Loveshine Dodaq Boyası', 'makiyaj', 45.00, 'IMAGES/YSL DODAQ.jpeg'],
            ['Professional Makiyaj Fırçaları', 'makiyaj', 55.00, 'IMAGES/FIRCA.jfif'],
            ['Dior Backstage Glow Face Palette (Highlighter)', 'makiyaj', 95.00, 'IMAGES/DIRO HIGH.jfif'],
            ['Dior Addict Lip Glow / Lip Oil', 'makiyaj', 78.00, 'IMAGES/DIOR GLOSS.jpeg'],
            ['Dior J\'adore Eau de Parfum', 'etirler', 240.00, 'IMAGES/JODOR.jpg'],
            ['La Roche-Posay Effaclar Üz Yuma Geli', 'uz-qullugu', 32.50, 'IMAGES/LA ROCHE POSAY UZ YUMA GELI.png'],
            ['Victoria\'s Secret Bare Vanilla Bədən Spreyi', 'etirler', 38.00, 'IMAGES/VICTORIA SECRET.webp'],
            ['Pantene Pro-V Arqan Yağı', 'sac-qullugu', 14.90, 'IMAGES/ARGAN YAGI.avif']
        ];

        const stmt = db.prepare(`INSERT INTO products (name, category, price, image) VALUES (?, ?, ?, ?)`);
        initialProducts.forEach(p => stmt.run(p));
        stmt.finalize();
    });
});

// Məhsulları oxumaq
app.get('/api/products', (req, res) => {
    db.all(`SELECT * FROM products`, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Qeydiyyat
app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;
    db.run(`INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, 'customer')`, [name, email, password], function(err) {
        if (err) return res.status(400).json({ error: "Bu e-poçt artıq mövcuddur." });
        res.json({ success: true, user: { id: this.lastID, name, email, role: 'customer' } });
    });
});

// Giriş
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    db.get(`SELECT * FROM users WHERE email = ? AND password = ?`, [email, password], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(401).json({ error: "Yanlış e-poçt və ya şifrə." });
        res.json({ success: true, user: { name: row.name, email: row.email, role: row.role } });
    });
});

// Sifarişləri oxumaq
app.get('/api/orders', (req, res) => {
    db.all(`SELECT * FROM orders`, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Sifariş yaratmaq
app.post('/api/orders', (req, res) => {
    const { id, customerName, email, phone, address, total, status, items } = req.body;
    db.run(`INSERT INTO orders (id, customerName, email, phone, address, total, status, items) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [id, customerName, email, phone, address, total, status, items], function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true });
        });
});

// Sifariş statusunu yeniləmək
app.put('/api/orders/:id', (req, res) => {
    const { status } = req.body;
    const orderId = req.params.id;
    db.run(`UPDATE orders SET status = ? WHERE id = ?`, [status, orderId], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
    });
});

app.listen(5000, () => {
    console.log('Server 5000 portunda isleyir...');
});