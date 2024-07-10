const products = [
    {
        id: 1,
        name: 'iPhone 15',
        price: '449990',
        image: 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2Fsmartfon_apple_iphone_15_128gb_black_mtp03_274372_1.jpg&w=3840&q=85',
        description: 'Последний iPhone с передовыми функциями.',
        specs: {
            screenSize: '6.7 дюймов',
            storage: '128 ГБ',
            ram: '6 ГБ'
        }
    },
    {
        id: 2,
        name: 'iPhone 15 Pro',
        price: '539990',
        image: 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2Fsmartfon_gsm_apple_iphone_15_pro_256gb_82566148_natural_titanium_mtv53_274408_1.jpg&w=3840&q=85',
        description: 'Профессиональная версия iPhone 15 с расширенными возможностями.',
        specs: {
            screenSize: '6.7 дюймов',
            storage: '256 ГБ',
            ram: '8 ГБ'
        }
    },
    {
        id: 3,
        name: 'iPhone 15 Pro Max',
        price: '629990',
        image: 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2Fsmartfon_apple_iphone_15_pro_max_256gb_black_titanium_mu773_274418_1.jpg&w=3840&q=85',
        description: 'Идеальный опыт использования iPhone с самым большим экраном и передовыми функциями.',
        specs: {
            screenSize: '6.9 дюймов',
            storage: '512 ГБ',
            ram: '8 ГБ'
        }
    },
    {
        id: 4,
        name: 'MacBook Air 13',
        price: '449990',
        image: 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F262347_1.jpg&w=3840&q=85',
        description: 'Легкий и портативный ноутбук MacBook для повседневного использования.',
        specs: {
            screenSize: '13.3 дюйма',
            processor: 'Apple M1',
            storage: '256 ГБ SSD',
            ram: '8 ГБ'
        }
    },
    {
        id: 5,
        name: 'MacBook Pro 14',
        price: '524990',
        image: 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F254634_1.jpg&w=3840&q=85',
        description: 'Мощный MacBook Pro с компактным дисплеем 14 дюймов.',
        specs: {
            screenSize: '14.2 дюйма',
            processor: 'Apple M1 Pro',
            storage: '512 ГБ SSD',
            ram: '16 ГБ'
        }
    },
    {
        id: 6,
        name: 'MacBook Pro 16',
        price: '599990',
        image: 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F254631_1.jpg&w=3840&q=85',
        description: 'Максимально мощный MacBook Pro с большим 16-дюймовым экраном Retina.',
        specs: {
            screenSize: '16 дюймов',
            processor: 'Intel Core i9',
            storage: '1 ТБ SSD',
            ram: '32 ГБ'
        }
    },
    {
        id: 7,
        name: 'Apple Watch Series 8',
        price: '199990',
        image: 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2Fsmart_chasy_apple_watch_series_9_45mm_midnight_aluminium_case_midnight_sport_band_sm_mr993_274489_1.jpg&w=3840&q=85',
        description: 'Последняя модель умных часов Apple с передовыми функциями для здоровья.',
        specs: {
            caseSize: '45 мм',
            material: 'Алюминий',
            band: 'Midnight Sport Band'
        }
    },
    {
        id: 8,
        name: 'AirPods Max',
        price: '379990',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXgTeiRHU1aJNRQ39cs6MyLbeuf0mZURmrKw&s',
        description: 'Наушники с высоким качеством звука, адаптивной эквализацией и активной шумоизоляцией.',
        specs: {
            style: 'Накладные',
            connectivity: 'Bluetooth 5.0',
            batteryLife: 'До 20 часов'
        }
    },
    {
        id: 9,
        name: 'iPad Pro',
        price: '429990',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf8woyNpLMy3kuM-CF1G3Uxo9tAuMy1lx4NA&s',
        description: 'Самый мощный iPad с продвинутым чипом M1 и потрясающим дисплеем Liquid Retina XDR.',
        specs: {
            screenSize: '12.9 дюйма',
            processor: 'Apple M1',
            storage: '1 ТБ',
            display: 'Liquid Retina XDR'
        }
    },
];

export default products;
