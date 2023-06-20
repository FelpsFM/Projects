function eventFilter() {
    const filterButtons = document.querySelectorAll(".filter_item")
    console.log(filterButtons)
    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.innerText)
            let category = categories.indexOf(`${button.innerText}`)
            console.log(category)
            if(button.innerText === 'Todos'){
                render(products)

            }
            else{
                let filterCategory = products.filter((product) => product.category === parseInt(`${category}`))
                console.log(filterCategory)
                render(filterCategory)
            }

        })
    })
}
eventFilter()

function filterPrice(){
    let rangeValue = document.getElementById('rangeValue')
    let filterPriceRange = document.getElementById('filterPrice')
    rangeValue.innerText = `Até: ${filterPriceRange.value} Reais`
    let filteredProducts = products.filter((disc) => disc.price <= filterPriceRange.value)
    render(filteredProducts)
}
filterPrice()
