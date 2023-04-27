const COLORS = [
    { text: 'Beige', class: 'bg-beige' },
    { text: 'Blue', class: 'bg-blue' },
    { text: 'Black', class: 'bg-black' },
    { text: 'Orange', class: 'bg-orange' }, 
    { text: 'Green', class: 'bg-green' },
    { text: 'Brown', class: 'bg-brown' },
    { text: 'Purple', class: 'bg-purple' },
    { text: 'Gold', class: 'bg-gold' },
    { text: 'Taupe', class: 'bg-taupe' },
    { text: 'white', class: 'bg-white border' },
    { text: 'Pink', class: 'bg-pink' },
    { text: 'Red', class: 'bg-red' },
];


const PRICES = [
    { price_from: 0, price_to: 10000 },
    { price_from: 10000, price_to: 20000 },
    { price_from: 20000, price_to: 50000 },
    { price_from: 50000, price_to: 100000 },
    { price_from: 100000, price_to: 200000 },
];

export const LISTING_FILTER = {
    clothes: {
        category: [
            'Dresses', 'Denim', 'Jeans', 
            'Jumpsuits', 'Tops', 'Jackets and coats',
            'Pants', 'Shorts', 'Skirts',
            'Leather', 'Sweaters & knits', 'Loungerie & underwear', 
        ],
        sizes: [
            'XXS', 'XS', 'S', 'M',
            'L', 'XL', '23', '24',
            '25', '26', '27', '28',
            '29', '30', '31', '32'
        ],
        colors: COLORS,
        prices: PRICES,
    },
    shoes: {
        category: [
            'Booties', 'Flats', 'Boots',
            'Sandals', 'Sneakers', 'Slides & Slippers',
            'Heels', 'Wedges', 'Mules',
            'Party shoes', 'Vegan shoes', 'Oxfords',
        ],
        sizes: [
            '35.5/5', '36/5.5', '37.5/6.5',
            '38/7', '39/7.5', '39.5/8',
            '40/7.5', '41/9.5', '41.5/10',
            '42/10.5', '42/11', '43/12',
        ],
        colors: COLORS,
        prices: PRICES,
    },
    accessories: {
        category: [
            'Facemask', 'Jewelry', 'Watches',
            'Hair accessories', 'Belts', 'Backpacks',
            'Handbags', 'Fragrances', 'Sunglasses & eyewears',
            'Socks', 'Hats and beanies', 'Gloves',
        ],
        sizes: [
            'XS', 'S', 'S/M', 
            'M', 'M/L', 'L', 
            'XL', '6', '7', '8'
        ],
        colors: COLORS,
        prices: PRICES,
    },
};