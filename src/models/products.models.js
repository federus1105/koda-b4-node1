const products = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 499.99 },
    { id: 3, name: 'Tablet', price: 299.99 },
    { id: 4, name: 'Headphones', price: 199.99},
    { id: 5, name: 'Smartwatch', price: 199.99}
];

function getAllproducts(){
    return products
}

function getProductById(id){
    return products.find(product => product.id === parseInt(id));
}

module.exports = { getAllproducts, products, getProductById}