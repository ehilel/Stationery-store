const getProduct =  (product) => {
    return `
    <div class="prduct">
    <h2>${product.title}</h2>
    <img src=${product.image} class="image-product" alt="Product image">
    <p>${product.price}</p>
    </div>
    `
}

const renderProducts = (products) =>{
    let productStr = ``;
    for(const prduct of products){
        productStr += products;
    }
    document.getElementById("products").innerHTML;
}