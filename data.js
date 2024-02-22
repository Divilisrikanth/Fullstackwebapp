const items =
[
    {
        id: 1,
        name:'Fresh Water Melon - Kiran, 1 Pc',
        img:'https://m.media-amazon.com/images/I/71ZaS7W9dYL._SX679_.jpg',
        price: '₹108.00',
        desc:'Watermelon Kiran can give your body quick nutrition. The fruit contains dark green coloured outer rind with stripes on it and grows larger at the time of maturity. Watermelon Kiran is liked by people during summers, as it can keep you hydrated in the scorching sun. It is low in calories and rich in anti-oxidants. Tastes best when served chilled and can also be used to make refreshing watermelon juice.',
        category:'fruits',
    },
    {
        id: 2,
        name:'Fresh Papaya medium, 1 Piece (800gm)',
        img:'https://m.media-amazon.com/images/I/61CuiyI4aBL._SX522_.jpg',
        price: '₹59.00',
        desc:'Papaya is a yellow-orange colored fruit. The semi riped papaya is half green and half yellow in color from outside and can be kept at room temperature for it to ripe. Ripe papaya is mainly orange in color. It is sometimes eaten plain and at other times with a pinch of black salt. Papayas can also be added to fruit salads or consumes as a puree with Indian breads. Papayas are good source of magnesium, potassium, calcium, and dietary fiber and are also rich in Vitamins A and C.',
        category:'fruits',
    },
    {
        id: 3,
        name:'Fresh Coconut - Medium 1Pc (450-500gm)',
        img:'https://m.media-amazon.com/images/I/61THuQWrAZL._SX679_.jpg',
        price: '₹26.00',
        desc:'The coconut, also known as “Nariyal” is popular for multiple uses across various regions. With its water being one of the best sources of hydration there are other benefits too. It is rich in Dietary Fiber. It can also be dried for longer storage duration. We source high quality fresh cocunuts and deliver it fresh at your door step.',
        category:'fruits',
    },
    {
        id: 4,
        name:'Fresh mango, Safeda/Banganapalli,1 KG',
        img:'https://m.media-amazon.com/images/I/41g30K50tCL._SX522_.jpg',
        price: '₹58.00',
        desc:'Mangoes are one of the most loved fruits in India. Banganpalli Mangoes are sourced from Andhra Pradesh and are known for their one of a kind sweet and rich taste. They are delicious and sweet-smelling with a maize-yellow shading. Mangoes contain more than 20 different vitamins and minerals. They are rich in Vitamin A & C and contains minerals like iron, folate, magnesium etc. Mangoes can be used in various ways as it can be cut and sliced, used to make shakes, juices, salads and can be served with ice creams and other desserts. Fresh Mangoes are procured directly from farms and sorted and graded in FSSAI compliant facilities to ensure the mangoes are perfectly ripened without any chemicals and ready to eat.',
        category:'fruits',
    },
    {
        id: 5,
        name:'Fresh Apple Red Delicious Imported, Pack of 4',
        img:'https://m.media-amazon.com/images/I/81aRkv2DltL._SX679_.jpg',
        price: '₹173.00',
        desc:'Red delicious apple is a dark red, crispy and luscious apple with a distinctive elongated, heart-shaped appearance. It has a reFreshing flavour and can be used in salads, pies or custard.',
        category:'fruits',
    },
    {
        id: 6,
        name:'Fresh Muskmelon 1 Piece, (500 - 900 g)',
        img:'https://m.media-amazon.com/images/I/71Q4mGcOpLL._SX679_.jpg',
        price: '₹60.00',
        desc:'Muskmelon is a fruit with netted outer covering. It has a slightly orange color flesh which is sweet in taste. It is mostly consumed in summer season due to its cooling properties. It is a rich source of Vtamin A, C, Potassium, Magnesium and Dietary Fiber. It can be used As-Is or can be used in making fruit salads, milkshakes, custard, and juices. It tastes best when served chilled. Store it in a cool dry place for better shelf life.',
        category:'fruits',
    },
    {
        id: 7,
        name:'Apple iPhone 13 (128GB) - Midnight',
        img:'https://m.media-amazon.com/images/I/61VuVU94RnL._SX679_.jpg',
        price: '₹51,499',
        desc:'15 cm (6.1-inch) Super Retina XDR display,Cinematic mode adds shallow depth of field and shifts focus automatically in your videos.',
        category:'Electronics',
        
    },
    {
        id: 8,
        name:'OnePlus Nord CE 3 Lite 5G (Chromatic Gray, 8GB RAM, 128GB Storage)',
        img:'https://m.media-amazon.com/images/I/61LB+d0vheL._SX679_.jpg',
        price: '₹19,999',
        desc:'Camera: 108 MP Main Camera with EIS; 2MP Depth-Assist Lens and 2MP Macro Lens; Front (Selfie) Camera: 16MP',
        category:'Electronics',
        
    },
    {
        id: 9,
        name:'Redmi Note 13 5G (Prism Gold, 8GB RAM, 256GB Storage) | MTK Dimensity 6080 5G | 7.6mm, Slimmest Note Ever',
        img:'https://m.media-amazon.com/images/I/710bX+jrz-L._SX679_.jpg',
        price: '₹19,999',
        desc:'Display: 6.67" FHD+ pOLED (1080x2400) Ultra-narrow bezels Display with 120Hz Refresh rate',
        category:'Electronics',
        
    },
    {
        id: 10,
        name:'realme narzo N55 (Prime Black, 6GB+128GB) 33W Segment Fastest Charging | Super High-res 64MP Primary AI Camera',
        img:'https://m.media-amazon.com/images/I/81ogvU1j6qL._SX679_.jpg',
        price: '₹9,749',
        desc:'* With fast 33W SUPERVOOC charging, the realme narzo N55 charges up the massive 5000mAh battery from 0-50% in just 29 minutes, making your life super convenient and stress free.',
        category:'Electronics',
        
    },
    {
        id: 11,
        name:"Samsung Galaxy M14 5G (ICY Silver,6GB,128GB)|50MP Triple Cam|Segment's Only 6000 mAh 5G SP|5nm Processor|2 Gen. OS Upgrade & 4 Year Security Update|12GB RAM with RAM Plus|Android 13|Without Charger",
        img:'https://m.media-amazon.com/images/I/81ZSn2rk9WL._SX569_.jpg',
        price: '₹11,999',
        desc:'Superfast 5G with 13 5G Bands, Powerful Exynos 1330 Octa Core 2.4GH 5nm processor with latest Android 13 having One UI 5.0 interface',
        category:'Electronics',
        
    },
    {
        id: 12,
        name:"DOMO Slate SLP9 10.1-Inch LCD, Octa Core Tablet PC, Dual SIM 4G + WiFi, LTE, Volte Calling, IPS LCD, 4GB RAM, 64GB Inbuilt Storage, 512 GB Expandable Storage, GPS, Bluetooth-(Grey)",
        img:'https://m.media-amazon.com/images/I/614p05EaaSL._SX679_.jpg',
        price: '₹10,439',
        desc:'10.1 Inch IPS HD LCD Display (400 NITS Brightness) | Voice Calling 4G, 3G & 2G SIM Card | VOLTE and LTE Supported',
        category:'Electronics',
        
    },
]

module.exports = {items};