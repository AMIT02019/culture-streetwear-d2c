/**
 * KULTUR D2C STREETWEAR STORE ENGINE
 * Synthesizing best practices from Bluorng, Snitch, Bonkers Corner, Capsul, Bewakoof, & Souled Store.
 */

// 1. PRODUCT CATALOG DATA
const PRODUCTS = [
  {
    id: 1,
    title: "Acid Wash Cyberpunk Oversized Tee",
    brandRef: "Bluorng Aesthetic",
    category: "tees",
    fabric: "340 GSM Combed Cotton",
    sellingPrice: 1499,
    mrp: 2199,
    discount: "32% OFF",
    rating: 4.9,
    reviewsCount: 142,
    badge: "Limited Drop",
    mainImg: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
    altImg: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
    description: "Heavy 340 GSM bio-washed loopknit cotton featuring an oversized drop-shoulder drape and acid distressed wash.",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    title: "Monochrome Heavy Drop-Shoulder Hoodie",
    brandRef: "Snitch Urban Series",
    category: "hoodies",
    fabric: "380 GSM French Terry",
    sellingPrice: 2799,
    mrp: 3799,
    discount: "26% OFF",
    rating: 4.8,
    reviewsCount: 98,
    badge: "Bestseller",
    mainImg: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
    altImg: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    description: "Double-layered oversized hood with raw edge detailing and zero-sag ribbed cuffs engineered for harsh winters.",
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: 3,
    title: "Multi-Pocket Tactical Parachute Cargos",
    brandRef: "Capsul Streetwear OG",
    category: "cargos",
    fabric: "Ripstop Waterproof Blend",
    sellingPrice: 2499,
    mrp: 3299,
    discount: "24% OFF",
    rating: 4.7,
    reviewsCount: 76,
    badge: "Restocked",
    mainImg: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop",
    altImg: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=800&auto=format&fit=crop",
    description: "6 ergonomic bellows pockets, elastic bungee cinch cords at ankles, and heavy reinforced knee gussets.",
    sizes: ["30", "32", "34", "36"]
  },
  {
    id: 4,
    title: "Distorted Grid 3D Puff Print Knit",
    brandRef: "Bonkers Corner Vibe",
    category: "knits",
    fabric: "100% Acrylic Jacquard",
    sellingPrice: 1899,
    mrp: 2799,
    discount: "32% OFF",
    rating: 4.9,
    reviewsCount: 184,
    badge: "Trending Hype",
    mainImg: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop",
    altImg: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800&auto=format&fit=crop",
    description: "Intarsia jacquard knit with high-density puff rubber print. Crazy comfortable relaxed cut.",
    sizes: ["S", "M", "L"]
  },
  {
    id: 5,
    title: "Tokyo Cyber Neon Graphic Tee",
    brandRef: "The Souled Store Fandom",
    category: "tees",
    fabric: "280 GSM Bio-Washed Combed",
    sellingPrice: 1299,
    mrp: 1799,
    discount: "28% OFF",
    rating: 4.8,
    reviewsCount: 215,
    badge: "Official Collab",
    mainImg: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
    altImg: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
    description: "High-definition screen print that won't fade or crack. Pre-shrunk with a vintage washed feel.",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 6,
    title: "Cobalt Oversized Acid Wash Heavy Hoodie",
    brandRef: "Bluorng Raw Collection",
    category: "hoodies",
    fabric: "400 GSM Ultra-Heavy Terry",
    sellingPrice: 2999,
    mrp: 4199,
    discount: "29% OFF",
    rating: 5.0,
    reviewsCount: 64,
    badge: "Exclusive",
    mainImg: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop",
    altImg: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
    description: "Ultra heavyweight 400 GSM loopback cotton. Tailored for an architectural silhouette with dropped shoulders.",
    sizes: ["M", "L", "XL"]
  },
  {
    id: 7,
    title: "Graphite Baggy Skater Cargos",
    brandRef: "Bewakoof Gen-Z Feed",
    category: "cargos",
    fabric: "Heavy Cotton Twill",
    sellingPrice: 1999,
    mrp: 2699,
    discount: "26% OFF",
    rating: 4.6,
    reviewsCount: 112,
    badge: "Fast Selling",
    mainImg: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=800&auto=format&fit=crop",
    altImg: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop",
    description: "Wide-leg relaxed skater profile with deep utility pockets and durable twin-needle stitching.",
    sizes: ["30", "32", "34"]
  },
  {
    id: 8,
    title: "Tactical Balaclava & Utility Crossbody",
    brandRef: "Capsul Street Accessories",
    category: "accessories",
    fabric: "Cordura Nylon 500D",
    sellingPrice: 999,
    mrp: 1499,
    discount: "33% OFF",
    rating: 4.8,
    reviewsCount: 89,
    badge: "Essential",
    mainImg: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
    altImg: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
    description: "Modular weatherproof nylon gear bag with quick-release tactical buckles and YKK waterproof zippers.",
    sizes: ["ONE SIZE"]
  }
];

