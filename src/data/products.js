const products = [
    {
        id: 1,
        name: 'iPhone 15',
        price: 999.99,
        image: 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2Fsmartfon_apple_iphone_15_128gb_black_mtp03_274372_1.jpg&w=3840&q=85',
        description: 'The latest iPhone with advanced features.',
        specs: {
            screenSize: '6.7 inches',
            storage: '128GB',
            ram: '6GB'
        }
    },
    {
        id: 2,
        name: 'iPhone 15 Pro',
        price: 1199.99,
        image: 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2Fsmartfon_gsm_apple_iphone_15_pro_256gb_82566148_natural_titanium_mtv53_274408_1.jpg&w=3840&q=85',
        description: 'The professional version of iPhone 15 with enhanced capabilities.',
        specs: {
            screenSize: '6.7 inches',
            storage: '256GB',
            ram: '8GB'
        }
    },
    {
        id: 3,
        name: 'iPhone 15 Pro Max',
        price: 1399.99,
        image: 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2Fsmartfon_apple_iphone_15_pro_max_256gb_black_titanium_mu773_274418_1.jpg&w=3840&q=85',
        description: 'The ultimate iPhone experience with the largest display and most advanced features.',
        specs: {
            screenSize: '6.9 inches',
            storage: '512GB',
            ram: '8GB'
        }
    },
    {
        id: 4,
        name: 'MacBook Air 13',
        price: 999.99,
        image: 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F262347_1.jpg&w=3840&q=85',
        description: 'The lightweight and portable MacBook for everyday use.',
        specs: {
            screenSize: '13.3 inches',
            processor: 'Apple M1',
            storage: '256GB SSD',
            ram: '8GB'
        }
    },
    {
        id: 5,
        name: 'MacBook Pro 14',
        price: 1159.99,
        image: 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F254634_1.jpg&w=3840&q=85',
        description: 'The powerful MacBook Pro with a compact 14-inch display.',
        specs: {
            screenSize: '14.2 inches',
            processor: 'Apple M1 Pro',
            storage: '512GB SSD',
            ram: '16GB'
        }
    },
    {
        id: 6,
        name: 'MacBook Pro 16',
        price: 1324.99,
        image: 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F254631_1.jpg&w=3840&q=85',
        description: 'The ultimate MacBook Pro with a large 16-inch Retina display.',
        specs: {
            screenSize: '16 inches',
            processor: 'Intel Core i9',
            storage: '1TB SSD',
            ram: '32GB'
        }
    },
    {
        id: 7,
        name: 'Apple Watch Series 8',
        price: 444.99,
        image: 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2Fsmart_chasy_apple_watch_series_9_45mm_midnight_aluminium_case_midnight_sport_band_sm_mr993_274489_1.jpg&w=3840&q=85',
        description: 'The latest iteration of Apple\'s smartwatch with advanced health features.',
        specs: {
            caseSize: '45mm',
            material: 'Aluminum',
            band: 'Midnight Sport Band'
        }
    },
    {
        id: 8,
        name: 'AirPods Max',
        price: 844.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXgTeiRHU1aJNRQ39cs6MyLbeuf0mZURmrKw&s',
        description: 'High-fidelity over-ear headphones with adaptive EQ and active noise cancellation.',
        specs: {
            style: 'Over-ear',
            connectivity: 'Bluetooth 5.0',
            batteryLife: 'Up to 20 hours'
        }
    },
    {
        id: 9,
        name: 'iPad Pro',
        price: 954.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf8woyNpLMy3kuM-CF1G3Uxo9tAuMy1lx4NA&s',
        description: 'The most powerful iPad with the advanced M1 chip and stunning Liquid Retina XDR display.',
        specs: {
            screenSize: '12.9 inches',
            processor: 'Apple M1',
            storage: '1TB',
            display: 'Liquid Retina XDR'
        }
    },
];

export default products;

