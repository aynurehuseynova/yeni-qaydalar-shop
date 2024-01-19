const product = document.getElementById("product")
const loadMore = document.getElementById("loadMore");
let db;
let limit = 4;
let page = 1;

function getProduct() {
    axios.get(`https://655ddd779f1e1093c59a0b08.mockapi.io/basket?limit=${limit}&page=${page}`)
        .then((res) => {
            db = res.data;
            db.map((item) => {
                let miniDiv = document.createElement("div")
                miniDiv.className = "miniDiv";
                miniDiv.innerHTML = `
<img src="${item.image}" alt="">
<h2>${item.title}</h2>
<div class="wishAdd">
    <button onclick ="addToCart(${item.id})">+ Add To Cart</button>
    <button onclick ="addToWish(${item.id})"><i class="fa-regular fa-heart"></i></button>
</div>
`;
product.appendChild(miniDiv);
            })
        });
}

loadMore.addEventListener("click",getProduct )

const addToCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    productItem = cart.find(item => item.id == id)
    if (productItem) {
        productItem.count = (productItem.count || 1) + 1
    } else {
        cart.push(db.find(item => item.id == id))
    }
    localStorage.setItem("cart", JSON.stringify(cart))
}

const addToWish = (id) => {
    let wish = JSON.parse(localStorage.getItem("wish")) || []
    productItem = wish.find(item => item.id == id)
    if (productItem) {
        alert("Favori edilib")
    } else {
        wish.push(db.find(item => item.id == id))
        localStorage.setItem("wish", JSON.stringify(wish))
    }
    console.log(wish);
}
window.onload = () => {
    getProduct()
}