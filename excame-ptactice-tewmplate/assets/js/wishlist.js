function getProductsWish() {
    wishProducts.innerHTML = ``
    let wish = JSON.parse(localStorage.getItem("wish")) || []
    wish.map((item, id) => {
        let box = document.createElement("div")
        box.className = "box"
        box.innerHTML = `
        <img src="${item.image}" alt="">
        <h2>${item.title}</h2>
        <h2>${item.price} $</h2>
        <button onclick ="removeItem(${id})">Remove From Wish</button>
        `
        wishProducts.appendChild(box)

   
    })
}

function removeItem(id){
    let wish = JSON.parse(localStorage.getItem("wish")) || []
    wish.splice(id,1)
    localStorage.setItem("wish",JSON.stringify(wish))
    getProductsWish()

}

window.onload = () =>{
    getProductsWish()
}