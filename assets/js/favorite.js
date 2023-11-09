const favourite = JSON.parse(sessionStorage.getItem('favourite'));

    const cartTableBody = document.querySelector('#cart-container tbody');

    function displayFavourite () {favourite.forEach((item) => {
        const newRow = document.createElement('tr');
        newRow.innerHTML =`
            <td><a href="" class="remove-item" onclick="removeFavourite()"><i class="fas fa-trash-alt"></i></a></td>
            <td>
                <h5>${item.productName}</h5>
            </td>
            <td>
                <h5>$${item.price}</h5>
            </td>
        `;

        cartTableBody.appendChild(newRow);
    })};

    // const removeIcons = document.querySelectorAll(".remove-item");
    //     removeIcons.forEach(icon => {
    //         icon.addEventListener("click", function (event) {
    //             event.preventDefault();
    //             const cartData = JSON.parse(localStorage.getItem('cartData'));
    //             cartData.pop();
    //             localStorageStorage.setItem("cartData", JSON.stringify(wishlistItems));
    //             dispayFavourite();

    //         });
    //     });



function removeFavourite () {
    favourite.pop();
    sessionStorage.setItem("favourite", JSON.stringify(favourite));
    displayFavourite();
}

if (favourite && favourite.length > 0) {
    displayFavourite();
}