// 2. STATE MANAGEMENT
let state = {
  cart: JSON.parse(localStorage.getItem('kultur_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('kultur_wishlist') || '[]'),
  currentCategory: 'all',
  currentSort: 'featured',
  discountPercent: 0,
  activeCoupon: ''
};

// 3. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  setupEventListeners();
  updateCartUI();
  updateWishlistUI();
});

// 4. RENDER PRODUCTS
function renderProducts() {
  const grid = document.getElementById('productGrid');
  const counter = document.getElementById('productCounter');
  if (!grid) return;

  // Filter
  let items = [...PRODUCTS];
  if (state.currentCategory !== 'all') {
    items = items.filter(p => p.category === state.currentCategory);
  }

  // Sort
  if (state.currentSort === 'price-low') {
    items.sort((a, b) => a.sellingPrice - b.sellingPrice);
  } else if (state.currentSort === 'price-high') {
    items.sort((a, b) => b.sellingPrice - a.sellingPrice);
  } else if (state.currentSort === 'rating') {
    items.sort((a, b) => b.rating - a.rating);
  }

  counter.innerText = `Showing ${items.length} of ${PRODUCTS.length} items`;

  grid.innerHTML = items.map(product => {
    const isWishlisted = state.wishlist.includes(product.id);
    return `
      <article class="product-card" data-id="${product.id}">
        <div class="card-media" onclick="openQuickView(${product.id})">
          <span class="card-badge-left">${product.badge}</span>
          <span class="card-badge-right">${product.discount}</span>

          <button class="card-wishlist-toggle ${isWishlisted ? 'active' : ''}" 
                  onclick="event.stopPropagation(); toggleWishlist(${product.id})"
                  title="Wishlist">
            <svg width="16" height="16" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>

          <img class="main-image" src="${product.mainImg}" alt="${product.title}" loading="lazy">
          <img class="alt-image" src="${product.altImg}" alt="${product.title} Back View" loading="lazy">

          <!-- BONKERS CORNER REFERENCE: QUICK SIZE BAR -->
          <div class="quick-size-drawer" onclick="event.stopPropagation()">
            <div class="quick-size-title">Quick Size Add:</div>
            <div class="size-pill-row">
              ${product.sizes.map(s => `
                <button class="size-pill-btn" onclick="addToCart(${product.id}, '${s}')">${s}</button>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="card-body">
          <div class="card-meta-row">
            <span class="card-category">${product.brandRef}</span>
            <span class="card-fabric">${product.fabric.split(' ')[0]} ${product.fabric.split(' ')[1] || ''}</span>
          </div>

          <h3 class="card-title" onclick="openQuickView(${product.id})">${product.title}</h3>

          <div class="card-price-row">
            <span class="price-selling">₹${product.sellingPrice.toLocaleString('en-IN')}</span>
            <span class="price-mrp">₹${product.mrp.toLocaleString('en-IN')}</span>
            <span class="price-discount-text">${product.discount}</span>
          </div>

          <div class="card-actions-row">
            <button class="btn-card-add" onclick="addToCart(${product.id}, '${product.sizes[0]}')">
              ⚡ Instant Add
            </button>
            <button class="btn-card-qv" onclick="openQuickView(${product.id})" title="Quick View">
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// 5. EVENT LISTENERS
function setupEventListeners() {
  // Category Pill Scroller (Bewakoof style)
  const strip = document.getElementById('categoryFilterStrip');
  if (strip) {
    strip.addEventListener('click', (e) => {
      const btn = e.target.closest('.cat-pill');
      if (!btn) return;
      document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentCategory = btn.dataset.category;
      renderProducts();
    });
  }

  // Sort Selection
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.currentSort = e.target.value;
      renderProducts();
    });
  }

  // Cart Drawer Toggles (Souled Store style)
  const cartToggleBtn = document.getElementById('cartToggleBtn');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartDrawer = document.getElementById('cartDrawer');

  if (cartToggleBtn) cartToggleBtn.addEventListener('click', () => cartDrawer.classList.add('active'));
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', () => cartDrawer.classList.remove('active'));
  if (cartOverlay) cartOverlay.addEventListener('click', () => cartDrawer.classList.remove('active'));

  // Promo Code
  const applyPromoBtn = document.getElementById('applyPromoBtn');
  if (applyPromoBtn) {
    applyPromoBtn.addEventListener('click', applyPromoCode);
  }

  // Search Modal
  const searchBtn = document.getElementById('searchBtn');
  const searchModal = document.getElementById('searchModal');
  const searchCloseBtn = document.getElementById('searchCloseBtn');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchInput = document.getElementById('searchInput');

  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      searchModal.classList.add('active');
      searchInput.focus();
    });
  }
  if (searchCloseBtn) searchCloseBtn.addEventListener('click', () => searchModal.classList.remove('active'));
  if (searchOverlay) searchOverlay.addEventListener('click', () => searchModal.classList.remove('active'));
  if (searchInput) searchInput.addEventListener('input', handleLiveSearch);

  // Quick Tags in Search
  document.querySelectorAll('.quick-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = tag.dataset.tag;
        handleLiveSearch();
      }
    });
  });

  // Quick View Overlay Close
  const qvOverlay = document.getElementById('qvOverlay');
  if (qvOverlay) {
    qvOverlay.addEventListener('click', () => {
      document.getElementById('quickViewModal').classList.remove('active');
    });
  }

  // Checkout Modal
  const startCheckoutBtn = document.getElementById('startCheckoutBtn');
  const checkoutModal = document.getElementById('checkoutModal');
  const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
  const checkoutOverlay = document.getElementById('checkoutOverlay');
  const confirmOrderBtn = document.getElementById('confirmOrderBtn');

  if (startCheckoutBtn) {
    startCheckoutBtn.addEventListener('click', () => {
      if (state.cart.length === 0) {
        showToast("Your bag is empty! Add items to checkout.");
        return;
      }
      cartDrawer.classList.remove('active');
      checkoutModal.classList.add('active');
    });
  }

  if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', () => checkoutModal.classList.remove('active'));
  if (checkoutOverlay) checkoutOverlay.addEventListener('click', () => checkoutModal.classList.remove('active'));

  if (confirmOrderBtn) {
    confirmOrderBtn.addEventListener('click', handleOrderPlacement);
  }

  // Payment Radio selections
  document.querySelectorAll('.pay-option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.pay-option').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
    });
  });
}

