document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, src: 'img/item1.jpg', alt: 'item1 image', price: '$52.00' },
        { id: 2, src: 'img/item2.png', alt: 'item2 image' },
        { id: 3, src: 'img/item3.jpg', alt: 'item3 image' },
        { id: 4, src: 'img/item4.jpg', alt: 'item4 image' },
        { id: 5, src: 'img/item5.jpg', alt: 'item5 image' },
        { id: 6, src: 'img/item6.jpg', alt: 'item6 image' },
    ];

    renderPage(products, '.items-index', true);
});