import hospitals from "../src/staticData/hospitals.json";

$(document).ready(function () {
	const itemsPerPage = 5; // Number of items per page
	let currentPage = 1;

	// Function to display table rows for the current page
	function displayTablePage() {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		const slicedData = hospitals.slice(startIndex, endIndex);

		const tbody = $("#data-table tbody");
		tbody.empty();

		slicedData.forEach((item) => {
			tbody.append(`<tr><td>${item.id}</td><td>${item.name}</td><td>${item.email}</td></tr>`);
		});
	}

	// Initial display
	displayTablePage();

	// Function to handle pagination click events
	$("#pagination .prev").on("click", function (e) {
		e.preventDefault();
		if (currentPage > 1) {
			currentPage--;
			displayTablePage();
		}
	});

	$("#pagination .next").on("click", function (e) {
		e.preventDefault();
		const totalPages = Math.ceil(hospitals.length / itemsPerPage);
		if (currentPage < totalPages) {
			currentPage++;
			displayTablePage();
		}
	});
});