// 6. CART LOGIC (The Souled Store Style)
function addToCart(productId, size = 'M') {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId && item.size === size);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: product.id,
      title: product.title,
      price: product.sellingPrice,
      img: product.mainImg,
      size: size,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added ${product.title} (Size: ${size}) to Bag!`);
}

function updateQty(id, size, delta) {
  const item = state.cart.find(i => i.id === id && i.size === size);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(i => !(i.id === id && i.size === size));
  }

  saveCart();
  updateCartUI();
}

function removeItem(id, size) {
  state.cart = state.cart.filter(i => !(i.id === id && i.size === size));
  saveCart();
  updateCartUI();
  showToast('Item removed from Bag.');
}

function saveCart() {
  localStorage.setItem('kultur_cart', JSON.stringify(state.cart));
}

function updateCartUI() {
  const totalItems = state.cart.reduce((sum, i) => sum + i.qty, 0);
  const cartCount = document.getElementById('cartCount');
  const cartHeaderCount = document.getElementById('cartHeaderCount');
  const listContainer = document.getElementById('cartItemsList');

  if (cartCount) cartCount.innerText = totalItems;
  if (cartHeaderCount) cartHeaderCount.innerText = `${totalItems} ITEMS`;

  if (!listContainer) return;

  if (state.cart.length === 0) {
    listContainer.innerHTML = `
      <div class="empty-cart-state">
        <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/></svg>
        <h4>YOUR BAG IS EMPTY</h4>
        <p>Explore today's exclusive streetwear drops to fill it up.</p>
        <button class="btn-primary" onclick="document.getElementById('cartDrawer').classList.remove('active')">START SHOPPING</button>
      </div>
    `;
  } else {
    listContainer.innerHTML = state.cart.map(item => `
      <div class="cart-item-card">
        <img class="cart-item-img" src="${item.img}" alt="${item.title}">
        <div class="cart-item-details">
          <h4>${item.title}</h4>
          <div class="cart-item-meta">Size: <strong>${item.size}</strong></div>
          <div class="qty-control-row">
            <button class="qty-btn" onclick="updateQty(${item.id}, '${item.size}', -1)">-</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="updateQty(${item.id}, '${item.size}', 1)">+</button>
          </div>
        </div>
        <div class="cart-item-price-col">
          <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</div>
          <button class="cart-remove-btn" onclick="removeItem(${item.id}, '${item.size}')">Remove</button>
        </div>
      </div>
    `).join('');
  }

  // Financial Calculations
  const subtotal = state.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  const discountAmount = Math.round(subtotal * (state.discountPercent / 100));
  const shipping = subtotal >= 1999 || subtotal === 0 ? 0 : 150;
  const grandTotal = Math.max(0, subtotal - discountAmount + shipping);

  // Update Free Shipping Progress Bar
  const FREE_SHIPPING_THRESHOLD = 1999;
  const progressPercent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
  const progressFill = document.getElementById('shippingProgressFill');
  const shippingStatusText = document.getElementById('shippingStatusText');

  if (progressFill) progressFill.style.width = `${progressPercent}%`;
  if (shippingStatusText) {
    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      shippingStatusText.innerHTML = `🎉 You've unlocked <strong>FREE EXPRESS SHIPPING!</strong>`;
    } else {
      const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
      shippingStatusText.innerHTML = `Add <strong>₹${remaining.toLocaleString('en-IN')}</strong> more for <strong>FREE EXPRESS SHIPPING</strong>!`;
    }
  }

  // Summary Lines
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartDiscountLine = document.getElementById('cartDiscountLine');
  const cartDiscountAmount = document.getElementById('cartDiscountAmount');
  const cartShipping = document.getElementById('cartShipping');
  const cartGrandTotal = document.getElementById('cartGrandTotal');
  const checkoutBtnTotal = document.getElementById('checkoutBtnTotal');
  const coGrandTotal = document.getElementById('coGrandTotal');

  if (cartSubtotal) cartSubtotal.innerText = `₹${subtotal.toLocaleString('en-IN')}`;
  if (cartShipping) cartShipping.innerText = shipping === 0 ? 'FREE' : `₹${shipping}`;
  if (cartGrandTotal) cartGrandTotal.innerText = `₹${grandTotal.toLocaleString('en-IN')}`;
  if (checkoutBtnTotal) checkoutBtnTotal.innerText = `₹${grandTotal.toLocaleString('en-IN')}`;
  if (coGrandTotal) coGrandTotal.innerText = `₹${grandTotal.toLocaleString('en-IN')}`;

  if (cartDiscountLine) {
    if (discountAmount > 0) {
      cartDiscountLine.style.display = 'flex';
      cartDiscountAmount.innerText = `-₹${discountAmount.toLocaleString('en-IN')}`;
    } else {
      cartDiscountLine.style.display = 'none';
    }
  }
}

