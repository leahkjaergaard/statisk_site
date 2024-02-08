const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  // Løb igennem hvert produkt og kald showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  //console.log(product);

  // Få fat i template
  const template = document.querySelector("#smallProductTemplate").content;
  // Lav en kopi
  const copy = template.cloneNode(true);
  copy.innerHTML = template.innerHTML;

  // Ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".subtle").textContent = product.subcategory;
  copy.querySelector(".price").textContent = `DKK ${product.price},-`;
  copy.querySelector(".discounted").innerHTML = `
  <p>Now DKK ${product.discount},-</p>
  <p>${product.discount}% off</p>
`;
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  if (product.soldout) {
    // Produkt er udsolgt
    copy.querySelector("article").classList.add("soldOut");
  }

  copy.querySelector(".read-more").setAttribute("href", `produkt.html?id=${product.id}`);

  // Append
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
