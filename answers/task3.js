const products = [
{ name: 'T-shirt', category: 'Clothing', price: 25 },
{ name: 'Sweater', category: 'Clothing', price: 60 },
{ name: 'Laptop', category: 'Electronics', price: 1000 },
{ name: 'Phone', category: 'Electronics', price: 500 },
{ name: 'JS Book', category: 'Books', price: 30 }
];

function filterByCategory(items, category) {
    return items.filter(item => item.category === category);
}

function filterByCategoryEasier(items, category) {
    const result = [];
    for (const item of items) {
        if (item.category === category) {
            result.push(item);
        }
    }
    return result;
}

const electronics = filterByCategory(products, 'Electronics');
console.log("Electronics:",electronics);

const electronicsEasier = filterByCategoryEasier(products, 'Electronics');
console.log("Electronics (Easier Method):",electronicsEasier);

const clothing = filterByCategory(products, 'Clothing');
console.log("Clothing:",clothing);

const clothingEasier = filterByCategoryEasier(products, 'Clothing');
console.log("Clothing (Easier Method):",clothingEasier);

const books = filterByCategory(products, 'Books');
console.log("Books:",books);

const booksEasier = filterByCategoryEasier(products, 'Books');      
console.log("Books (Easier Method):",booksEasier);