// 7. PROMO CODE ENGINE
function applyPromoCode() {
  const input = document.getElementById('promoInput');
  const notice = document.getElementById('discountNotice');
  if (!input) return;

  const code = input.value.trim().toUpperCase();
  if (code === 'STREET20') {
    state.discountPercent = 20;
    state.activeCoupon = 'STREET20';
    if (notice) {
      notice.style.display = 'block';
      notice.innerText = '✔ Coupon STREET20 Applied! 20% Discount Activated.';
    }
    updateCartUI();
    showToast('20% Streetwear Discount Applied!');
  } else {
    showToast('Invalid coupon code. Try STREET20');
  }
}

// 8. WISHLIST ENGINE
function toggleWishlist(productId) {
  const index = state.wishlist.indexOf(productId);
  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast('Removed from Wishlist');
  } else {
    state.wishlist.push(productId);
    showToast('Saved to Wishlist ❤');
  }
  localStorage.setItem('kultur_wishlist', JSON.stringify(state.wishlist));
  updateWishlistUI();
  renderProducts();
}

function updateWishlistUI() {
  const badge = document.getElementById('wishlistCount');
  if (badge) badge.innerText = state.wishlist.length;
}

// 9. LIVE SEARCH ENGINE
function handleLiveSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const resultsContainer = document.getElementById('searchResultsList');
  if (!resultsContainer) return;

  if (!query) {
    resultsContainer.innerHTML = '';
    return;
  }

  const matches = PRODUCTS.filter(p => 
    p.title.toLowerCase().includes(query) || 
    p.brandRef.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query) ||
    p.fabric.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    resultsContainer.innerHTML = `<p style="padding: 12px; color: var(--text-muted); font-size: 0.85rem;">No streetwear items found for "${query}"</p>`;
    return;
  }

  resultsContainer.innerHTML = matches.map(p => `
    <div class="search-result-item" onclick="openQuickView(${p.id}); document.getElementById('searchModal').classList.remove('active');">
      <img src="${p.mainImg}" alt="${p.title}">
      <div>
        <h4 style="font-size: 0.88rem; color: #fff;">${p.title}</h4>
        <div style="font-size: 0.75rem; color: var(--accent-orange); font-weight: 700;">₹${p.sellingPrice.toLocaleString('en-IN')} <span style="color: var(--text-dim); text-decoration: line-through;">₹${p.mrp}</span></div>
      </div>
    </div>
  `).join('');
}

