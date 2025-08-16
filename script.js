// Product data with names/descriptions
const products = [
  { img: 'prod1.jpeg', name: 'طاولة رخام فاخرة' },
  { img: 'prod2.jpeg', name: 'حوض غسيل رخامي' },
  { img: 'prod3.jpg',  name: 'منضدة قهوة أنيقة' },
  { img: 'prod4.jpeg', name: 'رخام أبيض كلاسيكي' },
  { img: 'prod5.jpeg', name: 'تصميم رخامي أسود' },
  { img: 'prod6.jpeg', name: 'رخام للمطبخ' },
  { img: 'prod7.jpeg', name: 'رخام أرضيات فاخر' },
  { img: 'prod8.jpeg', name: 'رخام للجدران' },
  { img: 'prod9.jpeg', name: 'قطع رخامية متنوعة' }
];

// Select the container for products
const productContainer = document.querySelector('.product-grid');

// Clear any static HTML (if already written)
productContainer.innerHTML = '';

// Add products dynamically to the grid
products.forEach(product => {
  const card = document.createElement('div');
  card.classList.add('product-card');

  card.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <h3>${product.name}</h3>
  `;

  // Optional: Click event to highlight or show popup
  card.addEventListener('click', () => {
    alert(`تم اختيار: ${product.name}`);
  });

  productContainer.appendChild(card);
});
