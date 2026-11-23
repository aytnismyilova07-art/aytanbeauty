const API_URL = window.location.origin && window.location.origin.startsWith('http')
    ? `${window.location.origin}/api`
    : 'http://localhost:5000/api';

const defaultProducts = [
    {
        id: 1,
        name: 'Rose Glow Vitamin C Hyaluron Serumu',
        category: 'uz-qullugu',
        price: 48.50,
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600',
        description: 'Stabil C vitamini və hialuron turşusu ilə zəngin serum dəri tonunu bərabərləşdirir, dərin nəmləndirmə və təbii parlaqlıq verir.'
    },
    {
        id: 2,
        name: 'Velvet Soft Nude Dodaq Boyası',
        category: 'makiyaj',
        price: 26.00,
        image: 'DIOR DODAQ BOYASI.jpg',
        description: 'Məxmər teksturalı nude dodaq boyası dodaqları qurutmadan yumşaq və qalıcı rəng örtüyü yaradır.'
    },
    {
        id: 3,
        name: 'Botanical Repair Saç Maskası',
        category: 'sac-qullugu',
        price: 34.00,
        image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=600',
        description: 'Bitki ekstraktları ilə zəngin bərpaedici saç maskası zədələnmiş saç tellərini qidalandırır, asan daranma və ipək yumşaqlıq təmin edir.'
    },
    {
        id: 4,
        name: 'Luminous Glow SPF 50+ Günəş Kremi',
        category: 'uz-qullugu',
        price: 39.90,
        image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600',
        description: 'SPF 50+ qoruma faktoru ilə UVA/UVB şüalarına qarşı yüksək müdafiə yaradır, dəridə ağ iz qoymadan yüngül parıltı bəxş edir.'
    },
    {
        id: 5,
        name: 'Jasmine & French Vanilla Ətir 100ml',
        category: 'etirler',
        price: 115.00,
        image: 'LIBRE PARFUM.webp',
        description: 'Jasmin çiçəyinin zərif notları ilə fransız vanilinin isti və cazibədar harmoniyasını birləşdirən qalıcı ətir.'
    },
    {
        id: 6,
        name: 'Shea Butter Bədən Losyonu',
        category: 'beden-qullugu',
        price: 24.50,
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600',
        description: 'Şi yağı tərkibli bədən losyonu quru dərini intensiv nəmləndirir, sürətlə hopur və gün boyu yumşaqlıq saxlayır.'
    },
    {
        id: 7,
        name: 'YSL Loveshine Dodaq Boyası',
        category: 'makiyaj',
        price: 45.00,
        image: 'YSL DODAQ.jpeg',
        description: 'Parlaq və nəmləndirici formulaya malik dodaq boyası dodaqlara canlı rəng, təravət və güzgüvari parıltı qazandırır.'
    },
    {
        id: 8,
        name: 'Professional Makiyaj Fırçaları',
        category: 'makiyaj',
        price: 55.00,
        image: 'FIRCA.jfif',
        description: 'Yumşaq və sıx tüklərdən hazırlanmış peşəkar fırça dəsti tonal krem, ənlik, haylayter və göz makiyajının bərabər tətbiqi üçündür.'
    },
    {
        id: 9,
        name: 'Dior Backstage Glow Face Palette (Highlighter)',
        category: 'makiyaj',
        price: 95.00,
        image: 'DIRO HIGH.jfif',
        description: 'Çoxtonlu işıqlandırıcı çalarlardan ibarət palitra yanaq, qaş altı və körpücük sümüklərinə təbii və peşəkar parıltı verir.'
    },
    {
        id: 10,
        name: 'Dior Addict Lip Glow / Lip Oil',
        category: 'makiyaj',
        price: 78.00,
        image: 'DIOR GLOSS.jpeg',
        description: 'Dodaqları qidalandıran, dolğun və parlaq göstərən dodaq yağı/balzamı təbii çalarla gündəlik qulluq və gözəllik təmin edir.'
    },
    {
        id: 11,
        name: 'Dior J\'adore Eau de Parfum',
        category: 'etirler',
        price: 240.00,
        image: 'JODOR.jpg',
        description: 'İlanq-ilanq, Dəməşq qızılgülü və yasəmən notlarının zərif buketindən ibarət klassik, qadına xas və dəbdəbəli ətir.'
    },
    {
        id: 12,
        name: 'La Roche-Posay Effaclar Üz Yuma Geli',
        category: 'uz-qullugu',
        price: 32.50,
        image: 'LA ROCHE POSAY UZ YUMA GELI.png',
        description: 'Yağlı və problemli dərilər üçün nəzərdə tutulmuş təmizləyici gel artıq sebumu aradan qaldırır və məsamələri dərindən təmizləyir.'
    },
    {
        id: 13,
        name: 'Victoria\'s Secret Bare Vanilla Bədən Spreyi',
        category: 'etirler',
        price: 38.00,
        image: 'VICTORIA SECRET.webp',
        description: 'Çırpılmış vanil, kaşmir və yumşaq müşk notları ilə bədəndə yüngül, şirin və uzunmüddətli qoxu buraxan bədən spreyi.'
    },
    {
        id: 14,
        name: 'Pantene Pro-V Arqan Yağı',
        category: 'sac-qullugu',
        price: 14.90,
        image: 'ARGAN YAGI.avif',
        description: 'Arqan yağı tərkibli saç baxım yağı saçların uclarındakı quruluğu azaldır, elektriklənməni önləyir və saçlara sağlam parıltı verir.'
    }
];

