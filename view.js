const getProduct =  (product) => {
    return `
    <div class="card">
    <div class="card-header">${product.title}</div>
    <div class="card-image"><img src=${product.image} alt="Product presentation"></div>
    <div class="card-footer">
    <div class="price">${product.price}</div>
     <button class="add-to-cart">הוספה לסל</button>
    </div>
    </div>
    `
}


const renderProducts = (products) =>{
    let productStr = ``;
    for(const prduct of products){
        productStr += getProduct (prduct);
    }
    document.getElementById("products").innerHTML  = productStr;
}