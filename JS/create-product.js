document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const product = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        price: parseFloat(document.getElementById('price').value),
        stock: parseInt(document.getElementById('stock').value, 10)
    };

    // Save the product (this is a placeholder, you'd likely send this to a server)
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));

    alert('Product created successfully!');
    document.getElementById('productForm').reset();
});
