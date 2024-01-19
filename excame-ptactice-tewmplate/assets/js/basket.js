function getProducts() {
    cartProducts.innerHTML = ``
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.map((item, id) => {
        let box = document.createElement("div")
        box.className = "box"
        box.innerHTML = `
        <img src="${item.image}" alt="">
        <h2>${item.title}</h2>
        <h2>${item.count} piece</h2>
        <button onclick ="removeItem(${id})">Remove From Cart</button>
        `
        cartProducts.appendChild(box)
   
    })
}

function removeItem(id){
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.splice(id,1)
    localStorage.setItem("cart",JSON.stringify(cart))
    getProducts()

}

window.onload = () =>{
    getProducts()
}