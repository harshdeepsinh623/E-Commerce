document.addEventListener('DOMContentLoaded', function () {
    const cart = document.querySelector('.cart');
    const cartItems = document.querySelector('.cart .items');
    const cartTotal = document.querySelector('.cart .total span');
    const products = document.querySelectorAll('.product');

    let cartData = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartDisplay() {
        cartItems.innerHTML = ''; 
        let total = 0;

        cartData.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = `${item.name} - ₹${item.price.toLocaleString()} x ${item.quantity}`;
            cartItems.appendChild(itemDiv);
            total += item.price * item.quantity; // Multiply price by quantity
        });

        cartTotal.textContent = `₹${total.toLocaleString()}`; 
    }

    function addToCart(productName, productPrice) {
        productPrice = parseFloat(productPrice); 
        const existingItem = cartData.find(item => item.name === productName);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cartData.push({ name: productName, price: productPrice, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cartData));

        updateCartDisplay();
        alert(`${productName} added to cart!`);
    }

    products.forEach(product => {
        const addToCartButton = product.querySelector('.addtocart');
        addToCartButton.addEventListener('click', function () {
            const productName = product.querySelector('h3').textContent;
            const productPrice = product.dataset.price;
            addToCart(productName, productPrice);
        });
    });

    updateCartDisplay();
});

function filterProducts(category) {
    const allProducts = document.querySelectorAll('.product');
    
    allProducts.forEach(product => {
        const productCategory = product.getAttribute('data-category');

        if (category === 'all' || productCategory === category) {
            product.style.display = 'block';
            product.style.width = 'calc(30% - 2rem)';
        } else {
            product.style.display = 'none';
        }
    });
}

document.querySelectorAll('.category-filter').forEach(button => {
    button.addEventListener('click', function () {
        const category = button.dataset.category;
        filterProducts(category);
    });
});

let cart = [];

function addToCart(product, price) {
    cart.push({product, price});
}

function goToCart() {
    window.location.href = "cart.html";
}

document.querySelector('.cart-icon').addEventListener('click', () => {
    alert('Cart: ' + cart.map(item => `${item.product} - ₹${item.price}`).join(', '));
});

function searchProducts(query) {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        const productCategory = product.getAttribute('data-category').toLowerCase();
        if (productName.includes(query.toLowerCase()) || productCategory.includes(query.toLowerCase())) {
            product.style.display = 'block';
        } 
        else {
            product.style.display = 'none';
        }
    });
}

document.querySelector('.contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const subject = this.querySelector('input[name="subject"]').value;
    const message = this.querySelector('textarea[name="message"]').value;

    const mailtoLink = `mailto:youremail@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    )}`;

    window.location.href = mailtoLink;
});

