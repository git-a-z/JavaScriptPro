document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, src: 'img/item1.jpg', alt: 'item1 image', price: '$52.00' },
        { id: 7, src: 'img/item7.png', alt: 'item7 image' },
        { id: 3, src: 'img/item3.jpg', alt: 'item3 image' },
        { id: 4, src: 'img/item4.jpg', alt: 'item4 image' },
        { id: 8, src: 'img/item8.jpg', alt: 'item8 image' },
        { id: 9, src: 'img/item9.jpg', alt: 'item9 image' },
        { id: 10, src: 'img/item10.jpg', alt: 'item10 image' },
        { id: 11, src: 'img/item11.jpg', alt: 'item11 image' },
        { id: 12, src: 'img/item12.jpg', alt: 'item12 image' },
    ];

    renderPage(products, '.items-catalog', true);
});