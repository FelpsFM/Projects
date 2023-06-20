/* Desenvolva sua lógica aqui ... */
function render(array){
    let listOfCards = document.getElementById("albuns")
    listOfCards.innerHTML = ''
    array.forEach(product => {
      let newCard = createCard(product)
      listOfCards.appendChild(newCard)
    })

}


function createCard(disc){

        let cardContainer = document.createElement("li")
        let productImg = document.createElement("img")
        let cardContent = document.createElement("div")
        let productInfo = document.createElement("div")
        let productBand = document.createElement("h5")
        let productYear = document.createElement("h5")
        let productName = document.createElement("h2")
        let cardFooter = document.createElement("div")
        let productValue = document.createElement("p")
        let buyButton = document.createElement("button")
        productImg.src = disc.img
        productName.innerText = disc.title
        productBand.innerText = disc.band
        productYear.innerText = disc.year
        productValue.innerText = `R$:${disc.price}`
        cardContainer.id = disc.id
        buyButton.innerText = "Comprar"
        cardContainer.classList = `card-container ${disc.category}`
    
        cardContent.classList = "card-content"
        productValue.classList.add("text-subtitle")
        productInfo.classList = "flex text-info"
        productName.classList = "text-subtitle"
    
        cardFooter.classList = "flex jc-space-between align-items-center"
        buyButton.classList = "button-tag"
    
        cardFooter.append(productValue, buyButton)
        productInfo.append(productBand, productYear)
        cardContent.append(productInfo, productName, cardFooter)
        cardContainer.append(productImg, cardContent)

        return cardContainer
    }

    render(products)



{/* <li class="card-container">
<img src="" alt="Capa do Álbum">
<div class="card-content">
  <div class="flex">
    <h5>Banda</h5>
    <h5>Ano</h5>
  </div>
  <h2 class="text-subtitle">Nome do Álbum</h2>
  <div class="flex jc-space-between align-items-center">
    <p>Tal Valor</p>
    <button class="button-tag">Comprar</button>
  </div>
</div>
</li> */}