// 10. PRODUCT QUICK VIEW MODAL
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickViewModal');
  const content = document.getElementById('qvContent');
  if (!modal || !content) return;

  content.innerHTML = `
    <button class="close-qv-btn" onclick="document.getElementById('quickViewModal').classList.remove('active')">&times;</button>
    <div class="qv-gallery">
      <img src="${product.mainImg}" alt="${product.title}">
    </div>
    <div class="qv-details">
      <span class="card-category" style="margin-bottom: 8px;">${product.brandRef}</span>
      <h2 style="font-family: var(--font-display); font-size: 1.8rem; margin-bottom: 12px; line-height: 1.1;">${product.title}</h2>
      
      <div class="card-price-row" style="margin-bottom: 16px;">
        <span class="price-selling" style="font-size: 1.5rem;">₹${product.sellingPrice.toLocaleString('en-IN')}</span>
        <span class="price-mrp" style="font-size: 1rem;">₹${product.mrp.toLocaleString('en-IN')}</span>
        <span class="price-discount-text">${product.discount}</span>
      </div>

      <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.6; margin-bottom: 20px;">
        ${product.description}
      </p>

      <div style="margin-bottom: 20px;">
        <span style="font-size: 0.75rem; font-family: var(--font-heading); color: var(--text-muted); text-transform: uppercase;">Fabric Specification</span>
        <div style="color: #fff; font-weight: 700; font-size: 0.9rem; margin-top: 4px;">${product.fabric}</div>
      </div>

      <div style="margin-bottom: 24px;">
        <span style="font-size: 0.75rem; font-family: var(--font-heading); color: var(--text-muted); text-transform: uppercase;">Select Size</span>
        <div class="size-pill-row" style="justify-content: flex-start; margin-top: 8px;" id="qvSizesRow">
          ${product.sizes.map((s, idx) => `
            <button class="size-pill-btn ${idx === 0 ? 'active' : ''}" style="width: 40px; height: 40px; font-size: 0.85rem;" onclick="selectQvSize(this, '${s}')">${s}</button>
          `).join('')}
        </div>
      </div>

      <button class="btn-primary" style="width: 100%; justify-content: center;" onclick="addToCart(${product.id}, window.selectedQvSize || '${product.sizes[0]}'); document.getElementById('quickViewModal').classList.remove('active');">
        ⚡ ADD TO BAG & CHECKOUT
      </button>
    </div>
  `;

  window.selectedQvSize = product.sizes[0];
  modal.classList.add('active');
}