const companyData = {

    Laptop: [
        { name: "Dell", logo: "https://th.bing.com/th/id/OIP.Yvwe0PnQIDLi2eb2owiU6wHaHa?rs=1&pid=ImgDetMain", },
        { name: "HP", logo: "https://deltafonts.com/wp-content/uploads/HP-Logo.png" },
        { name: "Apple", logo: "https://th.bing.com/th/id/OIP._-PHuJMA9l7DqLNvDhH0RwHaHa?w=512&h=512&rs=1&pid=ImgDetMain" },
        { name: "Lenovo", logo: "https://th.bing.com/th/id/OIP.ZXRH1sQEKNwFSoOF1zUc0gHaFQ?rs=1&pid=ImgDetMain" },
        { name: "Asus", logo: "https://www.freepnglogos.com/uploads/logo-asus-png/asus-logo-photo-by-llexandro-19.png" },
        { name: "Acer", logo: "https://th.bing.com/th/id/R.8ca7fd67c25e9107873ff31a01dc7cbc?rik=J3c0PRZT2rE%2fiQ&riu=http%3a%2f%2fwww.ranklogos.com%2fwp-content%2fuploads%2f2014%2f09%2fAcer-logo.jpg&ehk=oOscSsmFTbrHSWiL5%2bcBhpZY9I%2bxpsl21inNOkzbyN8%3d&risl=&pid=ImgRaw&r=0" },
        { name: "Microsoft", logo: "https://purepng.com/public/uploads/large/purepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png" },
        { name: "MSI", logo: "https://logodownload.org/wp-content/uploads/2014/09/msi-logo-5.png" },
        { name: "Razer", logo: "https://th.bing.com/th/id/OIP.y80n2tUPlxYLW4vMTk01QwAAAA?w=344&h=349&rs=1&pid=ImgDetMain" },
        { name: "Samsung", logo: "https://www.oneclickroot.com/wp-content/uploads/2016/06/Samsung-Logo.png" }
    ],

    Smartphone: [
        { name: "Samsung", logo: "https://www.oneclickroot.com/wp-content/uploads/2016/06/Samsung-Logo.png" },
        { name: "Apple", logo: "https://th.bing.com/th/id/OIP._-PHuJMA9l7DqLNvDhH0RwHaHa?w=512&h=512&rs=1&pid=ImgDetMain" },
        { name: "OnePlus", logo: "https://9to5google.com/wp-content/uploads/sites/4/2020/03/oneplus_logo_uspto_1.jpg?resize=350" },
        { name: "Infinix", logo: "https://www.codester.com/static/uploads/items/000/022/22057/preview/002.jpg" },
        { name: "Xiaomi", logo: "https://static.vecteezy.com/system/resources/previews/020/927/795/original/xiaomi-brand-logo-phone-symbol-design-chinese-mobile-illustration-free-vector.jpg" },
        { name: "Oppo", logo: "https://pluspng.com/img-png/oppo-logo-png-img-oppo-logo-in-svg-vector-or-png-file-format-logo-wine-3000x2000.png" },
        { name: "Vivo", logo: "https://assets.gadgets360cdn.com/pricee/assets/brand/og-vivo-logo.png" },
        { name: "Motorola", logo: "https://th.bing.com/th/id/R.6d4dd16ccb13d4a3e49d66d4bcac0580?rik=CyXKLFBN5dBJeA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fmotorola-png-motorola-brand-2172.jpg&ehk=GZu2r6zSkD5s0YcQ0gcO7ZYO7mZmydQh5GBxWP8vMlA%3d&risl=&pid=ImgRaw&r=0" },
        { name: "Realme", logo: "https://static.vecteezy.com/system/resources/previews/022/100/981/non_2x/realme-logo-transparent-free-png.png" },
        { name: "Lava", logo: "https://static.vecteezy.com/system/resources/thumbnails/020/927/384/small_2x/lava-brand-logo-phone-symbol-name-pink-design-india-mobile-illustration-free-vector.jpg" }
    ],

    Television: [
        { name: "Samsung", logo: "https://www.oneclickroot.com/wp-content/uploads/2016/06/Samsung-Logo.png" },
        { name: "LG", logo: "https://vectorseek.com/wp-content/uploads/2021/01/LG-Logo-Vector-scaled.jpg" },
        { name: "Sony", logo: "https://cdn.specpick.com/images/photonics/products/df7ceddb-a-21_209_imx253mzr_myr_big.PNG" },
        { name: "Toshiba", logo: "https://th.bing.com/th/id/R.5e3d08177ea7e4fc54efe071fd198990?rik=8%2f6sL4UfcbWTKg&riu=http%3a%2f%2flogok.org%2fwp-content%2fuploads%2f2014%2f12%2fToshiba_logo.png&ehk=x%2f3K%2f9XKj0I64Dfx4UK4kZTr6FeQmmB1qGL8TsFWazk%3d&risl=&pid=ImgRaw&r=0" },
        { name: "iFFalcon", logo: "https://www.static-src.com/wcsstore/Indraprastha/images/brandlogo/BRD-102694/iffalcon.png" },
        { name: "Panasonic", logo: "https://static.vecteezy.com/system/resources/previews/022/100/706/original/panasonic-logo-transparent-free-png.png" },
        { name: "Hisense", logo: "https://logos-world.net/wp-content/uploads/2023/03/Hisense-Logo-1994-500x281.png" },
        { name: "Xiaomi", logo: "https://static.vecteezy.com/system/resources/previews/020/927/795/original/xiaomi-brand-logo-phone-symbol-design-chinese-mobile-illustration-free-vector.jpg" },
        { name: "Croma", logo: "https://logowik.com/content/uploads/images/croma9414.logowik.com.webp" },
        { name: "TCL", logo: "https://th.bing.com/th/id/OIP.DA2LH0_U2zHgJ2bIx9Mt3wHaHa?w=2048&h=2048&rs=1&pid=ImgDetMain" }
    ],

    Speakers: [
        { name: "Bose", logo: "https://pluspng.com/img-png/bose-png--522.png"},
        { name: "Sony", logo: "https://cdn.mos.cms.futurecdn.net/ab2f646650e5079119654b397c96eff9-1200-80.jpg"},
        { name: "Sonos", logo: "https://logos-marcas.com/wp-content/uploads/2021/10/Sonos-Emblema.png"},
        { name: "Harman International", logo: "https://s3.amazonaws.com/cms.ipressroom.com/214/files/20176/5964ce152cfac24b033657cf_Harman+Primary+Corporate+Logo+CMYK/Harman+Primary+Corporate+Logo+CMYK_hero.jpg"},
        { name: "Bang & Olufsen", logo: "https://www.carolinegibson.co.uk/wp-content/uploads/2021/04/bang-olufsen.png"},
        { name: "Klipsch", logo: "https://cdn.windowsreport.com/wp-content/uploads/2019/11/klipsch.jpg"},
        { name: "Sennheiser", logo: "https://logos-world.net/wp-content/uploads/2020/12/Sennheiser-Logo-1982-2017-700x394.png"},
        { name: "KEF", logo: "https://static.vecteezy.com/system/resources/previews/020/285/130/non_2x/kef-abstract-business-growth-logo-design-on-white-background-kef-creative-initials-letter-logo-concept-vector.jpg"},
        { name: "Yamaha", logo: "https://purepng.com/public/uploads/large/yamaha-logo-yny.png"},
        { name: "Devialet", logo: "https://i.pinimg.com/originals/51/b0/1f/51b01f495687e97ea2ecf065ce15bfb6.png"}
    ],

    Video_Game_Console: [
        { name: "Sony", logo: "https://cdn.mos.cms.futurecdn.net/ab2f646650e5079119654b397c96eff9-1200-80.jpg"},
        { name: "Microsoft", logo: "https://purepng.com/public/uploads/large/purepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png"},
        { name: "Nintendo", logo: "https://static.vecteezy.com/system/resources/previews/022/101/074/large_2x/nintendo-logo-transparent-free-png.png"},
        { name: "Logitech", logo: "https://uploads-ssl.webflow.com/621f27e1e4e9f9673a3ff93e/639fec0498945138dd3451c3_logitech-logo.svg"},
        { name: "Valve", logo: "https://www.nicepng.com/png/full/236-2367486_valve-logo-logo.png"},
        { name: "Analogue", logo: "https://freepngdesign.com/content/uploads/images/p-1665-7-analog-devices-logo-png-transparent-logo-406819148866.png"},
        { name: "Bandai Namco", logo: "https://cdn-icons-png.flaticon.com/512/588/588261.png"},
        { name: "Atari", logo: "https://logosmarcas.net/wp-content/uploads/2021/08/Atari-Logo.png"},
        { name: "SEGA Holdings", logo: "https://hmv.com/getmedia/d25eb134-f79c-43bb-8d0a-bba6414e5c52/sega_feature_panel.jpg"},
        { name: "Amkette", logo: "https://www.computerhope.com/comp/logos/amkette.png"}
    ],

    Printer: [
        { name: "HP", logo: "https://deltafonts.com/wp-content/uploads/HP-Logo.png"},
        { name: "Canon", logo: "https://th.bing.com/th/id/OIP.BjFUDdjE2gMTvUFOPQHEjAAAAA?w=474&h=474&rs=1&pid=ImgDetMain"},
        { name: "Xerox", logo: "https://th.bing.com/th/id/OIP.J_UJyLnP8-HlNjewtECVFAHaHa?rs=1&pid=ImgDetMain"},
        { name: "Brother", logo: "https://th.bing.com/th/id/OIP.KQHB7zE-IEbW_INwrjdw_QHaFj?w=1280&h=960&rs=1&pid=ImgDetMain"},
        { name: "Ricoh", logo: "https://cdn.shopify.com/s/files/1/0365/6433/6773/files/ricoh_480x288.png?v=1685569798"},
        { name: "Konica Minolta", logo: "https://www.bisinfotech.com/wp-content/uploads/2017/07/Konica-Minolta-1.jpg"},
        { name: "Lexmark", logo: "https://th.bing.com/th/id/OIP.KhYx56HjGIxPFR598Riy9wHaHa?w=500&h=500&rs=1&pid=ImgDetMain"},
        { name: "Seiko Epson", logo: "https://logodix.com/logo/1021326.jpg"},
        { name: "Sharp", logo: "https://www.senghuat.com.my/image/senghuat/image/data/all_product_images/product-4402/9wa8CPBF1690881201.jpg"},
        { name: "Toshiba", logo: "https://th.bing.com/th/id/R.5e3d08177ea7e4fc54efe071fd198990?rik=8%2f6sL4UfcbWTKg&riu=http%3a%2f%2flogok.org%2fwp-content%2fuploads%2f2014%2f12%2fToshiba_logo.png&ehk=x%2f3K%2f9XKj0I64Dfx4UK4kZTr6FeQmmB1qGL8TsFWazk%3d&risl=&pid=ImgRaw&r=0"}
    ],

    T_Shirt: [
        { name: "Nike", logo: "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo-1978-present.jpg"},
        { name: "Zara", logo: "https://logos-world.net/wp-content/uploads/2020/05/Zara-Logo-1975-2008.png"},
        { name: "Louis Vuitton", logo: "https://logo-marque.com/wp-content/uploads/2020/04/Louis-Vuitton-Embl%C3%A8me.jpg"},
        { name: "Hermès", logo: "https://logos-world.net/wp-content/uploads/2020/12/Hermes-Logo.png"},
        { name: "Chanel", logo: "https://logos-world.net/wp-content/uploads/2020/04/Chanel-Logo.png"},
        { name: "Gucci", logo: "https://pluspng.com/img-png/gucci-logo-png-gucci-logo-png-transparent-background-download-1500.png"},
        { name: "Under Armour", logo: "https://logos-world.net/wp-content/uploads/2020/04/Under-Armour-Logo-1999-2005.png"},
        { name: "Armani", logo: "https://logosmarcas.net/wp-content/uploads/2020/11/Giorgio-Armani-Logo.png"},
        { name: "Versace", logo: "https://tous-logos.com/wp-content/uploads/2017/04/Symbole-Versace.jpg"},
        { name: "Dolce & Gabbana", logo: "https://logos-world.net/wp-content/uploads/2020/12/Dolce-Gabbana-Logo.png"}
    ],

    Pants: [
        { name: "Levi's", logo: "https://tse2.mm.bing.net/th?id=OIP.su6kBHPEbgSn95y1rurlwQHaHa&w=200&h=200&c=7"},
        { name: "Wrangler", logo: "https://tse1.mm.bing.net/th?id=OIP.kBgb6TLewCebl1EBlRMYOAHaHa&w=200&h=200&c=7"},
        { name: "Diesel", logo: "https://tse4.mm.bing.net/th?id=OIP.WAfoN6b9d2tOKooIicjL2QHaEI&w=200&h=112&c=7"},
        { name: "Lee", logo: "https://tse4.mm.bing.net/th?id=OIP.7jvlfrWaUYTnDYs-KBieVAHaE9&w=200&h=134&c=7"},
        { name: "Pepe Jeans", logo: "https://th.bing.com/th/id/OIP.-Fgw67DIXBeNAznuVeGokQHaEG?rs=1&pid=ImgDetMain"},
        { name: "Calvin Klein", logo: "https://logos-world.net/wp-content/uploads/2020/04/Calvin-Klein-Logo-1975-1992.png"},
        { name: "Tommy Hilfiger", logo: "https://tse1.mm.bing.net/th?id=OIP.ZI8OKCbsmuCR-FtlNy8wuQHaEK&w=200&h=112&c=7"},
        { name: "Ralph Lauren", logo: "https://tse3.mm.bing.net/th?id=OIP.J6YUexRdCcK-I-cHrX3QzAHaEK&w=200&h=112&c=7"},
        { name: "Armani", logo: "https://tse4.mm.bing.net/th?id=OIP.Uk3Yf7C5gVI0SzeMq234ogHaEK&w=200&h=112&c=7"},
        { name: "Gucci", logo: "https://tse1.mm.bing.net/th?id=OIP.RH0M45IErwpiptUWO9e-cgHaHa&w=200&h=200&c=7"}
    ],

    Shirt: [
        { name: "Ralph Lauren", logo: "https://tse3.mm.bing.net/th?id=OIP.J6YUexRdCcK-I-cHrX3QzAHaEK&w=200&h=112&c=7"},
        { name: "Brooks Brothers", logo: "https://logos-world.net/wp-content/uploads/2020/08/Brooks-Brothers-Logo.png"},
        { name: "Charles Tyrwhitt", logo: "https://www.kingsfordoffice.com/wp-content/uploads/2016/08/charles-tyrwhitt-logo.jpg"},
        { name: "Turnbull & Asser", logo: "https://cdn.shopify.com/s/files/1/0267/6254/3149/files/T_A-logo.png?height=628&pad_color=ffffff&v=1583764898&width=1200"},
        { name: "Eton", logo: "https://th.bing.com/th/id/OIP.gXGsHprUGc3vZNvQ_XSVQQHaHa?rs=1&pid=ImgDetMain"},
        { name: "Thomas Pink", logo: "https://th.bing.com/th/id/OIP.ziFQ442a7rwZYIOQBkgQGAAAAA?rs=1&pid=ImgDetMain"},
        { name: "Hugo Boss", logo: "https://th.bing.com/th/id/R.5a36648aa816e664e77d2c4dab71f908?rik=JEHYATR45WXKww&riu=http%3a%2f%2f3.bp.blogspot.com%2f-DHlp6IiFmRs%2fVVAuzHLBVGI%2fAAAAAAAACVs%2fc6kLNSxCOiE%2fs1600%2fHugo-boss-logo-vector.png&ehk=ebLE6UDCyslAIu5B4ptiXjkjHOv0xYPOavpl%2bYo3dCU%3d&risl=&pid=ImgRaw&r=0"},
        { name: "Calvin Klein", logo: "https://logos-world.net/wp-content/uploads/2020/04/Calvin-Klein-Logo-1975-1992.png"},
        { name: "Uniqlo", logo: "https://cdn.freebiesupply.com/logos/thumbs/2x/uniqlo-1-logo.png"},
        { name: "Hanes", logo: "https://vignette.wikia.nocookie.net/logopedia/images/f/f8/Hanes.png/revision/latest?cb=20170421153602"}
    ],

    Jacket: [
        { name: "The North Face", logo: ""},
        { name: "Patagonia", logo: ""},
        { name: "Columbia Sportswear", logo: ""},
        { name: "Arc'teryx", logo: ""},
        { name: "Canada Goose", logo: ""},
        { name: "Moncler", logo: ""},
        { name: "Uniqlo", logo: ""},
        { name: "Marmot", logo: ""},
        { name: "Helly Hansen", logo: ""},
        { name: "Burberry", logo: ""}
    ],

    Suits: [
        { name: "Brioni", logo: ""},
        { name: "Savile Row", logo: ""},
        { name: "Tom Ford", logo: ""},
        { name: "Armani", logo: ""},
        { name: "Zegna", logo: ""},
        { name: "Canali", logo: ""},
        { name: "Kiton", logo: ""},
        { name: "Hugo Boss", logo: ""},
        { name: "Ralph Lauren Purple Label", logo: ""},
        { name: "Corneliani", logo: ""}
    ],

    Sweater: [
        { name: "Loro Piana", logo: ""},
        { name: "The Elder Statesman", logo: ""},
        { name: "Prada", logo: ""},
        { name: "Chanel", logo: ""},
        { name: "Burberry", logo: ""},
        { name: "Ralph Lauren", logo: ""},
        { name: "John Smedley", logo: ""},
        { name: "BOSS (Hugo Boss)", logo: ""},
        { name: "Armani", logo: ""},
        { name: "Uniqlo", logo: ""}
    ],

    Headphone: [
        { name: "Sony", logo: ""},
        { name: "Bose", logo: ""},
        { name: "Sennheiser", logo: ""},
        { name: "Apple", logo: ""},
        { name: "Bang & Olufsen", logo: ""},
        { name: "JBL", logo: ""},
        { name: "Audio-Technica", logo: ""},
        { name: "Shure", logo: ""},
        { name: "boAt", logo: ""},
        { name: "Zebronics", logo: ""}
    ],

    Watch: [
        { name: "Titan", logo: ""},
        { name: "Rolex", logo: ""},
        { name: "Fossil", logo: ""},
        { name: "Helios", logo: ""},
        { name: "Omega", logo: ""},
        { name: "Panerai", logo: ""},
        { name: "Hublot", logo: ""},
        { name: "Breitling", logo: ""},
        { name: "Patek Philippe", logo: ""},
        { name: "Casio", logo: ""}
    ],

    Glasses: [
        { name: "Luxottica", logo: ""},
        { name: "Ray-Ban", logo: ""},
        { name: "Oakley", logo: ""},
        { name: "Essilor", logo: ""},
        { name: "Vincent Chase", logo: ""},
        { name: "Prada", logo: ""},
        { name: "Warby Parker", logo: ""},
        { name: "Maui Jim", logo: ""},
        { name: "Silhouette", logo: ""},
        { name: "Gucci", logo: ""}
    ],

    Shoes: [
        { name: "Nike", logo: ""},
        { name: "Adidas", logo: ""},
        { name: "Puma", logo: ""},
        { name: "New Balance", logo: ""},
        { name: "Reebok", logo: ""},
        { name: "Vans", logo: ""},
        { name: "Under Armour", logo: ""},
        { name: "Skechers", logo: ""},
        { name: "Bata", logo: ""},
        { name: "Liberty Shoes", logo: ""}
    ],

    Belts: [
        { name: "Gucci", logo: ""},
        { name: "Louis Vuitton", logo: ""},
        { name: "Hermes", logo: ""},
        { name: "Prada", logo: ""},
        { name: "Dunhill", logo: ""},
        { name: "Tommy Hilfiger", logo: ""},
        { name: "Ferragamo", logo: ""},
        { name: "Coach", logo: ""},
        { name: "Hidesign", logo: ""},
        { name: "Wildcraft", logo: ""}
    ],

    Wallet: [
        { name: "Louis Vuitton", logo: ""},
        { name: "Gucci", logo: ""},
        { name: "Prada", logo: ""},
        { name: "Hermès", logo: ""},
        { name: "Ralph Lauren", logo: ""},
        { name: "Montblanc", logo: ""},
        { name: "Tumi", logo: ""},
        { name: "Coach", logo: ""},
        { name: "Hidesign", logo: ""},
        { name: "Baggit", logo: ""}
    ],

    Face_Cream: [
        { name: "Olay", logo: ""},
        { name: "Estée Lauder", logo: ""},
        { name: "Nivea", logo: ""},
        { name: "L'Oréal", logo: ""},
        { name: "Clinique", logo: ""},
        { name: "Lotus Herbals", logo: ""},
        { name: "Neutrogena", logo: ""},
        { name: "La Mer", logo: ""},
        { name: "Biotique", logo: ""},
        { name: "Shiseido", logo: ""}
    ],

    Lipstick: [
        { name: "MAC", logo: ""},
        { name: "Maybelline", logo: ""},
        { name: "Chanel", logo: ""},
        { name: "NARS", logo: ""},
        { name: "Lakmé", logo: ""},
        { name: "Yves Saint Laurent", logo: ""},
        { name: "Dior", logo: ""},
        { name: "Fenty Beauty", logo: ""},
        { name: "Biotique", logo: ""},
        { name: "Charlotte Tilbury", logo: ""}
    ],

    Shampoo: [
        { name: "Head & Shoulders", logo: ""},
        { name: "Pantene", logo: ""},
        { name: "L'Oréal", logo: ""},
        { name: "Dove", logo: ""},
        { name: "Biotique", logo: ""},
        { name: "Aveda", logo: ""},
        { name: "TRESemmé", logo: ""},
        { name: "Herbal Essences", logo: ""},
        { name: "Dabur", logo: ""},
        { name: "Moroccanoil", logo: ""}
    ],

    Perfume: [
        { name: "Chanel", logo: ""},
        { name: "Dior", logo: ""},
        { name: "Gucci", logo: ""},
        { name: "Tom Ford", logo: ""},
        { name: "Yves Saint Laurent", logo: ""},
        { name: "Forest Essentials", logo: ""},
        { name: "Creed", logo: ""},
        { name: "Hermès", logo: ""},
        { name: "Nishane", logo: ""},
        { name: "Jo Malone", logo: ""}
    ],

    Nail_Polish: [
        { name: "OPI", logo: ""},
        { name: "Essie", logo: ""},
        { name: "Sally Hansen", logo: ""},
        { name: "Chanel", logo: ""},
        { name: "Zoya", logo: ""},
        { name: "China Glaze", logo: ""},
        { name: "Lakmé", logo: ""},
        { name: "Dior", logo: ""},
        { name: "Colorbar", logo: ""},
        { name: "Lancome", logo: ""}
    ],

    Moisturizer: [
        { name: "Neutrogena", logo: ""},
        { name: "Cetaphi", logo: ""},
        { name: "Clinique", logo: ""},
        { name: "Eucerin", logo: ""},
        { name: "Himalaya", logo: ""},
        { name: "Olay", logo: ""},
        { name: "La Mer", logo: ""},
        { name: "Nivea", logo: ""},
        { name: "Kiehl's", logo: ""},
        { name: "Vichy", logo: ""}
    ],

    Sofa: [
        { name: "IKEA", logo: ""},
        { name: "Ashley Furniture", logo: ""},
        { name: "La-Z-Boy", logo: ""},
        { name: "Herman Miller", logo: ""},
        { name: "Urban Ladder", logo: ""},
        { name: "Sofology", logo: ""},
        { name: "Natuzzi", logo: ""},
        { name: "Hometown", logo: ""},
        { name: "Roche Bobois", logo: ""},
        { name: "King Living", logo: ""}
    ],

    Coffee_Table: [
        { name: "IKEA", logo: ""},
        { name: "Herman Miller", logo: ""},
        { name: "Natuzzi", logo: ""},
        { name: "Roche Bobois", logo: ""},
        { name: "King Living", logo: ""},
        { name: "Sofology", logo: ""},
        { name: "Urban Ladder", logo: ""},
        { name: "Hometown", logo: ""},
        { name: "Fabindia", logo: ""},
        { name: "Nilkamal", logo: ""}
    ],

    Seating: [
        { name: "IKEA", logo: ""},
        { name: "Herman Miller", logo: ""},
        { name: "La-Z-Boy", logo: ""},
        { name: "Ashley Furniture", logo: ""},
        { name: "Natuzzi", logo: ""},
        { name: "Roche Bobois", logo: ""},
        { name: "King Living", logo: ""},
        { name: "Urban Ladder", logo: ""},
        { name: "Nilkamal", logo: ""},
        { name: "Fabindia", logo: ""}
    ],

    Bookshelf: [
        { name: "IKEA", logo: ""},
        { name: "Wayfair", logo: ""},
        { name: "Ashley Furniture", logo: ""},
        { name: "Pottery Barn", logo: ""},
        { name: "West Elm", logo: ""},
        { name: "Urban Ladder", logo: ""},
        { name: "CB2", logo: ""},
        { name: "Macy’s", logo: ""},
        { name: "Godrej Interio", logo: ""},
        { name: "Habitat", logo: ""}
    ],

    Bed: [
        { name: "IKEA", logo: "" },
        { name: "Tempur-Pedic", logo: "" },
        { name: "Sealy", logo: "" },
        { name: "Serta", logo: "" },
        { name: "Stearns & Foster", logo: "" },
        { name: "Purple", logo: "" },
        { name: "Saatva", logo: "" },
        { name: "Kingsdown", logo: "" },
        { name: "Sleepwell", logo: "" },
        { name: "Wakefit", logo: "" }
    ],

    Desk: [
        { name: "IKEA", logo: ""},
        { name: "Herman Miller", logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Herman_Miller_logo.svg" },
        { name: "Steelcase", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Steelcase_logo.svg" },
        { name: "Humanscale", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Humanscale_logo.svg" },
        { name: "La-Z-Boy", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/La-Z-Boy_logo.svg" },
        { name: "West Elm", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/West_Elm_logo.svg" },
        { name: "CB2", logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/CB2_Logo.svg" },
        { name: "Wayfair", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Wayfair_logo.svg" },
        { name: "Urban Ladder", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Urban_Ladder_logo.svg" },
        { name: "Godrej Interio", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Godrej_Interio_Logo.png" }
    ],

    Yoga_Mat: [
        { name: "Liforme", logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/Liforme_logo.png" },
        { name: "Manduka", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Manduka_logo.svg" },
        { name: "Gaiam", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Gaiam_Logo.svg" },
        { name: "PrAna", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Prana_logo.svg" },
        { name: "YogaAccessories", logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Yoga_Accessories_logo.png" },
        { name: "Jade Yoga", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jade_Yoga_logo.png" },
        { name: "Reebok", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/Reebok_Logo.png" },
        { name: "Lululemon", logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/Lululemon_logo.svg" },
        { name: "Arya Wellness", logo: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Arya_Wellness_Logo.jpg" },
        { name: "Vishwamitra Yoga", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Vishwamitra_Yoga_Logo.png" }
    ],

    Dumbbells_Set: [
        { name: "Bowflex", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Bowflex_logo.svg" },
        { name: "PowerBlock", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/PowerBlock_logo.png" },
        { name: "Titan Fitness", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Titan_Fitness_logo.svg" },
        { name: "ProForm", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/ProForm_Fitness_logo.svg" },
        { name: "XMark", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Xmark_Fitness_logo.png" },
        { name: "Rogue Fitness", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Rogue_Fitness_logo.png" },
        { name: "Yes4All", logo: "https://upload.wikimedia.org/wikipedia/commons/7/71/Yes4All_logo.png" },
        { name: "Olympic", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Olympic_fitness_logo.png" },
        { name: "KheloMore", logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/KheloMore_logo.png" },
        { name: "Boldfit", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Boldfit_Logo.png" }
    ],

    Bicycle: [
        { name: "Trek", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Trek_Bicycle_Company_logo.svg" },
        { name: "Specialized", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Specialized_Logo.svg" },
        { name: "Cannondale", logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/Cannondale_logo.svg" },
        { name: "Giant", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Giant_Bicycles_logo.svg" },
        { name: "Bianchi", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Bianchi_logo_2016.svg" },
        { name: "Schwinn", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Schwinn_logo.svg" },
        { name: "Santa Cruz", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Santa_Cruz_Bicycles_logo.svg" },
        { name: "Merida", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Merida_Bike_logo.svg" },
        { name: "Hercules", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Hercules_logo.png" },
        { name: "Atlas", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Atlas_logo.png" }
    ],

    Home_Gym_Set: [
        { name: "Bowflex", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Bowflex_logo.svg" },
        { name: "Weider", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Weider_logo.svg" },
        { name: "Nautilus", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Nautilus_Inc_logo.svg" },
        { name: "Rogue Fitness", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Rogue_Fitness_logo.png" },
        { name: "PowerBlock", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/PowerBlock_logo.png" },
        { name: "Marcy", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Marcy_logo.png" },
        { name: "Life Fitness", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Life_Fitness_logo.png" },
        { name: "ProForm", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/ProForm_Fitness_logo.svg" },
        { name: "Kobo Fitness", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Kobo_Fitness_logo.png" },
        { name: "Fitkit", logo: "https://upload.wikimedia.org/wikipedia/commons/7/70/Fitkit_logo.png" }
    ],

    Surfboard: [
        { name: "Channel Islands", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Channel_Islands_logo.png" },
        { name: "Lost Surfboards", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Lost_Surfboards_logo.png" },
        { name: "Rip Curl", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Rip_Curl_logo.png" },
        { name: "Billabong", logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/Billabong_logo.png" },
        { name: "JS Industries", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/JS_Industries_logo.png" },
        { name: "Surftech", logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/Surftech_logo.png" },
        { name: "Fletcher Chouinard Designs", logo: "https://upload.wikimedia.org/wikipedia/commons/7/77/Fletcher_Chouinard_Designs_logo.png" },
        { name: "Rusty", logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/Rusty_logo.svg" },
        { name: "Soul Surf India", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Soul_Surf_India_logo.png" },
        { name: "Nasa Surfboards", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Nasa_Surfboards_logo.png" }
    ],

    Kayak: [
        { name: "Old Town", logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/OldTown_Kayaks_logo.png" },
        { name: "Wilderness Systems", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Wilderness_Systems_logo.svg" },
        { name: "Perception", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Perception_Kayaks_logo.png" },
        { name: "Necky Kayaks", logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Necky_Kayaks_logo.png" },
        { name: "Jackson Kayak", logo: "https://upload.wikimedia.org/wikipedia/commons/0/06/Jackson_Kayak_logo.png" },
        { name: "Dagger", logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Dagger_Kayak_logo.png" },
        { name: "Sevylor", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Sevylor_logo.svg" },
        { name: "Vibe Kayaks", logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/Vibe_Kayaks_logo.png" },
        { name: "Dalu Kayaks", logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/Dalu_Kayaks_logo.png" },
        { name: "Milehigh Kayaks", logo: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Milehigh_Kayaks_logo.png" }
    ],
};

function showmore(productName) {
    const detailsDiv = document.getElementById("product-details");
    const companiesList = document.getElementById("companies-list");
    companiesList.innerHTML = ""; 

    if (companyData[productName]) {
        companyData[productName].forEach(company => {
            const companyDiv = document.createElement("div");
            companyDiv.innerHTML = `
                <img src="${company.logo}" alt="${company.name} Logo">
                 <p style="font-size: 18px; font-weight: bold; color: red;">${company.name}</p>
                <button onclick="window.open('${company.link}', '_blank')">Visit</button>
            `;
            companiesList.appendChild(companyDiv);
        });
    }

    detailsDiv.style.display = "block";
}

function closeDetails() {
    document.getElementById("product-details").style.display = "none";
}

const productContainer = document.getElementById("product-container");

for (const product in companyData) {
    const productDiv = document.createElement("div");
    productDiv.className = "product";

    const productName = document.createElement("h3");
    productName.textContent = product;
    productDiv.appendChild(productName);

    const showMoreButton = document.createElement("button");
    showMoreButton.textContent = "Show More";
    showMoreButton.className = "show-more-button";
    showMoreButton.onclick = () => showmore(product);

    productDiv.appendChild(showMoreButton);
    productContainer.appendChild(productDiv);
}