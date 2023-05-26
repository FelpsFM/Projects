const productsArray = [
  produto1 = {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  produto2 = {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  produto3 = {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "Controle Playstation",
    price: "R$99,00",
    type: "Paintings",
  },
  produto4 = {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$275,00",
    type: "Paintings",
  },
  produto5 = {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: "PacMan",
    price: "R$160,00",
    type: "Paintings",
  },
  produto6 = {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$120,00",
    type: "Paintings",
  },
  produto7 = {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$700,00",
    type: "Action Figures",
  },
  produto8 = {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$950,00",
    type: "Action Figures",
  },
  produto9 = {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$1030,00",
    type: "Action Figures",
  },
  produto10 = {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$870,00",
    type: "Action Figures",
  },
  produto11 = {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$510,00",
    type: "Action Figures",
  },
];

function separateTypeItems(productsArray) {
  const separatedItems = {
    Paintings: [],
    Actions: []
  };

  for (let i = 0; i < productsArray.length; i++) {
    const product = productsArray[i];
    if (product.type === "Paintings") {
      separatedItems.Paintings.push(product);
    } else {
      separatedItems.Actions.push(product);
    }
  }

  return separatedItems;
}

function createProductCard(product) {
  const productSection = document.createElement("section");
  productSection.className = "produtos";

  const nameText = document.createElement("h3");
  nameText.innerText = product.type;
  productSection.appendChild(nameText);

  const productList = document.createElement("ul");

  for (let i = 0; i < product.items.length; i++) {
    const item = product.items[i];

    const elementList = document.createElement("li");
    productList.appendChild(elementList);

    const productCard = document.createElement("div");
    productCard.id = item.name;
    productCard.className = "product-card";
    elementList.appendChild(productCard);

    const productImage = document.createElement("img");
    productImage.src = item.image;
    productCard.appendChild(productImage);

    const productNameText = document.createElement("h4");
    productNameText.innerText = item.name;
    productCard.appendChild(productNameText);

    const productPrice = document.createElement("p");
    productPrice.innerText = item.price;
    productCard.appendChild(productPrice);
  }

  productSection.appendChild(productList);

  return productSection;
}

const separatedItems = separateTypeItems(productsArray);

const paintings = createProductCard({ type: "Paintings", items: separatedItems.Paintings });
const actions = createProductCard({ type: "Action actions", items: separatedItems.Actions });

const body = document.querySelector("body");
body.appendChild(paintings);
body.appendChild(actions);
