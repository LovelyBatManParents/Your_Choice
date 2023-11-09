if (!sessionStorage.getItem("favourite")) {
    const favourite = [];
    sessionStorage.setItem("favourite", JSON.stringify(favourite));
  }
  const favourite = JSON.parse(sessionStorage.getItem("favourite"));

function addToCart(productName, brand, price) {
            const cartData = {
                productName: productName,
                brand: brand,
                price: price,
            };

            favourite.push(cartData);

            sessionStorage.setItem("favourite", JSON.stringify(favourite));
            alert('Product added to cart');
        }