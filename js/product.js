document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 4, src: 'img/item4.jpg', alt: 'item4 image', price: '$52.00' },
        { id: 3, src: 'img/item3.jpg', alt: 'item3 image' },
        { id: 6, src: 'img/item6.jpg', alt: 'item6 image' },        
    ];

    renderPage(products, '.items-product');
});