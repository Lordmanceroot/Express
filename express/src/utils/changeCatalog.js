const {jsonContent, content} = require('../module/dataModule.js');

function addProduct(product) {
    content.push(product);
    let arrNew = content.map((item, index) => {
        return {id: index, product: item.product, count: item.count, price: item.price};
    })

    jsonContent(arrNew);
}

function changeProduct(product, productID) {
        content[productID] = (product);
        jsonContent(content);

}

module.exports = {
    addProduct,
    changeProduct
}
