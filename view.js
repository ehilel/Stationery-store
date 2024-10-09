const getProduct =  (product) => {
    return `
    <div class="card">
    <div class="card-header">${product.title}</div>

    <div class="card-footer">
    <div class="price">${product.price}</div>
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