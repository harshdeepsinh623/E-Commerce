const dellModels = [
    { name: "Dell XPS 13", image: "https://i.pinimg.com/736x/76/1e/d3/761ed3f968fc5f90fb56215266de2e6e.jpg", price: "$1,200", rating: "⭐⭐⭐⭐⭐" },
    { name: "Dell Alienware m15", image: "https://i.pinimg.com/736x/1f/47/d7/1f47d75a5c0581c45e5f1912cb1a70a2.jpg", price: "$2,000", rating: "⭐⭐⭐⭐⭐" },
    { name: "Dell Inspiron 15", image: "https://i.pinimg.com/736x/02/cd/14/02cd140649aa20b0c3c2641f229ebc9e.jpg", price: "$750", rating: "⭐⭐⭐⭐" },
    { name: "Dell Latitude 5510", image: "https://i.pinimg.com/736x/8e/0c/f3/8e0cf354faeb331bcbde30938534f95d.jpg", price: "$850", rating: "⭐⭐⭐⭐" },
    { name: "Dell Vostro 14", image: "https://i.pinimg.com/736x/aa/45/4b/aa454b91faf644d5837db428d15efeb4.jpg", price: "$650", rating: "⭐⭐⭐" },
    { name: "Dell G3 15", image: "https://i.pinimg.com/736x/93/ca/54/93ca541c683e4f767ac4a1920996962c.jpg", price: "$1,100", rating: "⭐⭐⭐⭐" },
    { name: "Dell Inspiron 13", image: "https://i.pinimg.com/736x/0b/a3/fe/0ba3feaa33a5628357cf40ea7cdc38bd.jpg", price: "$800", rating: "⭐⭐⭐" },
    { name: "Dell Chromebook 3100", image: "https://i.pinimg.com/736x/02/3d/ed/023ded492e3b7d6d5cbebeb9a4845be9.jpg", price: "$400", rating: "⭐⭐⭐" },
    { name: "Dell Precision 3550", image: "https://i.pinimg.com/736x/b3/a1/ce/b3a1cec7e185e49a6bebc34d21d732ae.jpg", price: "$950", rating: "⭐⭐⭐" },
    { name: "Dell OptiPlex 7090", image: "https://i.pinimg.com/736x/b4/3d/32/b43d320f9cf409d652ef1960712eea20.jpg", price: "$600", rating: "⭐⭐⭐" },
];

const HPModels = [
    { name: "HP Spectre x360", image: "https://i.pinimg.com/736x/bc/fa/db/bcfadbaf3bd9b47fb9bf8e7e380d310b.jpg", price: "₹1,35,000", rating: "⭐⭐⭐⭐⭐" },
    { name: "HP Omen 15", image: "https://i.pinimg.com/736x/a8/97/94/a8979473422163a06fb38907b7e6c7ad.jpg", price: "₹1,25,000", rating: "⭐⭐⭐⭐⭐" },
    { name: "HP Elite Dragonfly", image: "https://i.pinimg.com/736x/1c/5a/df/1c5adf7928def8b82fe3b5f5ec9480f6.jpg", price: "₹1,32,000", rating: "⭐⭐⭐⭐" },      
    { name: "HP Envy x360", image: "https://i.pinimg.com/736x/f8/bf/b5/f8bfb53cb4c6d56cf97dbb986e4d88a0.jpg", price: "₹97,000", rating: "⭐⭐⭐⭐⭐" },
    { name: "HP Pavilion 14", image: "https://i.pinimg.com/736x/37/a5/d9/37a5d9176469c76a0ab1453235488c55.jpg", price: "₹78,000", rating: "⭐⭐⭐⭐" },
    { name: "HP 15s", image: "https://i.pinimg.com/736x/c0/36/77/c03677fefa623cabaa89d756f6eef018.jpg", price: "₹50,000", rating: "⭐⭐⭐⭐" },
    { name: "HP 255 G7", image: "https://i.pinimg.com/736x/6f/19/18/6f19189da95dbbb2fc83226865f45fac.jpg", price: "₹40,000", rating: "⭐⭐⭐" },
    { name: "HP Chromebook 14", image: "https://i.pinimg.com/736x/8e/08/0c/8e080c8e07231f4821a15bd7fe30c8b7.jpg", price: "₹28,500", rating: "⭐⭐⭐⭐" },
    { name: "HP 14s", image: "https://i.pinimg.com/736x/af/70/bd/af70bd12178643d0bdba6328fb9b9bf4.jpg", price: "₹30,000", rating: "⭐⭐⭐" },
    { name: "HP ProBook 430 G6", image: "https://i.pinimg.com/736x/52/4b/da/524bdab9c7eaf75e63bf37a999ed1c3e.jpg", price: "₹45,000", rating: "⭐⭐⭐" }
];
  
  function populateModels(sectionId, models) {
    const section = document.querySelector(`#${sectionId} .model-list`);
    models.forEach(model => {

      const modelDiv = document.createElement("div");
      modelDiv.className = "model";
  
      modelDiv.innerHTML = `
        <img src="${model.image}" alt="${model.name}">
        <h3>${model.name}</h3>
        <p class="price">Price: ${model.price}</p>
        <p class="rating">Rating: ${model.rating}</p>
        <button onclick="handleButtonClick('${model.name}')">View Details</button>
      `;
      section.appendChild(modelDiv);
    });
  }

  function handleButtonClick(modelName) {
    alert(`You clicked on ${modelName}!`);
  }
  
  populateModels("top-3", dellModels.slice(0, 3)); 
  populateModels("middle-4", dellModels.slice(3, 7)); 
  populateModels("low-3", dellModels.slice(7, 10)); 

  document.getElementById('previous-btn').addEventListener('click', () => {
    window.location.href = 'index.html'
  })