function getProductDescription(product) {
    if (product && product.description && product.description.trim() !== '') {
        return product.description;
    }
    const matched = defaultProducts.find(
        dp => dp.name.toLowerCase() === (product?.name || '').toLowerCase()
    );
    if (matched && matched.description) {
        return matched.description;
    }
    return 'Təbii tərkibli, premium keyfiyyətli lüks kosmetika məhsulu. Dərinizə xüsusi qulluq və parlaqlıq bəxş edir.';
}

let products = defaultProducts;
const categories = [
    { id: 'all', name: 'Bütün Məhsullar' },
    { id: 'uz-qullugu', name: 'Üz qulluğu & Serumlar' },
    { id: 'makiyaj', name: 'Makiyaj' },
    { id: 'sac-qullugu', name: 'Saç qulluğu' },
    { id: 'beden-qullugu', name: 'Bədən qulluğu' },
    { id: 'etirler', name: 'Ətirlər' }
];

let currentUser = JSON.parse(localStorage.getItem('ab_user')) || null;
let cart = JSON.parse(localStorage.getItem('ab_cart')) || [];
let orders = JSON.parse(localStorage.getItem('ab_orders')) || [];
let activeCategory = 'all';
let currentPage = 'home';
let isRegisterMode = false;

async function loadBackendData() {
    try {
        const prodRes = await fetch(`${API_URL}/products`);
        if (prodRes.ok) {
            const dbProducts = await prodRes.json();
            if (dbProducts && dbProducts.length > 0) {
                products = dbProducts.map(p => ({
                    ...p,
                    description: getProductDescription(p)
                }));
            }
        }
        const ordRes = await fetch(`${API_URL}/orders`);
        if (ordRes.ok) {
            orders = await ordRes.json();
        }
    } catch (err) {
        console.log("Local SQLite backend qoşulmadı.");
    }
    render();
}

