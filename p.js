// Products Database (same as in home.js)
const productsDatabase = {
    1: {
        name: 'AIRLIFE SPORT SHOES-GRAY',
        price: '250',
        image: 'RU26027.webp',
        hoverImage: 'RU26027h.webp',
        description: 'حذاء رياضي أنيق من مجموعة AIRLIFE، مصمم للراحة والأداء. يتميز بتصميم عصري ولون رمادي كلاسيكي.'
    },
    2: {
        name: 'AIRLIFE SPORT SHOES-BLACK',
        price: '250',
        image: 'RU26025.webp',
        hoverImage: 'RU26025h.webp',
        description: 'حذاء رياضي أسود أنيق من مجموعة AIRLIFE، مثالي للاستخدام اليومي والرياضي.'
    },
    3: {
        name: 'AIRLIFE SPORT SHOES-BLUE',
        price: '250',
        image: 'RU26031.webp',
        hoverImage: 'RU26031h.webp',
        description: 'حذاء رياضي أزرق جذاب من مجموعة AIRLIFE، يجمع بين الأناقة والراحة.'
    },
    4: {
        name: 'AIRLIFE SPORT SHOES-D.GRAY',
        price: '250',
        image: 'RU26032.webp',
        hoverImage: 'RU26032h.webp',
        description: 'حذاء رياضي رمادي داكن من مجموعة AIRLIFE، يتميز بتصميم عصري ومريح.'
    },
    5: {
        name: 'AIRLIFE SPORT SHOES-D.GRAY',
        price: '250',
        image: 'RU25339.webp',
        hoverImage: 'RU25339h.webp',
        description: 'حذاء رياضي رمادي داكن أنيق من مجموعة AIRLIFE، مناسب لجميع المناسبات.'
    },
    6: {
        name: 'Urban-WHITE/DARK GREEN',
        price: '675',
        image: 'RU26033.webp',
        hoverImage: 'RU26033h.webp',
        description: 'حذاء رياضي أنيق ومريح من مجموعة Urban، مصمم للراحة والأسلوب. يتميز بتصميم عصري وألوان جذابة تناسب جميع الأذواق.'
    },
    7: {
        name: 'Urban-Light Brown',
        price: '250',
        image: 'RU26034.webp',
        hoverImage: 'RU26034h.webp',
        description: 'حذاء Urban بلون بني فاتح أنيق، يجمع بين الكلاسيكية والحداثة.'
    },
    8: {
        name: 'Urban White / Blue-Women',
        price: '250',
        image: 'RU26040.webp',
        hoverImage: 'RU26040h.webp',
        description: 'حذاء Urban للنساء بألوان بيضاء وزرقاء جذابة، مصمم خصيصاً للأناقة والراحة.'
    }
};

// Load product data from URL parameters
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId && productsDatabase[productId]) {
        loadProduct(productId);
    } else {
        // Default product if no ID provided
        loadProduct(6);
    }
});

// Load product data
function loadProduct(productId) {
    const product = productsDatabase[productId];
    if (!product) return;
    
    // Update product name
    document.getElementById('product-name').textContent = product.name;
    
    // Update product price
    document.getElementById('product-price').textContent = product.price;
    
    // Update main image
    const mainImg = document.getElementById('main-product-img');
    mainImg.src = product.image;
    mainImg.alt = product.name;
    
    // Update thumbnails
    const thumbnailContainer = document.querySelector('.thumbnail-images');
    thumbnailContainer.innerHTML = `
        <img class="thumbnail active" src="${product.image}" alt="صورة 1" onclick="changeMainImage('${product.image}')">
        <img class="thumbnail" src="${product.hoverImage}" alt="صورة 2" onclick="changeMainImage('${product.hoverImage}')">
    `;
    
    // Update description
    const descriptionText = document.querySelector('.product-description p');
    if (descriptionText) {
        descriptionText.textContent = product.description;
    }
    
    // Update page title
    document.title = `شوذاتك - ${product.name}`;
}

// Change main product image
function changeMainImage(imageSrc) {
    const mainImg = document.getElementById('main-product-img');
    mainImg.src = imageSrc;
    
    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => {
        thumb.classList.remove('active');
        if (thumb.src.includes(imageSrc) || thumb.getAttribute('onclick').includes(imageSrc)) {
            thumb.classList.add('active');
        }
    });
}

// Select size
function selectSize(button) {
    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

// Select color
function selectColor(element) {
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => option.classList.remove('active'));
    element.classList.add('active');
}

// Quantity controls
let quantity = 1;

function increaseQuantity() {
    quantity++;
    updateQuantityDisplay();
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        updateQuantityDisplay();
    }
}

function updateQuantityDisplay() {
    document.getElementById('quantity').textContent = quantity;
}

// Add to cart
function addToCart() {
    const productName = document.getElementById('product-name').textContent;
    const productPrice = document.getElementById('product-price').textContent;
    const selectedSize = document.querySelector('.size-btn.active').textContent;
    const selectedColor = document.querySelector('.color-option.active').style.backgroundColor;
    
    const product = {
        name: productName,
        price: productPrice,
        size: selectedSize,
        color: selectedColor,
        quantity: quantity
    };
    
    // Save to localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    alert('تم إضافة المنتج إلى السلة بنجاح!');
}

// Buy now
function buyNow() {
    addToCart();
    // Redirect to checkout page (you can create this later)
    // window.location.href = 'checkout.html';
    alert('سيتم توجيهك إلى صفحة الدفع قريباً');
}

