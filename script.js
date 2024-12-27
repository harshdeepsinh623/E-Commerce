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
            total += item.price * item.quantity; 
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
        { name: "Dell", logo: "https://th.bing.com/th/id/OIP.Yvwe0PnQIDLi2eb2owiU6wHaHa?rs=1&pid=ImgDetMain" },
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
        { name: "The North Face", logo: "https://storagemedia.corporategear.com/betastoragemedia/1/brand/logo_43_5.png"},
        { name: "Patagonia", logo: "https://external-preview.redd.it/kdcPkJCYUt-YF1m2LrOgYiphfB6IQE7xfRg410nEqhM.jpg?auto=webp&s=bb7084b589c2bb79fcf105da5405313dc1497500"},
        { name: "Columbia Sportswear", logo: "https://th.bing.com/th/id/OIP.cA7cR9yT44HjqAPQR4Yy2gHaE8?rs=1&pid=ImgDetMain"},
        { name: "Arc'teryx", logo: "https://logowik.com/content/uploads/images/arc-teryx1317.jpg"},
        { name: "Canada Goose", logo: "https://th.bing.com/th/id/OIP.3eEfuzGVUv3euAx58PBhaQAAAA?rs=1&pid=ImgDetMain"},
        { name: "Moncler", logo: "https://logos-world.net/wp-content/uploads/2022/01/Moncler-Logo.png"},
        { name: "Uniqlo", logo: "https://cdn.freebiesupply.com/logos/thumbs/2x/uniqlo-1-logo.png"},
        { name: "Marmot", logo: "https://www.hortonshaberdashery.com/uploads/1/2/4/3/124366927/marmot-logo_orig.png"},
        { name: "Helly Hansen", logo: "https://logos-world.net/wp-content/uploads/2020/12/Helly-Hansen-Symbol.png"},
        { name: "Burberry", logo: "https://th.bing.com/th/id/R.b267221714fa5c2e65e97af4aa9513fc?rik=WPhygKe66AYLvA&riu=http%3a%2f%2ftous-logos.com%2fwp-content%2fuploads%2f2018%2f07%2fBurberry-logo.png&ehk=tITRhWhBK%2f2AtKKE%2b9pk1zQgeLPO%2f%2bHBgeoQKkVZoRc%3d&risl=&pid=ImgRaw&r=0"}
    ],

    Suits: [
        { name: "Brioni", logo: "https://firstoptiker.at/images/Logo_Brioni.PNG"},
        { name: "Savile Row", logo: "https://topexclusiveoffers.com/wp-content/uploads/2019/10/Untitled-design-43-1.png"},
        { name: "Tom Ford", logo: "https://th.bing.com/th/id/OIP.WD7E07yuOnkNC1OuEcT0QgHaHa?rs=1&pid=ImgDetMain"},
        { name: "Armani", logo: "https://tse4.mm.bing.net/th?id=OIP.Uk3Yf7C5gVI0SzeMq234ogHaEK&w=200&h=112&c=7"},
        { name: "Zegna", logo: "https://www.onecentralmall.com.mo/wordpress/wp-content/uploads/2015/10/Zegna-Logotype-CMYK1.jpg"},
        { name: "Canali", logo: "https://logos-download.com/wp-content/uploads/2016/03/Canali_logo_logotype_emblem.png"},
        { name: "Kiton", logo: "https://www.logo9.net/userfiles/images/9KITON.jpg"},
        { name: "Hugo Boss", logo: "https://th.bing.com/th/id/R.5a36648aa816e664e77d2c4dab71f908?rik=JEHYATR45WXKww&riu=http%3a%2f%2f3.bp.blogspot.com%2f-DHlp6IiFmRs%2fVVAuzHLBVGI%2fAAAAAAAACVs%2fc6kLNSxCOiE%2fs1600%2fHugo-boss-logo-vector.png&ehk=ebLE6UDCyslAIu5B4ptiXjkjHOv0xYPOavpl%2bYo3dCU%3d&risl=&pid=ImgRaw&r=0"},
        { name: "Ralph Lauren", logo: "https://tse3.mm.bing.net/th?id=OIP.J6YUexRdCcK-I-cHrX3QzAHaEK&w=200&h=112&c=7"},
        { name: "Corneliani", logo: "https://www.liblogo.com/img-logo/co6081cebe-corneliani-logo-corneliani.png"}
    ],

    Sweater: [
        { name: "Loro Piana", logo: "https://brandpalettes.com/wp-content/uploads/2022/11/Loro-Piana-Logo-JPG.jpg"},
        { name: "The Elder Statesman", logo: "https://cdn.shopify.com/s/files/1/0446/7490/8327/files/TES_LOGO_REGULAR_black.png?height=628&pad_color=fff&v=1598482295&width=1200"},
        { name: "Prada", logo: "https://logosmarcas.net/wp-content/uploads/2020/05/Prada-Logo.png"},
        { name: "Chanel", logo: "https://logos-world.net/wp-content/uploads/2020/04/Chanel-Logo.png"},
        { name: "Burberry", logo: "https://th.bing.com/th/id/R.b267221714fa5c2e65e97af4aa9513fc?rik=WPhygKe66AYLvA&riu=http%3a%2f%2ftous-logos.com%2fwp-content%2fuploads%2f2018%2f07%2fBurberry-logo.png&ehk=tITRhWhBK%2f2AtKKE%2b9pk1zQgeLPO%2f%2bHBgeoQKkVZoRc%3d&risl=&pid=ImgRaw&r=0"},
        { name: "Ralph Lauren", logo: "https://tse3.mm.bing.net/th?id=OIP.J6YUexRdCcK-I-cHrX3QzAHaEK&w=200&h=112&c=7"},
        { name: "John Smedley", logo: "https://parigot.itembox.design/item/images/brand/johnsmedley.jpg"},
        { name: "BOSS (Hugo Boss)", logo: "https://th.bing.com/th/id/R.5a36648aa816e664e77d2c4dab71f908?rik=JEHYATR45WXKww&riu=http%3a%2f%2f3.bp.blogspot.com%2f-DHlp6IiFmRs%2fVVAuzHLBVGI%2fAAAAAAAACVs%2fc6kLNSxCOiE%2fs1600%2fHugo-boss-logo-vector.png&ehk=ebLE6UDCyslAIu5B4ptiXjkjHOv0xYPOavpl%2bYo3dCU%3d&risl=&pid=ImgRaw&r=0"},
        { name: "Armani", logo: "https://tse4.mm.bing.net/th?id=OIP.Uk3Yf7C5gVI0SzeMq234ogHaEK&w=200&h=112&c=7"},
        { name: "Uniqlo", logo: "https://cdn.freebiesupply.com/logos/thumbs/2x/uniqlo-1-logo.png"}
    ],

    Headphone: [
        { name: "Sony", logo: "https://cdn.specpick.com/images/photonics/products/df7ceddb-a-21_209_imx253mzr_myr_big.PNG"},
        { name: "Bose", logo: "https://pluspng.com/img-png/bose-png--522.png"},
        { name: "Sennheiser", logo: "https://logos-world.net/wp-content/uploads/2020/12/Sennheiser-Logo-1982-2017-700x394.png"},
        { name: "Apple", logo: "https://th.bing.com/th/id/OIP._-PHuJMA9l7DqLNvDhH0RwHaHa?w=512&h=512&rs=1&pid=ImgDetMain"},
        { name: "Bang & Olufsen", logo: "https://www.carolinegibson.co.uk/wp-content/uploads/2021/04/bang-olufsen.png"},
        { name: "JBL", logo: "https://logos-world.net/wp-content/uploads/2020/12/JBL-Emblem.png"},
        { name: "Audio-Technica", logo: "https://cdn.dribbble.com/users/173981/screenshots/14161230/stry-21-08-2020_4x.jpg"},
        { name: "Shure", logo: "https://th.bing.com/th/id/R.252df73324303b48ca7635742e1730c3?rik=40SYGfXPyC3y8A&riu=http%3a%2f%2flogotypes101.com%2flogos%2f367%2f7A583F17C4424D50C5A48A81D3DF04CF%2fShure.png&ehk=Smk95uDTa4whDlX5DN144P9IehUqaFualcFTqwUnP0w%3d&risl=&pid=ImgRaw&r=0"},
        { name: "boAt", logo: "https://static.startuptalky.com/2023/01/boAt-logo-startuptalky.jpg"},
        { name: "Zebronics", logo: "https://www.freedomcart.com/image/cache/catalog/data/brands/zebronics-logo-600x315.jpg"}
    ],

    Watch: [
        { name: "Titan", logo: "https://upload.wikimedia.org/wikipedia/commons/8/83/Titan_Company_Logo.png"},
        { name: "Rolex", logo: "https://wallpaperaccess.com/full/881446.jpg"},
        { name: "Fossil", logo: "https://th.bing.com/th/id/OIP.Xm3N2bsGpfsueKEl_YXKKQHaEd?rs=1&pid=ImgDetMain"},
        { name: "Helios", logo: "https://th.bing.com/th/id/OIP.ZjYeDb0KygImrC9BteaaaAHaHa?rs=1&pid=ImgDetMain"},
        { name: "Omega", logo: "https://th.bing.com/th/id/OIP.BkWgUR7bQvWhsoGbwcqEEAHaFj?rs=1&pid=ImgDetMain"},
        { name: "Panerai", logo: "https://th.bing.com/th/id/OIP.mR--kFmVpCanxdkWOu3IIwHaHa?rs=1&pid=ImgDetMain"},
        { name: "Hublot", logo: "https://logo-all.ru/uploads/posts/2018-07/0_hublot_logo.jpg"},
        { name: "Breitling", logo: "https://freepngdesign.com/content/uploads/images/p-2835-4-breitling-watches-logo-png-transparent-logo-290761404489.png"},
        { name: "Patek Philippe", logo: "https://logos-download.com/wp-content/uploads/2016/06/Patek_Philippe_Geneve_logo.png"},
        { name: "Casio", logo: "https://th.bing.com/th/id/R.f761cea9231eb933f392ae8d6eee693f?rik=4AAvmFfSFaKanQ&riu=http%3a%2f%2fvignette2.wikia.nocookie.net%2flogopedia%2fimages%2fd%2fdb%2fCasio.png%2frevision%2flatest%3fcb%3d20120828100224&ehk=R5e%2bHhSLn2rsfEeljGXBoMeY9S%2bEjoU8QOsOrWL%2bZRY%3d&risl=&pid=ImgRaw&r=0"}
    ],

    Glasses: [
        { name: "Luxottica", logo: "https://logodix.com/logo/2039606.png"},
        { name: "Ray-Ban", logo: "https://www.kindpng.com/picc/m/38-382738_ray-ban-logo-png-transparent-png.png"},
        { name: "Oakley", logo: "https://th.bing.com/th/id/R.999b7a207f9a7c5ecada63dcbd7f7c1e?rik=7sRLLDo0gKxirg&riu=http%3a%2f%2fcdn.cybergolf.com%2fimages%2f240%2foakley-logo.png&ehk=dHBat90w1VpaXrSBFvVZgRwkgnPiXfagpfI6RIf%2b%2bOQ%3d&risl=&pid=ImgRaw&r=0"},
        { name: "Essilor", logo: "https://www.optiknow.ca/wp-content/uploads/2023/07/Essilor-logo-2023-810-x-338-768x320.jpg"},
        { name: "Vincent Chase", logo: "https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/app-One_19.jpg"},
        { name: "Prada", logo: "https://logosmarcas.net/wp-content/uploads/2020/05/Prada-Logo.png"},
        { name: "Warby Parker", logo: "https://logodix.com/logo/876434.png"},
        { name: "Maui Jim", logo: "https://clipground.com/images/maui-jim-logo-2.jpg"},
        { name: "Silhouette", logo: "https://logodownload.org/wp-content/uploads/2021/10/silhouette-logo-0.png"},
        { name: "Gucci", logo: "https://tse1.mm.bing.net/th?id=OIP.RH0M45IErwpiptUWO9e-cgHaHa&w=200&h=200&c=7"}
    ],

    Shoes: [
        { name: "Nike", logo: "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo-1978-present.jpg"},
        { name: "Adidas", logo: "https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo.png"},
        { name: "Puma", logo: "https://th.bing.com/th/id/OIP.TeMTJguw9UaLtLw991JbAwAAAA?w=400&h=400&rs=1&pid=ImgDetMain"},
        { name: "New Balance", logo: "https://logos-world.net/wp-content/uploads/2020/09/New-Balance-Logo-2006-2008.png"},
        { name: "Reebok", logo: "https://logodownload.org/wp-content/uploads/2017/06/reebok-logo-0-2048x2048.png"},
        { name: "Vans", logo: "https://th.bing.com/th/id/OIP.eUV0w-TxPQPUxi1-jtdOqwAAAA?rs=1&pid=ImgDetMain"},
        { name: "Under Armour", logo: "https://th.bing.com/th/id/OIP.oH49PU_LU4j-ZLXtM2FF7AHaE8?rs=1&pid=ImgDetMain"},
        { name: "Skechers", logo: "https://www.dealerservicecenter.in/assets/company_logo/skechers.jpeg"},
        { name: "Bata", logo: "https://th.bing.com/th/id/R.99de02c079c0fea4a90f6049e464f70d?rik=L7PZ6LasSBqsxQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fthumb%2f3%2f3e%2fBata.svg%2f220px-Bata.svg.png&ehk=DCsow37GwF72Gj4LJse7hcQipp1dKsgOKPOWMfaMLLg%3d&risl=&pid=ImgRaw&r=0"},
        { name: "Liberty Shoes", logo: "https://image3.mouthshut.com/images/imagesp/925793843s.jpg"}
    ],

    Belts: [
        { name: "Gucci", logo: "https://tse1.mm.bing.net/th?id=OIP.RH0M45IErwpiptUWO9e-cgHaHa&w=200&h=200&c=7"},
        { name: "Louis Vuitton", logo: "https://logo-marque.com/wp-content/uploads/2020/04/Louis-Vuitton-Embl%C3%A8me.jpg"},
        { name: "Hermes", logo: "https://logos-world.net/wp-content/uploads/2020/12/Hermes-Logo.png"},
        { name: "Prada", logo: "https://logosmarcas.net/wp-content/uploads/2020/05/Prada-Logo.png"},
        { name: "Dunhill", logo: "https://th.bing.com/th/id/OIP.mcHmzbfJXxfeOzA8O5nCWQAAAA?rs=1&pid=ImgDetMain"},
        { name: "Tommy Hilfiger", logo: "https://tse1.mm.bing.net/th?id=OIP.ZI8OKCbsmuCR-FtlNy8wuQHaEK&w=200&h=112&c=7"},
        { name: "Ferragamo", logo: "https://www.liblogo.com/img-logo/sa3605feb3-salvatore-ferragamo-logo-ferragamo-symbol-svg-download-ferragamo-symbol-vector-file.png"},
        { name: "Coach", logo: "https://logowik.com/content/uploads/images/coach2854.jpg"},
        { name: "Hidesign", logo: "https://cdn.shopify.com/s/files/1/0416/3049/8971/files/Hidesign_logo-svg_0ca39a53-a205-493a-979f-3aa899307479.png?v=1625045539"},
        { name: "Wildcraft", logo: "https://www.logolynx.com/images/logolynx/8f/8f738436eaa9f43b5e7bc75a782d743a.jpeg"}
    ],

    Wallet: [
        { name: "Louis Vuitton", logo: "https://logo-marque.com/wp-content/uploads/2020/04/Louis-Vuitton-Embl%C3%A8me.jpg"},
        { name: "Gucci", logo: "https://tse1.mm.bing.net/th?id=OIP.RH0M45IErwpiptUWO9e-cgHaHa&w=200&h=200&c=7"},
        { name: "Prada", logo: "https://logosmarcas.net/wp-content/uploads/2020/05/Prada-Logo.png"},
        { name: "Hermès", logo: "https://logos-world.net/wp-content/uploads/2020/12/Hermes-Logo.png"},
        { name: "Ralph Lauren", logo: "https://tse3.mm.bing.net/th?id=OIP.J6YUexRdCcK-I-cHrX3QzAHaEK&w=200&h=112&c=7"},
        { name: "Montblanc", logo: "https://logos-world.net/wp-content/uploads/2022/09/Montblanc-Emblem.png"},
        { name: "Tumi", logo: "https://logo-all.ru/uploads/posts/2018-11/0_tumi_logo.jpg"},
        { name: "Coach", logo: "https://logowik.com/content/uploads/images/coach2854.jpg"},
        { name: "Hidesign", logo: "https://cdn.shopify.com/s/files/1/0416/3049/8971/files/Hidesign_logo-svg_0ca39a53-a205-493a-979f-3aa899307479.png?v=1625045539"},
        { name: "Baggit", logo: "https://th.bing.com/th/id/R.bae805aebeef8a3dd223dab75d1e07a9?rik=u8R8MkiHPsUT3A&riu=http%3a%2f%2fbusiness.mapsofindia.com%2ftop-brands-india%2fimages%2fBAGGIT.jpg&ehk=6h7KPlBmlDxODeAYN61FXl%2fxTaTYFTSjrmcOBQZY%2bs8%3d&risl=&pid=ImgRaw&r=0"}
    ],

    Face_Cream: [
        { name: "Olay", logo: "https://logos-world.net/wp-content/uploads/2020/11/Olay-Logo-2000-2006-700x394.png"},
        { name: "Estée Lauder", logo: "https://logos-world.net/wp-content/uploads/2020/12/Estee-Lauder-Logo.png"},
        { name: "Nivea", logo: "https://logodownload.org/wp-content/uploads/2017/03/nivea-logo-1-1.png"},
        { name: "L'Oréal", logo: "https://loghi-famosi.com/wp-content/uploads/2020/04/Loreal-Emblema.png"},
        { name: "Clinique", logo: "https://logos-world.net/wp-content/uploads/2020/12/Clinique-Emblem-700x394.png"},
        { name: "Lotus Herbals", logo: "https://images.yourstory.com/cs/images/companies/aZ0dt34L400x400-1635747084195.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff"},
        { name: "Neutrogena", logo: "https://download.logo.wine/logo/Neutrogena/Neutrogena-Logo.wine.png"},
        { name: "La Mer", logo: "https://pic.nximg.cn/file/20201116/29810696_183653676189_2.jpg"},
        { name: "Biotique", logo: "https://m.media-amazon.com/images/S/aplus-media/sota/7a5e354e-c525-47dc-bf05-8f6b8b10c204.__CR0,0,300,300_PT0_SX300_V1___.jpeg"},
        { name: "Shiseido", logo: "https://www.logolynx.com/images/logolynx/f4/f478fb9aa74ad2166555e96f24cb78d5.png"}
    ],

    Lipstick: [
        { name: "MAC", logo: "https://th.bing.com/th/id/OIP.bXwj0c-4hLuUQxbtyDXUeQHaHa?w=820&h=820&rs=1&pid=ImgDetMain"},
        { name: "Maybelline", logo: "https://th.bing.com/th/id/OIP.9H_G4REaJe2nj7Jv4HIHjAHaEo?rs=1&pid=ImgDetMain"},
        { name: "Chanel", logo: "https://logos-world.net/wp-content/uploads/2020/04/Chanel-Logo.png"},
        { name: "NARS", logo: "https://logodix.com/logo/917766.jpg"},
        { name: "Lakmé", logo: "https://logos-world.net/wp-content/uploads/2020/09/Lakme-Logo-1996-2011-700x394.png"},
        { name: "Yves Saint Laurent", logo: "https://th.bing.com/th/id/OIP.CHc5nVZGT9bBopA3xh4thQHaEK?rs=1&pid=ImgDetMain"},
        { name: "Dior", logo: "https://paidpost-assets.nyt.com/paidpost/100000006251890/images/dior-logo.png"},
        { name: "Fenty Beauty", logo: "https://seeklogo.com/images/F/fenty-beauty-logo-DCB5523E0D-seeklogo.com.png"},
        { name: "Biotique", logo: "https://m.media-amazon.com/images/S/aplus-media/sota/7a5e354e-c525-47dc-bf05-8f6b8b10c204.__CR0,0,300,300_PT0_SX300_V1___.jpeg"},
        { name: "Charlotte Tilbury", logo: "https://cdn.lovesavingsgroup.com/logos/charlotte-tilbury.jpg"}
    ],

    Shampoo: [
        { name: "Head & Shoulders", logo: "https://logos-download.com/wp-content/uploads/2019/01/Head__Shoulders_Logo.png"},
        { name: "Pantene", logo: "https://panteneforyou.yolasite.com/resources/Pantene_Logo.jpg?timestamp=1525029403010"},
        { name: "L'Oréal", logo: "https://loghi-famosi.com/wp-content/uploads/2020/04/Loreal-Emblema.png"},
        { name: "Dove", logo: "https://logos-world.net/wp-content/uploads/2020/09/Dove-Symbol-700x394.png"},
        { name: "Biotique", logo: "https://m.media-amazon.com/images/S/aplus-media/sota/7a5e354e-c525-47dc-bf05-8f6b8b10c204.__CR0,0,300,300_PT0_SX300_V1___.jpeg"},
        { name: "Aveda", logo: "https://logos-world.net/wp-content/uploads/2020/11/Aveda-Logo.png"},
        { name: "TRESemmé", logo: "https://logospng.org/download/tresemme/tresemme-4096.png"},
        { name: "Herbal Essences", logo: "https://logos-world.net/wp-content/uploads/2020/09/Herbal-Essences-Logo.png"},
        { name: "Dabur", logo: "https://logonoid.com/images/dabur-logo.png"},
        { name: "Moroccanoil", logo: "https://logos-world.net/wp-content/uploads/2020/11/Moroccanoil-Logo.png"}
    ],

    Perfume: [
        { name: "Chanel", logo: "https://logos-world.net/wp-content/uploads/2020/04/Chanel-Logo.png"},
        { name: "Dior", logo: "https://paidpost-assets.nyt.com/paidpost/100000006251890/images/dior-logo.png"},
        { name: "Gucci", logo: "https://tse1.mm.bing.net/th?id=OIP.RH0M45IErwpiptUWO9e-cgHaHa&w=200&h=200&c=7"},
        { name: "Tom Ford", logo: "https://th.bing.com/th/id/OIP.WD7E07yuOnkNC1OuEcT0QgHaHa?rs=1&pid=ImgDetMain"},
        { name: "Yves Saint Laurent", logo: "https://th.bing.com/th/id/OIP.CHc5nVZGT9bBopA3xh4thQHaEK?rs=1&pid=ImgDetMain"},
        { name: "Forest Essentials", logo: "https://logos-world.net/wp-content/uploads/2022/11/Forest-Essentials-Logo.png"},
        { name: "Creed", logo: "https://i.pinimg.com/originals/2d/e4/d9/2de4d9d0bbd2fee0c85b2955dd04aa5d.jpg"},
        { name: "Hermès", logo: "https://logos-world.net/wp-content/uploads/2020/12/Hermes-Logo.png"},
        { name: "Nishane", logo: "https://th.bing.com/th/id/OIP.zlHkkTAuIOiGvXImWJBhGAHaHa?rs=1&pid=ImgDetMain"},
        { name: "Jo Malone", logo: "https://www.panorama.lt/assets/Uploads/Shops/JO_MALONE_logo__CompressedW10.jpg"}
    ],

    Nail_Polish: [
        { name: "OPI", logo: "https://static.vecteezy.com/system/resources/previews/010/116/272/original/opi-letter-technology-logo-design-on-white-background-opi-creative-initials-letter-it-logo-concept-opi-letter-design-vector.jpg"},
        { name: "Essie", logo: "https://logo-marque.com/wp-content/uploads/2020/09/Essie-Logo.png"},
        { name: "Sally Hansen", logo: "https://logodix.com/logo/533466.png"},
        { name: "Chanel", logo: "https://logos-world.net/wp-content/uploads/2020/04/Chanel-Logo.png"},
        { name: "Zoya", logo: "https://3.bp.blogspot.com/-ElvP6pC092I/XEGMZN0qZjI/AAAAAAAARos/sCsqlGEKjbk0400d1QWn1yMCzIo69sOBwCLcBGAs/s1600/Zoya.png"},
        { name: "China Glaze", logo: "https://i.pinimg.com/originals/c4/e6/f9/c4e6f9e9098108edde195fa40e341f60.png"},
        { name: "Lakmé", logo: "https://logos-world.net/wp-content/uploads/2020/09/Lakme-Logo-1996-2011-700x394.png"},
        { name: "Dior", logo: "https://paidpost-assets.nyt.com/paidpost/100000006251890/images/dior-logo.png"},
        { name: "Colorbar", logo: "https://thecolorbar217.com/wp-content/uploads/2022/12/ColorBar-Logo-Black.png"},
        { name: "Lancome", logo: "https://th.bing.com/th/id/R.63496dd09b4893108a5a3b9d10519c85?rik=%2bW4eVIJ22a%2btfw&riu=http%3a%2f%2fwww.logotypes101.com%2flogos%2f367%2f3AF8CFCE2FC9F24AC038687EE0C1E2FC%2fLancome.png&ehk=dJz0g0WgxqxjiNMgxokuyQYYdm4iyz9n22Bi6OfaoLI%3d&risl=&pid=ImgRaw&r=0"}
    ],

    Moisturizer: [
        { name: "Neutrogena", logo: "https://download.logo.wine/logo/Neutrogena/Neutrogena-Logo.wine.png"},
        { name: "Cetaphi", logo: "https://www.cetaphil.ca/on/demandware.static/Sites-Galderma-CA-Site/-/default/dw00cae7f5/images/logo.png"},
        { name: "Clinique", logo: "https://logos-world.net/wp-content/uploads/2020/12/Clinique-Emblem-700x394.png"},
        { name: "Eucerin", logo: "https://th.bing.com/th/id/OIP.bf2r0vAGuAXbXGxBxsF9FwAAAA?rs=1&pid=ImgDetMain"},
        { name: "Himalaya", logo: "https://www.liblogo.com/img-logo/hi8329h185-himalaya-logo-himalaya-herbals-logos-gifs-find-amp-share-on-.png"},
        { name: "Olay", logo: "https://logos-world.net/wp-content/uploads/2020/11/Olay-Logo-2000-2006-700x394.png"},
        { name: "La Mer", logo: "https://pic.nximg.cn/file/20201116/29810696_183653676189_2.jpg"},
        { name: "Nivea", logo: "https://logodownload.org/wp-content/uploads/2017/03/nivea-logo-1-1.png"},
        { name: "Kiehl's", logo: "https://cdn.freebiesupply.com/logos/large/2x/kiehls-logo-png-transparent.png"},
        { name: "Vichy", logo: "https://seeklogo.com/images/P/Pastilles_Vichy_source-logo-B97CDC7E63-seeklogo.com.gif"}
    ],

    Sofa: [
        { name: "IKEA", logo: "https://imageio.forbes.com/specials-images/imageserve/5ce31537169cc600076c5d61/0x0.jpg?format=jpg&crop=416,416,x0,y0,safe&height=416&width=416&fit=bounds"},
        { name: "Ashley Furniture", logo: "https://th.bing.com/th/id/OIP.mFW6lv8PXBbkh8KX3-zkCwHaHa?rs=1&pid=ImgDetMain"},
        { name: "La-Z-Boy", logo: "https://th.bing.com/th/id/R.bde73f4ff217e1200a1ce0f205dfa094?rik=fSsyJGOhwaDf0g&riu=http%3a%2f%2flogonoid.com%2fimages%2fla-z-boy-logo.png&ehk=OKnZ1laCiTzWL2wqu0vUbxJjXPsG5vHukcql6i94Dwo%3d&risl=&pid=ImgRaw&r=0"},
        { name: "Herman Miller", logo: "https://th.bing.com/th/id/OIP.c7pD1oQ6u0N9QCLxrHl4HgAAAA?rs=1&pid=ImgDetMain"},
        { name: "Urban Ladder", logo: "https://www.marketingmind.in/wp-content/uploads/2019/06/urban_ladder.jpg"},
        { name: "Sofology", logo: "https://th.bing.com/th/id/R.41c60eadb8a56c3a5dadfde65e7da291?rik=yv2ErS49AKJpNA&riu=http%3a%2f%2fwww.kaleida.co.uk%2fapp%2fuploads%2f2016%2f07%2fsofology_logo.png&ehk=w1DJaj5FvOYqea9fBmEU%2bbTduU%2biCsUjsL94zTiNnN0%3d&risl=&pid=ImgRaw&r=0"},
        { name: "Natuzzi", logo: "https://cdn.freebiesupply.com/logos/large/2x/natuzzi-1-logo-png-transparent.png"},
        { name: "Hometown", logo: "https://img.freepik.com/premium-vector/hometown-logo_529259-68.jpg?w=2000"},
        { name: "Roche Bobois", logo: "https://cdn.freebiesupply.com/logos/large/2x/roche-bobois-logo-png-transparent.png"},
        { name: "King Living", logo: "https://www.hsbc.com.au/content/dam/hsbc/au/images/credit-cards/king-living-dcm-18429.jpg"}
    ],

    Coffee_Table: [
        { name: "IKEA", logo: "https://imageio.forbes.com/specials-images/imageserve/5ce31537169cc600076c5d61/0x0.jpg?format=jpg&crop=416,416,x0,y0,safe&height=416&width=416&fit=bounds"},
        { name: "Herman Miller", logo: "https://th.bing.com/th/id/OIP.c7pD1oQ6u0N9QCLxrHl4HgAAAA?rs=1&pid=ImgDetMain"},
        { name: "Natuzzi", logo: "https://cdn.freebiesupply.com/logos/large/2x/natuzzi-1-logo-png-transparent.png"},
        { name: "Roche Bobois", logo: "https://cdn.freebiesupply.com/logos/large/2x/roche-bobois-logo-png-transparent.png"},
        { name: "King Living", logo: "https://www.hsbc.com.au/content/dam/hsbc/au/images/credit-cards/king-living-dcm-18429.jpg"},
        { name: "Sofology", logo: "https://th.bing.com/th/id/R.41c60eadb8a56c3a5dadfde65e7da291?rik=yv2ErS49AKJpNA&riu=http%3a%2f%2fwww.kaleida.co.uk%2fapp%2fuploads%2f2016%2f07%2fsofology_logo.png&ehk=w1DJaj5FvOYqea9fBmEU%2bbTduU%2biCsUjsL94zTiNnN0%3d&risl=&pid=ImgRaw&r=0"},
        { name: "Urban Ladder", logo: "https://www.marketingmind.in/wp-content/uploads/2019/06/urban_ladder.jpg"},
        { name: "Hometown", logo: "https://img.freepik.com/premium-vector/hometown-logo_529259-68.jpg?w=2000"},
        { name: "Fabindia", logo: "https://th.bing.com/th/id/OIP.uJNZdykNbqgmw_XN8EXUigHaHa?rs=1&pid=ImgDetMain"},
        { name: "Nilkamal", logo: "https://i0.wp.com/capage.in/wp-content/uploads/2022/11/Nilkamal.png"}
    ],

    Chair: [
        { name: "IKEA", logo: "https://imageio.forbes.com/specials-images/imageserve/5ce31537169cc600076c5d61/0x0.jpg?format=jpg&crop=416,416,x0,y0,safe&height=416&width=416&fit=bounds"},
        { name: "Herman Miller", logo: "https://th.bing.com/th/id/OIP.c7pD1oQ6u0N9QCLxrHl4HgAAAA?rs=1&pid=ImgDetMain"},
        { name: "La-Z-Boy", logo: "https://th.bing.com/th/id/R.bde73f4ff217e1200a1ce0f205dfa094?rik=fSsyJGOhwaDf0g&riu=http%3a%2f%2flogonoid.com%2fimages%2fla-z-boy-logo.png&ehk=OKnZ1laCiTzWL2wqu0vUbxJjXPsG5vHukcql6i94Dwo%3d&risl=&pid=ImgRaw&r=0"},
        { name: "Ashley Furniture", logo: "https://th.bing.com/th/id/OIP.mFW6lv8PXBbkh8KX3-zkCwHaHa?rs=1&pid=ImgDetMain"},
        { name: "Natuzzi", logo: "https://cdn.freebiesupply.com/logos/large/2x/natuzzi-1-logo-png-transparent.png"},
        { name: "Roche Bobois", logo: "https://cdn.freebiesupply.com/logos/large/2x/roche-bobois-logo-png-transparent.png"},
        { name: "King Living", logo: "https://www.hsbc.com.au/content/dam/hsbc/au/images/credit-cards/king-living-dcm-18429.jpg"},
        { name: "Urban Ladder", logo: "https://www.marketingmind.in/wp-content/uploads/2019/06/urban_ladder.jpg"},
        { name: "Nilkamal", logo: "https://i0.wp.com/capage.in/wp-content/uploads/2022/11/Nilkamal.png"},
        { name: "Fabindia", logo: "https://th.bing.com/th/id/OIP.uJNZdykNbqgmw_XN8EXUigHaHa?rs=1&pid=ImgDetMain"}
    ],

    Bookshelf: [
        { name: "IKEA", logo: "https://imageio.forbes.com/specials-images/imageserve/5ce31537169cc600076c5d61/0x0.jpg?format=jpg&crop=416,416,x0,y0,safe&height=416&width=416&fit=bounds"},
        { name: "Wayfair", logo: "https://th.bing.com/th/id/OIP.vNf8iJCcOkPxTDHJJzipPAAAAA?rs=1&pid=ImgDetMain"},
        { name: "Ashley Furniture", logo: "https://th.bing.com/th/id/OIP.mFW6lv8PXBbkh8KX3-zkCwHaHa?rs=1&pid=ImgDetMain"},
        { name: "Pottery Barn", logo: "https://i.pinimg.com/originals/0e/22/01/0e2201ff4b1ab7d8fdca30a38bbea2a4.png"},
        { name: "West Elm", logo: "https://hydeparkvillage.com/wp-content/uploads/sites/8/2019/12/West-Elm_LOGO-1024x202.png"},
        { name: "Urban Ladder", logo: "https://www.marketingmind.in/wp-content/uploads/2019/06/urban_ladder.jpg"},
        { name: "CB2", logo: "https://logowik.com/content/uploads/images/cb21223.jpg"},
        { name: "Macy’s", logo: "https://i.pinimg.com/originals/94/5b/f1/945bf18fef4fbb034acc8799ba0b3882.jpg"},
        { name: "Godrej Interio", logo: "https://mma.prnewswire.com/media/772546/Godrej_Interio_Logo.jpg?p=facebook"},
        { name: "Habitat", logo: "https://www.pwc.com.sa/wp-content/uploads/2018/12/abu-dawood-logo3.png"}
    ],

    Bed: [
        { name: "IKEA", logo: "https://imageio.forbes.com/specials-images/imageserve/5ce31537169cc600076c5d61/0x0.jpg?format=jpg&crop=416,416,x0,y0,safe&height=416&width=416&fit=bounds" },
        { name: "Tempur-Pedic", logo: "https://photos.prnewswire.com/prnfull/20160121/324806LOGO?max=800" },
        { name: "Sealy", logo: "https://www.gilesagency.com/wp-content/uploads/2020/05/Sealy_logo_872x706.jpg" },
        { name: "Serta", logo: "https://www.kindpng.com/picc/m/332-3324686_serta-mattress-logo-hd-png-download.png" },
        { name: "Stearns & Foster", logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/102014/stearnsfoster.png?itok=p3Xv2IcT" },
        { name: "Purple", logo: "https://www.logolynx.com/images/logolynx/7b/7b140a659b281df8c7890076c7f4c962.jpeg" },
        { name: "Saatva", logo: "https://logowik.com/content/uploads/images/saatva3594.jpg" },
        { name: "Kingsdown", logo: "https://seeklogo.com/images/K/kingsdown-logo-DC00202B4C-seeklogo.com.png" },
        { name: "Sleepwell", logo: "https://alrasub.com/wp-content/uploads/2022/12/Sleepwell-logo_1670847568.jpg" },
        { name: "Wakefit", logo: "https://techstory.in/wp-content/uploads/2021/11/Wakefit.jpg" }
    ],

    Desk: [
        { name: "IKEA", logo: "https://imageio.forbes.com/specials-images/imageserve/5ce31537169cc600076c5d61/0x0.jpg?format=jpg&crop=416,416,x0,y0,safe&height=416&width=416&fit=bounds"},
        { name: "Herman Miller", logo: "https://th.bing.com/th/id/OIP.c7pD1oQ6u0N9QCLxrHl4HgAAAA?rs=1&pid=ImgDetMain" },
        { name: "Steelcase", logo: "https://www.logolynx.com/images/logolynx/02/0268caa4fcfaace1888abe41733b7941.png" },
        { name: "Humanscale", logo: "https://meinema.nl/assets/Logos/humanscale-logo.jpg" },
        { name: "La-Z-Boy", logo: "https://th.bing.com/th/id/R.bde73f4ff217e1200a1ce0f205dfa094?rik=fSsyJGOhwaDf0g&riu=http%3a%2f%2flogonoid.com%2fimages%2fla-z-boy-logo.png&ehk=OKnZ1laCiTzWL2wqu0vUbxJjXPsG5vHukcql6i94Dwo%3d&risl=&pid=ImgRaw&r=0" },
        { name: "West Elm", logo: "https://hydeparkvillage.com/wp-content/uploads/sites/8/2019/12/West-Elm_LOGO-1024x202.png" },
        { name: "CB2", logo: "https://logowik.com/content/uploads/images/cb21223.jpg" },
        { name: "Wayfair", logo: "https://th.bing.com/th/id/OIP.vNf8iJCcOkPxTDHJJzipPAAAAA?rs=1&pid=ImgDetMain" },
        { name: "Urban Ladder", logo: "https://www.marketingmind.in/wp-content/uploads/2019/06/urban_ladder.jpg" },
        { name: "Godrej Interio", logo: "https://mma.prnewswire.com/media/772546/Godrej_Interio_Logo.jpg?p=facebook" }
    ],

    Yoga_Mat: [
        { name: "Liforme", logo: "https://th.bing.com/th/id/OIP.BY8rEz0FtT6v7inuri_mgwAAAA?rs=1&pid=ImgDetMain" },
        { name: "Manduka", logo: "https://th.bing.com/th/id/OIP.zxSAI7ycYJeZqL3LW4BglgHaHa?rs=1&pid=ImgDetMain" },
        { name: "Gaiam", logo: "https://cdn.shopify.com/s/files/1/1728/2157/products/Gaiam_Logo_V_PMS361_2015_4_10d92337-6704-4487-8dcf-ddd2a578d11f.jpg?v=1552689954" },
        { name: "PrAna", logo: "https://dcassetcdn.com/design_img/3866991/563014/24758068/dj39n0c4pdckyq7qnspmyrp9b0_image.jpg" },
        { name: "YogaAccessories", logo: "https://img.freepik.com/free-vector/yoga-template-logo-design-minimalist-zen-logo-style_7518-305.jpg?w=2000" },
        { name: "Jade Yoga", logo: "https://www.logoai.com/uploads/output/2022/05/24/48099d2a188c62e8833641e880f5eb2f.jpg?t=1653376400" },
        { name: "Reebok", logo: "https://logodownload.org/wp-content/uploads/2017/06/reebok-logo-0-2048x2048.png" },
        { name: "Lululemon", logo: "https://logos-world.net/wp-content/uploads/2020/09/Lululemon-Symbol.png" },
        { name: "Arya Wellness", logo: "https://img1.wsimg.com/isteam/ip/59d3a91a-7f9e-4f1f-b461-e584011ec4e4/blob-0008.png/:/" },
        { name: "Vishwamitra Yoga", logo: "https://s.tmimgcdn.com/scr/800x500/304100/yoga-logo-and-lotus-flower-logo-template_304164-original.jpg" }
    ],

    Dumbbells_Set: [
        { name: "Bowflex", logo: "https://iconape.com/wp-content/png_logo_vector/bowflex-logo.png" },
        { name: "PowerBlock", logo: "https://www.fitnessgallery.com/wp-content/uploads/2017/03/Powerblock-fitness-logo-350px.png" },
        { name: "Titan Fitness", logo: "https://mma.prnewswire.com/media/1393591/Titan_Fitness_Logo.jpg?p=facebook" },
        { name: "ProForm", logo: "https://www.defitnessshop.nl/images/brands/proform-logo.png" },
        { name: "XMark", logo: "https://th.bing.com/th/id/R.5a7507d53f6246c14096a4626704c286?rik=SE1xG88E0a5kRg&riu=http%3a%2f%2fxmarkfitness.com%2fcdn%2fshop%2ffiles%2fNew_-Logo-NO_BG-01.png%3fheight%3d628%26pad_color%3dfff%26v%3d1674222127%26width%3d1200&ehk=Iyfq8Nk1XqZDpC1ACoFXc02FurVNGr5uOYZN%2b48ENUI%3d&risl=&pid=ImgRaw&r=0" },
        { name: "Rogue Fitness", logo: "https://tukuz.com/wp-content/uploads/2020/10/rogue-fitness-logo-vector.png" },
        { name: "Yes4All", logo: "https://th.bing.com/th/id/OIP.GziWfB5--Jm6rQIG5L8zagHaHa?rs=1&pid=ImgDetMain" },
        { name: "Bells of Steel", logo: "https://b-solutions.io/wp-content/uploads/2022/05/bos-1.png" },
        { name: "KheloMore", logo: "https://mssa.khelomore.com/assets/img/khelomore.png" },
        { name: "Boldfit", logo: "https://cdn.shopify.com/s/files/1/0096/4621/1123/files/boldfit-logo.png?v=1607770441" }
    ],

    Bicycle: [
        { name: "Trek", logo: "https://vignette.wikia.nocookie.net/logopedia/images/3/3c/Trek_logo.jpg/revision/latest?cb=20151024131115" },
        { name: "Specialized", logo: "https://th.bing.com/th/id/R.c536d5eb889e28e9181691c38504914b?rik=Q%2fYPUzE31h2qyg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-Z3B_2ZLc7P8%2fVVimwCOzXOI%2fAAAAAAAACbA%2fyb9ceVO3Em8%2fs1600%2fSpecialized-logo-vector.png&ehk=TCpncBwVxBLf78%2bAGBm2qQF2oonuCrWdJFko5SyDWdo%3d&risl=&pid=ImgRaw&r=0" },
        { name: "Cannondale", logo: "https://logos-world.net/wp-content/uploads/2022/06/Cannondale-Symbol.png" },
        { name: "Giant", logo: "https://logodix.com/logo/2094071.jpg" },
        { name: "Bianchi", logo: "https://listcarbrands.com/wp-content/uploads/2022/12/Bianchi-Logo-1940.png" },
        { name: "Schwinn", logo: "https://logos-world.net/wp-content/uploads/2022/02/Schwinn-New-Logo.png" },
        { name: "Santa Cruz", logo: "https://logos-world.net/wp-content/uploads/2021/10/Santa-Cruz-Skateboards-Logo.png" },
        { name: "Merida", logo: "https://th.bing.com/th/id/R.848985fe458f4f15d01e18c0058b2896?rik=0o51sMMZ5nDyMg&riu=http%3a%2f%2flogotypes101.com%2flogos%2f36%2f902E82FAF37E60FE403F91205CF03D50%2fmerida_bike.png&ehk=HNujgnaIgiijHz8HN8JamdrfHU8Kjadt9rBHJqiCFW0%3d&risl=&pid=ImgRaw&r=0" },
        { name: "Hercules", logo: "https://cdn.dribbble.com/users/1078431/screenshots/11002964/media/e1f51168c998157c77ced4b6e24e54d5.jpg" },
        { name: "Atlas", logo: "https://static.vecteezy.com/system/resources/previews/009/107/934/original/atlas-logo-free-vector.jpg" }
    ],

    Home_Gym_Set: [
        { name: "Bowflex", logo: "https://iconape.com/wp-content/png_logo_vector/bowflex-logo.png" },
        { name: "Weider", logo: "https://cdn.freebiesupply.com/logos/thumbs/2x/weider-2-logo.png" },
        { name: "Nautilus", logo: "https://iconape.com/wp-content/png_logo_vector/nautilus-logo.png" },
        { name: "Rogue Fitness", logo: "https://tukuz.com/wp-content/uploads/2020/10/rogue-fitness-logo-vector.png" },
        { name: "PowerBlock", logo: "https://www.fitnessgallery.com/wp-content/uploads/2017/03/Powerblock-fitness-logo-350px.png" },
        { name: "Marcy", logo: "https://www.jayshomegym.com/wp-content/uploads/2018/03/marcy-logo.png" },
        { name: "Life Fitness", logo: "https://th.bing.com/th/id/R.11c20e24042d0a2f83533f8527082731?rik=VBe9e5E5vWhnyQ&riu=http%3a%2f%2fwww.gepacv.org%2fwp-content%2fuploads%2f2017%2f04%2flife-fitness-logo.jpg&ehk=pM%2b%2fLXhmVr%2fWLYLrFrp04nfwQLfrNRWlFYU6JxkvVpw%3d&risl=&pid=ImgRaw&r=0" },
        { name: "ProForm", logo: "https://www.defitnessshop.nl/images/brands/proform-logo.png" },
        { name: "Kobo Fitness", logo: "https://logos-world.net/wp-content/uploads/2022/12/Kobo-Logo-2010-500x281.png" },
        { name: "Fitkit", logo: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/6cdbbc89172259.5decfad144096.jpg" }
    ],

    Surfboard: [
        { name: "Channel Islands", logo: "https://cdn.shopify.com/s/files/1/0010/2003/5131/files/channel_islands_surfboards.png?v=1613533241" },
        { name: "Lost Surfboards", logo: "https://www.pngkit.com/png/detail/133-1335288_related-keywords-suggestions-for-lost-surfboards-lost-surfboards.png" },
        { name: "Rip Curl", logo: "https://logodownload.org/wp-content/uploads/2014/10/rip-curl-logo-0.png" },
        { name: "Billabong", logo: "https://logodownload.org/wp-content/uploads/2014/08/billabong-logo-0.png" },
        { name: "JS Industries", logo: "https://th.bing.com/th/id/OIP.uhpDA3E9R0aIQsECZg5_CwHaHa?rs=1&pid=ImgDetMain" },
        { name: "Surftech", logo: "https://shop-eat-surf.com/wp-content/uploads/2021/01/surftech-logo-resized.jpg" },
        { name: "Fletcher Chouinard Designs", logo: "https://www.alfajango.com/assets/logos/chouinard_logo-4300c0adfac1acab226aee3bfd32b1251cfcc2cdb0f160ff24348703189d697d.png" },
        { name: "Rusty", logo: "https://www.liblogo.com/img-logo/ru7502r6b8-rusty-logo-rusty-logo-sbia.png" },
        { name: "Soul Surf India", logo: "https://i.pinimg.com/originals/97/75/a9/9775a98e6a162d984f4f19b366f8e416.jpg" },
        { name: "Temple Surfboards", logo: "https://4.imimg.com/data4/XA/CE/MY-8699007/temple_logo.jpg" }
    ],

    Kayak: [
        { name: "Old Town", logo: "https://cdn.dribbble.com/users/107416/screenshots/4147291/oldtown_logo.png" },
        { name: "Wilderness Systems", logo: "https://www.travelcountry.com/images_vendor/logo-wilderness-systems.png" },
        { name: "Perception", logo: "https://seeklogo.com/images/P/perception-logo-C87E8AD585-seeklogo.com.png" },
        { name: "Necky Kayaks", logo: "https://th.bing.com/th/id/OIP.gv6aEXJo56jK2Y3ASaEjuwAAAA?rs=1&pid=ImgDetMain" },
        { name: "Jackson Kayak", logo: "https://www.acekayaking.com/wp-content/uploads/2017/04/jacksonlogo.png" },
        { name: "Dagger", logo: "https://www.creativefabrica.com/wp-content/uploads/2023/02/17/D-for-Dagger-Logo-Design-Vector-Graphics-61505677-1.jpg" },
        { name: "Sevylor", logo: "https://www.kindermaxx.de/media/image/0b/07/01/sevylor-logo.jpg" },
        { name: "Vibe Kayaks", logo: "https://www.pinclipart.com/picdir/middle/184-1840585_since-2013-vibe-has-focused-on-one-thing.png" },
        { name: "Dalu Kayaks", logo: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b0e8e696131593.5ea78adae5d68.png" },
        { name: "Yolo Kayaks", logo: "https://th.bing.com/th/id/OIP.rKAfWP9nO03YHxv0aSlFcwAAAA?rs=1&pid=ImgDetMain" }
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
            <a href="product.html?company=Dell">
            <img src="${company.logo}" alt="${company.name} Logo" style="cursor: pointer;"></a>
            </a>
            <p style="font-size: 20px; font-weight: bold; color: blue; text-align: center; margin-top: 20px;"> ${company.name}
            </p>
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