const products = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 499.99 },
    { id: 3, name: 'Tablet', price: 299.99 },
    { id: 4, name: 'Headphones', price: 199.99},
    { id: 5, name: 'Smartwatch', price: 199.99}
];

function getAllproducts(filters){
    let filteredProducts = [...products];
    // --- 1. SEARCH ---
    if (filters.name) {
        const searchLower = filters.name.toLowerCase();
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(searchLower)
        );
    }

    // --- 2. SORT ---
    if (filters.sortBy) {
          const field = filters.sortBy
        
        filteredProducts.sort((a, b) => {
            if (a[field] < b[field]) return -1;
            if (a[field] > b[field]) return 1;
            return 0;
        });
    } else {
        filteredProducts.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });
        
    }

    return filteredProducts
}

function getProductById(id){
    return products.find(product => product.id === parseInt(id));
}

module.exports = { getAllproducts, products, getProductById}
