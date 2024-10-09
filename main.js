
function showCategory(category) {
    if (category === 'notebooks') {
        renderProducts(notebooks);
    } else if (category === 'craft') {
        renderProducts(craft);
    }
}

function main() {
    showCategory('notebooks');
}

main();

