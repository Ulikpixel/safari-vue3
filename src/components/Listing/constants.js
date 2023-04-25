const COLORS = [
    'Beige', 'Blue', 'Black',
    'Orange', 'Green', 'Brown',
    'Purple', 'Gold', 'Taupe',
    'White', 'Pink', 'Red',
];

const PRICES = [
    { from: 0, to: 10000 },
    { from: 10000, to: 20000 },
    { from: 20000, to: 50000 },
    { from: 50000, to: 100000 },
    { from: 100000, to: 200000 },
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