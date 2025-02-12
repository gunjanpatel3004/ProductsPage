import "../scss/list.scss";

document.addEventListener("DOMContentLoaded", function () {
	const productTableBody = document.getElementById("productTableBody");
	const products = JSON.parse(localStorage.getItem("products")) || [];

	products.forEach((product) => {
		const row = document.createElement("tr");

		const titleCell = document.createElement("td");
		titleCell.textContent = product.title;
		row.appendChild(titleCell);

		const descriptionCell = document.createElement("td");
		descriptionCell.textContent = product.description;
		row.appendChild(descriptionCell);

		const priceCell = document.createElement("td");
		priceCell.textContent = product.price.toFixed(2);
		row.appendChild(priceCell);

		const stockCell = document.createElement("td");
		stockCell.textContent = product.stock;
		row.appendChild(stockCell);

		productTableBody.appendChild(row);
	});
});