function selectQvSize(btn, size) {
  document.querySelectorAll('#qvSizesRow .size-pill-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  window.selectedQvSize = size;
}

// 11. GOKWIK FAST CHECKOUT SIMULATION
function handleOrderPlacement() {
  const body = document.getElementById('checkoutBody');
  const phone = document.getElementById('checkoutPhone').value;
  const address = document.getElementById('checkoutAddress').value;

  if (!phone || phone.length < 10) {
    showToast('Please enter a valid 10-digit mobile number');
    return;
  }

  body.innerHTML = `
    <div style="text-align: center; padding: 30px 10px;">
      <div style="width: 64px; height: 64px; background: var(--accent-orange); color: #000; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 20px;">
        ✓
      </div>
      <h3 style="font-family: var(--font-display); font-size: 1.8rem; margin-bottom: 8px;">ORDER CONFIRMED!</h3>
      <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 16px;">
        Order <strong>#KTR-${Math.floor(100000 + Math.random() * 900000)}</strong> has been placed via GoKwik Fast Express.
      </p>
      <div style="background: var(--bg-surface); padding: 14px; border-radius: var(--radius-sm); font-size: 0.8rem; color: var(--text-main); text-align: left; margin-bottom: 24px;">
        <div>📱 <strong>SMS Updates:</strong> Sent to +91 ${phone}</div>
        <div style="margin-top: 6px;">📍 <strong>Delivery Address:</strong> ${address}</div>
        <div style="margin-top: 6px;">🚚 <strong>Estimated Dispatch:</strong> Within 24 Hours via BlueDart Air</div>
      </div>
      <button class="btn-primary" style="width: 100%; justify-content: center;" onclick="location.reload()">
        RETURN TO STORE
      </button>
    </div>
  `;

  // Clear Cart
  state.cart = [];
  saveCart();
  updateCartUI();
  showToast('🎉 Order Successfully Placed!');
}

// 12. TOAST NOTIFICATION HELPER
window.showToast = function(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>⚡</span> <span>${message}</span>`;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
};
