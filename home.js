// Products Database
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

const hoverConfigs = [
    { id: 'shoes-img-hover',    defaultSrc: 'RU26033.webp',  hoverSrc: 'RU26033h.webp' },
    { id: 'shoes-img-hover2',   defaultSrc: 'RU26027.webp',  hoverSrc: 'RU26027h.webp' },
    { id: 'shoes-img-hover3',   defaultSrc: 'RU26025.webp',  hoverSrc: 'RU26025h.webp' },
    { id: 'shoes-img-hover4',   defaultSrc: 'RU26031.webp',  hoverSrc: 'RU26031h.webp' },
    { id: 'shoes-img-hover5',   defaultSrc: 'RU26032.webp',  hoverSrc: 'RU26032h.webp' },
    { id: 'shoes-img-hover6',   defaultSrc: 'RU26034.webp',  hoverSrc: 'RU26034h.webp' },
    { id: 'shoes-img-hover7',   defaultSrc: 'RU25339.webp',  hoverSrc: 'RU25339h.webp' },
    { id: 'shoes-img-hover8',   defaultSrc: 'RU26040.webp',  hoverSrc: 'RU26040h.webp' },
    { id: 'a1'},
    { id: 'a2'}
];

hoverConfigs.forEach(({ id, defaultSrc, hoverSrc }) => {
    const img = document.getElementById(id);
    if (!img) {
        return;
    }

    img.addEventListener('mouseover', () => {
        img.src = hoverSrc;
        img.style.border = '6px solid #263743';
        // Remove border for "shoes-img-hover8" only
        if (id === 'shoes-img-hover8' || id === 'shoes-img-hover' || id === 'shoes-img-hover6') {
            img.style.border = 'none';
        }
    });

    img.addEventListener('mouseout', () => {
        img.src = defaultSrc;
        img.style.border = 'none';
    });
});

// Add click event to product cards
document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
            // Don't redirect if clicking on the button or its children
            if (e.target.classList.contains('add-to-cart') || 
                e.target.closest('.add-to-cart')) {
                e.stopPropagation();
                // Add to cart functionality for home page
                const productId = card.getAttribute('data-product-id');
                if (productId && productsDatabase[productId]) {
                    const product = productsDatabase[productId];
                    const productData = {
                        name: product.name,
                        price: product.price,
                        size: '40', // Default size
                        color: '#ffffff', // Default color
                        quantity: 1
                    };
                    
                    let cart = JSON.parse(localStorage.getItem('cart')) || [];
                    cart.push(productData);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    alert('تم إضافة المنتج إلى السلة بنجاح!');
                }
                return;
            }
            
            const productId = card.getAttribute('data-product-id');
            if (productId && productsDatabase[productId]) {
                // Open product page in new tab
                window.open(`p.html?id=${productId}`, '_blank');
            }
        });
    });
});

document.getElementById('a1').addEventListener('click', function () {
    window.scrollTo({
        top: document.querySelector('.shoes-nameh').offsetTop,
        behavior: 'smooth'
    });
});

document.getElementById('a2').addEventListener('click', function () {
    window.scrollTo({
        top: document.querySelector('.shoes-nameh2').offsetTop,
        behavior: 'smooth'
    });
});

    