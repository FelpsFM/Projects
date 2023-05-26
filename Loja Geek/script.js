const productsArray = [
    (produto1 = {
      image: "./assets/img/paintings/quadro-c3po.jpg",
      name: "Robot",
      price: "R$250,00",
      type: "Paintings",
    }),
    (produto2 = {
      image: "./assets/img/actions/dragonball-action-figure.jpg",
      name: "Goku Super Saiyajin",
      price: "R$500,00",
      type: "Action Figures",
    }),
    (produto3 = {
      image: "./assets/img/paintings/quadro-controle.jpg",
      name: "Controle Playstation",
      price: "R$99,00",
      type: "Paintings",
    }),
    (produto4 = {
      image: "./assets/img/paintings/quadro-mario.jpg",
      name: "Mario",
      price: "R$275,00",
      type: "Paintings",
    }),
    (produto5 = {
      image: "./assets/img/paintings/quadro-pacman.jpg",
      name: "PacMan",
      price: "R$160,00",
      type: "Paintings",
    }),
    (produto6 = {
      image: "./assets/img/paintings/quadro-relogio.jpg",
      name: "Smart Watch",
      price: "R$120,00",
      type: "Paintings",
    }),
    (produto7 = {
      image: "./assets/img/actions/godzilla-action-figure.jpg",
      name: "Godzilla",
      price: "R$700,00",
      type: "Action Figures",
    }),
    (produto8 = {
      image: "./assets/img/actions/groot-action-figure.jpg",
      name: "Groot",
      price: "R$950,00",
      type: "Action Figures",
    }),
    (produto9 = {
      image: "./assets/img/actions/ironman-action-figure.jpg",
      name: "Homem de Ferro",
      price: "R$1030,00",
      type: "Action Figures",
    }),
    (produto1 = {
      image: "./assets/img/actions/starwars-action-figure.jpg",
      name: "Sr Yoda",
      price: "R$870,00",
      type: "Action Figures",
    }),
    (produto1 = {
      image: "./assets/img/actions/wolverine-action-figure.jpg",
      name: "Wolverine",
      price: "R$510,00",
      type: "Action Figures",
    }),
  ];
  
  let listFigures = [];
  let listFrames = [];
  function separateTypeItens(productsArray) {
    for (let i = 0; i < productsArray.length; i++) {
      let listProducts = productsArray[i];
      console.log(listProducts.type);
      if (listProducts.type === "Paintings") {
        listFrames.push(listProducts);
      } else {
        listFigures.push(listProducts);
      }
    }
  }
  separateTypeItens(productsArray);
  
  const body = document.querySelector("body");
  
  function createProductCard(product) {
    const productSection = document.createElement("section");
    productSection.className = "produtos";
  
    const nameText = document.createElement("h3");
    nameText.innerText = product[0].type;
    productSection.appendChild(nameText);
  
    const productList = document.createElement("ul");
  
    for (let i = 0; i < product.length; i++) {
      let elementList = document.createElement("li");
      productList.appendChild(elementList);
  
      let productCard = document.createElement("div");
      productCard.id = product[i].name;
      productCard.className = "product-card";
      elementList.appendChild(productCard);
  
      let productImage = document.createElement("img");
      productImage.src = product[i].image;
      productCard.appendChild(productImage);
  
      let productNameText = document.createElement("h4");
      productNameText.innerText = product[i].name;
      productCard.appendChild(productNameText);
  
      let productPrice = document.createElement("p");
      productPrice.innerText = product[i].price;
      productCard.appendChild(productPrice);
    }
    productSection.appendChild(productList);
  
    return productSection;
  }
  let frames = createProductCard(listFrames);
  let figures = createProductCard(listFigures);
  body.appendChild(frames);
  body.appendChild(figures);
  