function render() {
    updateHeaderUserMenu();
    updateCartBadge();
    const main = document.getElementById('main-content');

    if (currentPage === 'home') {
        main.innerHTML = `
            <div class="text-center bg-gradient-to-r from-[#FCE4EC] to-[#F4ECE1] py-16 rounded-3xl shadow-lg mb-12">
                <span class="bg-white text-[#880E4F] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-pink-200">LUXURY KOSMETIKA 2026</span>
                <h1 class="font-serif text-4xl sm:text-6xl font-bold text-gray-900 mt-4">Gözəlliyinizə <span class="text-[#880E4F] italic">dəyər qatın!</span></h1>
                <p class="text-gray-600 mt-3 max-w-lg mx-auto">Təbii tərkibli premium üz qulluğu, serumlar, ətirlər və makiyaj vasitələri.</p>
                <button onclick="changePage('products')" class="mt-6 px-8 py-3 bg-[#880E4F] text-white rounded-full font-medium hover:bg-[#AD1457] shadow-xl transition">Alış-verişə Başla</button>
            </div>
            <h2 class="font-serif text-2xl font-bold text-gray-900 mb-6">Seçilmiş Məhsullar</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                ${renderProductsHTML(products.slice(0, 3))}
            </div>
        `;
    } else if (currentPage === 'products') {
        main.innerHTML = `
            <h1 class="font-serif text-3xl font-bold text-gray-900 mb-6">Məhsul Kataloqu</h1>
            <div class="flex flex-wrap gap-2 mb-8">
                ${categories.map(cat => `
                    <button onclick="filterCategory('${cat.id}')" class="px-4 py-2 rounded-xl text-xs font-semibold transition ${activeCategory === cat.id ? 'bg-[#880E4F] text-white shadow-md' : 'bg-white text-gray-700 border hover:bg-pink-50'}">
                        ${cat.name}
                    </button>
                `).join('')}
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                ${renderProductsHTML(activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory))}
            </div>
        `;
    } else if (currentPage === 'my-orders') {
        if (!currentUser) {
            main.innerHTML = `<div class="text-center py-20 font-bold text-gray-600">Sifarişlərinizi görmək üçün daxil olun.</div>`;
            return;
        }
        const myOrders = orders.filter(o => o.email === currentUser.email);

        main.innerHTML = `
            <h1 class="font-serif text-3xl font-bold text-gray-900 mb-6">Mənim Sifarişlərim (${currentUser.name})</h1>
            ${myOrders.length === 0 ? '<p class="text-gray-500 py-10 text-center bg-white rounded-2xl border">Hələ heç bir sifarişiniz yoxdur.</p>' : `
                <div class="space-y-4">
                    ${myOrders.map(o => `
                        <div class="bg-white p-6 rounded-2xl shadow-sm border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                                <div class="flex items-center space-x-3 mb-1">
                                    <span class="font-bold text-[#880E4F]">${o.id}</span>
                                    <span class="px-3 py-1 rounded-full text-xs font-semibold ${o.status === 'Yeni sifariş' ? 'bg-amber-100 text-amber-800' : o.status === 'Çatdırıldı' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}">${o.status}</span>
                                </div>
                                <p class="text-xs text-gray-500">Məhsullar: <b>${o.items}</b></p>
                                <p class="text-xs text-gray-500 mt-1">Ünvan: ${o.address} | Tel: ${o.phone}</p>
                            </div>
                            <div class="text-right">
                                <span class="text-xs text-gray-400 block">Ümumi məbləğ</span>
                                <span class="font-bold text-lg text-[#880E4F]">${Number(o.total).toFixed(2)} ₼</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `}
        `;
    } else if (currentPage === 'checkout') {
        if (cart.length === 0) {
            main.innerHTML = `<div class="text-center py-20"><h2 class="text-2xl font-bold mb-4">Səbətiniz boşdur</h2><button onclick="changePage('products')" class="px-6 py-2 bg-[#880E4F] text-white rounded-xl">Məhsullara bax</button></div>`;
            return;
        }
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        main.innerHTML = `
            <div class="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg border">
                <h2 class="font-serif text-2xl font-bold text-gray-900 mb-6">Sifarişi Tamamla</h2>
                <form onsubmit="submitOrder(event)" class="space-y-4">
                    <div>
                        <label class="block text-xs font-semibold text-gray-600 mb-1">Ad və Soyad</label>
                        <input type="text" id="checkout-name" required value="${currentUser ? currentUser.name : ''}" class="w-full px-4 py-2 border rounded-xl text-sm">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-gray-600 mb-1">Əlaqə nömrəsi</label>
                        <input type="text" id="checkout-phone" required placeholder="+994 50 123 45 67" class="w-full px-4 py-2 border rounded-xl text-sm">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-gray-600 mb-1">Çatdırılma Ünvanı</label>
                        <textarea id="checkout-address" required placeholder="Şəhər, küçə, bina, mənzil..." class="w-full px-4 py-2 border rounded-xl text-sm"></textarea>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-gray-600 mb-1">Ödəniş üsulu</label>
                        <select id="checkout-payment" onchange="toggleCardInputs(this.value)" class="w-full px-4 py-2 border rounded-xl text-sm bg-white">
                            <option value="Nağd ödəniş (Qapıda)">Nağd ödəniş (Kuryerə)</option>
                            <option value="Bank kartı ilə onlayn">Bank kartı ilə onlayn</option>
                        </select>
                    </div>

                    <!-- Kart Məlumatları (Əvvəlcə gizli olur) -->
                    <div id="card-details-container" class="hidden space-y-3 p-4 bg-pink-50/50 rounded-xl border border-pink-100">
                        <div>
                            <label class="block text-[11px] font-semibold text-gray-600 mb-1">Kart sahibi (Ad Soyad)</label>
                            <input type="text" id="card-holder" placeholder="AYTAN ISMAYILOVA" class="w-full px-3 py-1.5 border rounded-lg text-xs bg-white">
                        </div>
                        <div>
                            <label class="block text-[11px] font-semibold text-gray-600 mb-1">Kart nömrəsi</label>
                            <input type="text" id="card-number" placeholder="4169 •••• •••• 8899" maxlength="19" class="w-full px-3 py-1.5 border rounded-lg text-xs bg-white">
                        </div>
                        <div class="flex gap-2">
                            <div class="w-1/2">
                                <label class="block text-[11px] font-semibold text-gray-600 mb-1">Bitmə tarixi (Ay/İl)</label>
                                <input type="text" id="card-exp" placeholder="MM/YY" maxlength="5" class="w-full px-3 py-1.5 border rounded-lg text-xs bg-white">
                            </div>
                            <div class="w-1/2">
                                <label class="block text-[11px] font-semibold text-gray-600 mb-1">CVV / CVC</label>
                                <input type="password" id="card-cvv" placeholder="•••" maxlength="3" class="w-full px-3 py-1.5 border rounded-lg text-xs bg-white">
                            </div>
                        </div>
                    </div>

                    <div class="border-t pt-4 flex justify-between font-bold text-lg">
                        <span>Cəmi məbləğ:</span>
                        <span class="text-[#880E4F]">${subtotal.toFixed(2)} ₼</span>
                    </div>
                    <button type="submit" class="w-full py-3 bg-[#880E4F] text-white rounded-xl font-medium hover:bg-[#AD1457] shadow-md transition">Sifarişi Təsdiq Et</button>
                </form>
            </div>
        `;
    } else if (currentPage === 'admin') {
        if (!currentUser || currentUser.role !== 'admin') {
            main.innerHTML = `<div class="text-center py-20 text-red-600 font-bold">Bu səhifəyə giriş icazəniz yoxdur!</div>`;
            return;
        }
        main.innerHTML = `
            <h1 class="font-serif text-3xl font-bold text-gray-900 mb-6">Admin Paneli — Sifarişlərin İdarə Edilməsi</h1>
            <div class="bg-white rounded-2xl shadow-md overflow-hidden border">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-gray-50 border-b text-gray-600">
                        <tr>
                            <th class="p-4">Sifariş ID</th>
                            <th class="p-4">Müştəri</th>
                            <th class="p-4">Ünvan / Tel</th>
                            <th class="p-4">Məhsullar</th>
                            <th class="p-4">Məbləğ</th>
                            <th class="p-4">Status</th>
                            <th class="p-4">Əməliyyat</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y">
                        ${orders.map(o => `
                            <tr class="hover:bg-gray-50">
                                <td class="p-4 font-bold text-[#880E4F]">${o.id}</td>
                                <td class="p-4 font-semibold">${o.customerName}</td>
                                <td class="p-4 text-xs text-gray-500">${o.address}<br>${o.phone}</td>
                                <td class="p-4 text-xs">${o.items}</td>
                                <td class="p-4 font-bold">${Number(o.total).toFixed(2)} ₼</td>
                                <td class="p-4">
                                    <span class="px-3 py-1 rounded-full text-xs font-semibold ${o.status === 'Yeni sifariş' ? 'bg-amber-100 text-amber-800' : o.status === 'Çatdırıldı' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}">${o.status}</span>
                                </td>
                                <td class="p-4">
                                    <select onchange="updateOrderStatus('${o.id}', this.value)" class="text-xs border rounded p-1 bg-white font-medium">
                                        <option value="Yeni sifariş" ${o.status === 'Yeni sifariş' ? 'selected' : ''}>Yeni sifariş</option>
                                        <option value="Hazırlanır" ${o.status === 'Hazırlanır' ? 'selected' : ''}>Hazırlanır</option>
                                        <option value="Kuryerə verildi" ${o.status === 'Kuryerə verildi' ? 'selected' : ''}>Kuryerə verildi</option>
                                        <option value="Çatdırıldı" ${o.status === 'Çatdırıldı' ? 'selected' : ''}>Çatdırıldı</option>
                                    </select>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }
}

function renderProductsHTML(prods) {
    if (!prods || prods.length === 0) return '<p class="text-gray-500">Məhsul tapılmadı.</p>';
    return prods.map(p => `
        <div class="bg-white rounded-2xl p-4 shadow-sm border border-pink-50 hover:shadow-xl transition-all flex flex-col justify-between">
            <div onclick="openProductDetail(${p.id})" class="cursor-pointer">
                <img src="${p.image}" alt="${p.name}" class="w-full h-48 object-contain bg-white rounded-xl mb-4">
                <h3 class="font-semibold text-gray-800 text-sm mb-1 hover:text-[#880E4F] transition">${p.name}</h3>
            </div>
            <div class="flex items-center justify-between mt-4">
                <span class="font-bold text-[#880E4F] text-lg">${Number(p.price).toFixed(2)} ₼</span>
                <button onclick="addToCart(${p.id})" class="px-4 py-2 bg-[#880E4F] text-white text-xs rounded-xl hover:bg-[#AD1457] transition">Səbətə at</button>
            </div>
        </div>
    `).join('');
}

function changePage(page) {
    currentPage = page;
    render();
    window.scrollTo(0, 0);
}

function filterCategory(catId) {
    activeCategory = catId;
    render();
}

// Məhsul detalı modali üçün funksiyalar
function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const descText = getProductDescription(product);
    const content = document.getElementById('product-detail-content');
    content.innerHTML = `
        <img src="${product.image}" class="w-full sm:w-1/2 h-56 object-contain bg-white rounded-xl">
        <div class="flex-1 flex flex-col justify-between">
            <div>
                <span class="text-[10px] bg-pink-100 text-[#880E4F] px-2.5 py-1 rounded-full font-semibold uppercase">${product.category}</span>
                <h2 class="font-serif text-xl font-bold text-gray-900 mt-2">${product.name}</h2>
                <p class="text-xs text-gray-500 mt-2">${descText}</p>
            </div>
            <div class="mt-4">
                <span class="text-xl font-bold text-[#880E4F] block mb-3">${Number(product.price).toFixed(2)} ₼</span>
                <button onclick="addToCart(${product.id}); closeProductDetail();" class="w-full py-2.5 bg-[#880E4F] text-white text-xs font-medium rounded-xl hover:bg-[#AD1457] transition">Səbətə at</button>
            </div>
        </div>
    `;
    document.getElementById('product-detail-modal').classList.remove('hidden');
}

function closeProductDetail() {
    document.getElementById('product-detail-modal').classList.add('hidden');
}

// Kart inputlarını açmaq/bağlamaq üçün
function toggleCardInputs(paymentMethod) {
    const cardContainer = document.getElementById('card-details-container');
    if (!cardContainer) return;
    
    if (paymentMethod === 'Bank kartı ilə onlayn') {
        cardContainer.classList.remove('hidden');
    } else {
        cardContainer.classList.add('hidden');
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('ab_cart', JSON.stringify(cart));
    updateCartBadge();
    alert(`${product.name} səbətə əlavə olundu!`);
}

function updateCartBadge() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').innerText = count;
}

function openCart() {
    const modal = document.getElementById('cart-modal');
    const list = document.getElementById('cart-items-list');
    const totalEl = document.getElementById('cart-total-price');

    list.innerHTML = cart.length === 0 ? '<p class="text-gray-400 text-center py-10">Səbətiniz boşdur.</p>' : cart.map(item => `
        <div class="flex items-center justify-between border-b pb-3">
            <div class="flex items-center space-x-3">
                <img src="${item.image}" class="w-12 h-12 object-contain bg-white rounded-lg">
                <div>
                    <h4 class="text-xs font-semibold text-gray-800">${item.name}</h4>
                    <span class="text-xs text-gray-500">${Number(item.price).toFixed(2)} ₼ x ${item.quantity}</span>
                </div>
            </div>
            <button onclick="removeFromCart(${item.id})" class="text-red-500 text-xs font-bold">Sil</button>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalEl.innerText = subtotal.toFixed(2) + ' ₼';
    modal.classList.remove('hidden');
}

function closeCart() {
    document.getElementById('cart-modal').classList.add('hidden');
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    localStorage.setItem('ab_cart', JSON.stringify(cart));
    openCart();
    updateCartBadge();
}

function proceedToCheckout() {
    if (!currentUser) {
        alert('Sifariş vermək üçün daxil olun.');
        closeCart();
        openAuthModal();
        return;
    }
    closeCart();
    changePage('checkout');
}

async function submitOrder(e) {
    e.preventDefault();
    
    const submitBtn = e.target.querySelector('button[type="submit"]');
    if (submitBtn) {
        if (submitBtn.disabled) return; 
        submitBtn.disabled = true;
    }

    const newOrder = {
        id: 'AB-' + Math.floor(1000 + Math.random() * 9000),
        customerName: document.getElementById('checkout-name').value,
        email: currentUser ? currentUser.email : 'qonaq@aytanbeauty.az',
        phone: document.getElementById('checkout-phone').value,
        address: document.getElementById('checkout-address').value,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        status: 'Yeni sifariş',
        items: cart.map(i => `${i.name} (${i.quantity})`).join(', ')
    };

    try {
        const res = await fetch(`${API_URL}/orders`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        });

        if (!res.ok) {
            alert("Xeta: Serverə yazilmadi!");
            if (submitBtn) submitBtn.disabled = false;
            return;
        }

        orders.push(newOrder);
        localStorage.setItem('ab_orders', JSON.stringify(orders));
        cart = [];
        localStorage.setItem('ab_cart', JSON.stringify(cart));
        updateCartBadge();
        
        alert('Sifarişiniz uğurla yerləşdirildi və bazaya yazıldı!');
        changePage('my-orders');

    } catch(err) {
        alert("Xeta: Serverə qoşulmaq mümkün olmadı!");
        if (submitBtn) submitBtn.disabled = false;
    }
}

function updateOrderStatus(orderId, newStatus) {
    fetch(`${API_URL}/orders/${orderId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
    }).catch(err => {});

    const ord = orders.find(o => o.id === orderId);
    if (ord) {
        ord.status = newStatus;
        localStorage.setItem('ab_orders', JSON.stringify(orders));
        alert(`Sifariş #${orderId} statusu yeniləndi.`);
        render();
    }
}

function openAuthModal() { document.getElementById('auth-modal').classList.remove('hidden'); }
function closeAuthModal() { document.getElementById('auth-modal').classList.add('hidden'); }

function toggleAuthMode() {
    isRegisterMode = !isRegisterMode;
    document.getElementById('auth-title').innerText = isRegisterMode ? 'Qeydiyyatdan keç' : 'Hesaba Giriş';
    document.getElementById('auth-btn').innerText = isRegisterMode ? 'Qeydiyyatı tamamla' : 'Daxil ol';
    document.getElementById('auth-switch-text').innerText = isRegisterMode ? 'Artıq hesabınız var?' : 'Hesabınız yoxdur?';
    document.getElementById('auth-switch-btn').innerText = isRegisterMode ? 'Daxil ol' : 'Qeydiyyatdan keç';
    document.getElementById('reg-fields').classList.toggle('hidden', !isRegisterMode);
}

async function handleAuthSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('auth-email').value.trim().toLowerCase();
    const password = document.getElementById('auth-password').value;

    if (email === 'admin@aytanbeauty.az' && password === 'admin') {
        currentUser = { name: 'Aytən Admin', email, role: 'admin' };
        localStorage.setItem('ab_user', JSON.stringify(currentUser));
        closeAuthModal();
        render();
        alert('Xoş gəldiniz, Admin!');
        return;
    }

    if (isRegisterMode) {
        const name = document.getElementById('auth-name').value.trim();
        if (!name) { alert('Adınızı daxil edin.'); return; }

        try {
            const res = await fetch(`${API_URL}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });
            const data = await res.json();
            if (res.ok) {
                currentUser = data.user;
            } else {
                currentUser = { name, email, role: 'customer' };
            }
        } catch (err) {
            currentUser = { name, email, role: 'customer' };
        }
        localStorage.setItem('ab_user', JSON.stringify(currentUser));
        alert('Qeydiyyat tamamlandı! Xoş gəldiniz, ' + name);
    } else {
        try {
            const res = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if (res.ok) {
                currentUser = data.user;
            } else {
                currentUser = { name: 'İstifadəçi', email, role: 'customer' };
            }
        } catch (err) {
            currentUser = { name: 'İstifadəçi', email, role: 'customer' };
        }
        localStorage.setItem('ab_user', JSON.stringify(currentUser));
        alert(`Xoş gəldiniz!`);
    }
    closeAuthModal();
    render();
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('ab_user');
    render();
    changePage('home');
}

function updateHeaderUserMenu() {
    const container = document.getElementById('user-menu-container');
    if (currentUser) {
        container.innerHTML = `
            <div class="flex items-center space-x-3">
                ${currentUser.role === 'admin' ? '<button onclick="changePage(\'admin\')" class="px-3 py-1.5 bg-amber-500 text-white text-xs font-semibold rounded-lg shadow">Admin Panel</button>' : '<button onclick="changePage(\'my-orders\')" class="px-3 py-1.5 bg-pink-100 text-[#880E4F] text-xs font-semibold rounded-lg hover:bg-pink-200 transition">Sifarişlərim</button>'}
                <span class="text-xs font-bold text-gray-700 hidden sm:inline">${currentUser.name}</span>
                <button onclick="handleLogout()" class="text-xs text-red-500 font-semibold">Çıxış</button>
            </div>
        `;
    } else {
        container.innerHTML = `
            <button onclick="openAuthModal()" class="px-4 py-2 rounded-full bg-[#880E4F] text-white text-xs font-medium hover:bg-[#AD1457] shadow-md transition">
                Daxil ol / Qeydiyyat
            </button>
        `;
    }
}

loadBackendData();
