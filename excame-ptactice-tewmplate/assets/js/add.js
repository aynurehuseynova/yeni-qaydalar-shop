let addProducts = document.getElementById("addProducts")
let nameinp = document.getElementById("nameinp")
let titleinp = document.getElementById("titleinp")
let priceinp = document.getElementById("priceinp")
let myForm = document.getElementById("myForm")
let addPageProoducts = document.getElementById("addPageProoducts")


myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    axios
        .post("https://655ddd779f1e1093c59a0b08.mockapi.io/basket", {
            name: nameinp.value,
            price: priceinp.value,
            title: titleinp.value,
        })
        .then((res) => {
            console.log(res.data);
            myForm.reset();
            renderProducts();
        });
});

addProducts.addEventListener("click", myForm)


const renderProduct = () => {
    addPageProoducts.innerHTML ="";
    axios.get(`https://655ddd779f1e1093c59a0b08.mockapi.io/basket`)
        .then((res) => {
            db = res.data
            db.map((item) => {
                let miniDiv = document.createElement("tr")
                miniDiv.className = "miniDiv"
                miniDiv.innerHTML = `
         
            <h2>Title:${item.title}</h2>
            <h2>Name:${item.name}</h2>
            <h2>Price:${item.price} $</h2>
                <button onclick ="deleteFromForm(${item.id})">Remove</button>
            `
                addPageProoducts.appendChild(miniDiv)
            })

        })
}



function deleteFromForm(id) {
    axios
        .delete(`https://655ddd779f1e1093c59a0b08.mockapi.io/basket/${id}`)
        .then((res) => {
            renderProduct()
            console.log(deleteFromForm);
        });
}


renderProduct()


let sortBtnAZ = document.getElementById("sortBtnAZ")
function sortAZ(){
    addPageProoducts.innerHTML = ``
    axios.get("https://655ddd779f1e1093c59a0b08.mockapi.io/basket")
    .then((res)=>{
        db = res.data
        let sortDataAZ = db.sort((a,b)=> a.title.localeCompare(b.title))
        sortDataAZ.map(item=>{
            let miniDiv = document.createElement("tr")
            miniDiv.className = "miniDiv"
            miniDiv.innerHTML = `
     
        <h2>Title:${item.title}</h2>
        <h2>Name:${item.name}</h2>
        <h2>Price:${item.price} $</h2>
            <button onclick ="deleteFromForm(${item.id})">Remove</button>
        `
            addPageProoducts.appendChild(miniDiv)
        })
    })
}

sortBtnAZ.addEventListener("click",sortAZ)

let sortBtnZA = document.getElementById("sortBtnZA")
function sortZA(){
    addPageProoducts.innerHTML = ``
    axios.get("https://655ddd779f1e1093c59a0b08.mockapi.io/basket")
    .then((res)=>{
        db = res.data
        let sortDataZA = db.sort((a,b)=> b.title.localeCompare(a.title))
        sortDataZA.map(item=>{
            let miniDiv = document.createElement("tr")
            miniDiv.className = "miniDiv"
            miniDiv.innerHTML = `
     
        <h2>Title:${item.title}</h2>
        <h2>Name:${item.name}</h2>
        <h2>Price:${item.price} $</h2>
            <button onclick ="deleteFromForm(${item.id})">Remove</button>
        `
            addPageProoducts.appendChild(miniDiv)
        })
    })
}

sortBtnZA.addEventListener("click",sortZA)

let sortBtnDefault = document.getElementById("sortBtnDefault")
sortBtnDefault.addEventListener("click",renderProduct)









