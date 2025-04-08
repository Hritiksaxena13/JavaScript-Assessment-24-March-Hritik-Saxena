function updatePrice() {
            let price = document.getElementById("price").value;
            document.getElementById("price").innerText = `$${price}`;
        }

        function filter() {
            let category = document.getElementById("category").value;
            let maxPrice = document.getElementById("price").value;
            let searchTerm = document.getElementById("search").value.toLowerCase();
            let products = document.querySelectorAll(".product");

            products.forEach(product => {
                let productCategory = product.getAttribute("data-category");
                let productPrice = parseInt(product.getAttribute("data-price"));
                let productName = product.querySelector("h3").innerText.toLowerCase();

                const categoryMatch = category === "all" || category === productCategory;
                const priceMatch = productPrice <= maxPrice;
                const searchMatch = productName.includes(searchTerm);

                product.style.display = categoryMatch && priceMatch && searchMatch ? "block" : "none";
            });
        }