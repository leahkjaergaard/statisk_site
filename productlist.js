fetch ("https://kea-alt-del.dk/t7/api/products")
.then(res=>res.json())
.then(data=>)

function showProducts() {

    //looper og kalder show Products
showProducts.forEach(showProducts)   
}

function showProducts(){
console.log(product);
    //fang template
const template = document.querySelector("#smallProductTemplate").textContent;
    //lav kopi
const copy = template.cloneNode(true);
    //ændre indhold
    copy.querySelector("h3").textContent=product.productdisplayname;
if(product.soldout){
//produkt er udsolgt
copy.querySelector("article").classList.add("soldOut");
}
    //appende
document.querySelector("main").appendChild(copy);

}

/*
{
"id": 1165,
"gender": "Men",
"category": "Apparel",
"subcategory": "Topwear",
"articletype": "Tshirts",
"season": "Summer",
"productionyear": 2013,
"usagetype": "Sports",
"productdisplayname": "Mean Team India Cricket Jersey"
"price": 2495,
"discount": 45,
"brandname": "Nike",
"soldout": 0
}
*/
