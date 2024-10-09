const getProduct =  (product) => {
    return `
    <div class="prduct">
    <h2>${product.title}</h2>
    <p>${product.price}</p>
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