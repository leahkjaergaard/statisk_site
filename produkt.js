const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  document.querySelector(".breadcrumb .bread_category").textContent = product.category;
  document.querySelector(".breadcrumb .bread_subcategory").textContent = product.subcategory;
  document.querySelector(".breadcrumb .productdisplayname").textContent = product.productdisplayname;

  document.querySelector(".info h2").textContent = product.productdisplayname;
  document.querySelector(".info .brand").textContent = product.brandname;
  document.querySelector(".info .articletype").textContent = product.articletype;
  document.querySelector(".info .price").textContent = product.price;
  document.querySelector(".info .color").textContent = product.color;
  document.querySelector(".info .brandbio").textContent = product.brandbio;
  document.querySelector(".info .gender").textContent = product.gender;
  document.querySelector(".info .season").textContent = product.season;
  document.querySelector(".info .id").textContent = product.id;

  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}

// id: 1525, gender: "Unisex", category: "Accessories", subcategory: "Bags", articletype: "Backpacks", basecolour: "Navy Blue", season: "Fall", productionyear: 2010, usagetype: "Casual", productdisplayname: "Deck Navy Blue Backpack", … }
// ​
// agegroup: "Adults-Unisex"
// ​
// articletype: "Backpacks"
// ​
// basecolour: "Navy Blue"
// ​
// brandbio: "PUMA is the World's Fastest Sports Brand"
// ​
// brandimage: "http://assets.myntassets.com/assets/images/2015/11/17/11447736932686-113016-3ff8sf.jpg"
// ​
// brandname: "Puma"
// ​
// category: "Accessories"
// ​
// colour1: "NA"
// ​
// colour2: "NA"
// ​
// description: "<p>asfafaf<br> kasjhdkashd</p>"
// ​
// discount: 55
// ​
// fashiontype: "Fashion"
// ​
// gender: "Unisex"
// ​
// id: 1525
// ​
// materialcaredesc: null
// ​
// parsed: 1
// ​
// price: 1299
// ​
// productdisplayname: "Deck Navy Blue Backpack"
// ​
// productionyear: 2010
// ​
// relid: 1525
// ​
// season: "Fall"
// ​
// sizefitdesc: null
// ​
// soldout: 0
// ​
// styledesc: null
// ​
// subcategory: "Bags"
// ​
// usagetype: "Casual"
// ​
// variantname: "Deck Backpack"
