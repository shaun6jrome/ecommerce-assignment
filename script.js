// Cart array
var cart = [];




$(".addCart").click(function () {

    var productName = $(this).data("name");
    var productPrice = Number($(this).data("price"));

    var found = false;


    for (var i = 0; i < cart.length; i++) {

        if (cart[i].name == productName) {

            cart[i].quantity++;

            found = true;

            break;
        }
    }


    if (found == false) {

        cart.push({
            name: productName,
            price: productPrice,
            quantity: 1
        });

    }


    displayCart();

    alert(productName + " added to cart");
});





function displayCart() {

    $("#cartItems").html("");

    var total = 0;
    var count = 0;


    for (var i = 0; i < cart.length; i++) {

        var itemTotal =
            cart[i].price * cart[i].quantity;

        total = total + itemTotal;

        count = count + cart[i].quantity;


        $("#cartItems").append(

            "<tr>" +

            "<td>" + cart[i].name + "</td>" +

            "<td>₹" + cart[i].price + "</td>" +

            "<td>" +

            "<button class='btn btn-sm btn-secondary decrease' data-index='" +
            i +
            "'>-</button> " +

            cart[i].quantity +

            " <button class='btn btn-sm btn-secondary increase' data-index='" +
            i +
            "'>+</button>" +

            "</td>" +

            "<td>₹" + itemTotal + "</td>" +

            "<td>" +

            "<button class='btn btn-sm btn-danger remove' data-index='" +
            i +
            "'>" +

            "Remove" +

            "</button>" +

            "</td>" +

            "</tr>"
        );
    }


    $("#cartTotal").text(total);

    $("#cartCount").text(count);
}



$(document).on("click", ".increase", function () {

    var index = $(this).data("index");

    cart[index].quantity++;

    displayCart();
});




$(document).on("click", ".decrease", function () {

    var index = $(this).data("index");

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    }

    displayCart();
});





$(document).on("click", ".remove", function () {

    var index = $(this).data("index");

    cart.splice(index, 1);

    displayCart();
});




$("#clearCart").click(function () {

    if (cart.length == 0) {

        alert("Cart is already empty");

        return;
    }


    cart = [];

    displayCart();

    alert("Cart cleared");
});





$("#buyButton").click(function () {

    if (cart.length == 0) {

        alert("Please add a product to cart");

    } else {

        alert("Order placed successfully!");

        cart = [];

        displayCart();
    }
});




$("#cartButton").click(function () {

    $("#cartSection").slideToggle();
});




$("#searchButton").click(function () {

    searchProducts();
});



$("#searchBox").keypress(function (event) {

    if (event.which == 13) {

        searchProducts();
    }
});



function searchProducts() {

    var searchText =
        $("#searchBox").val().toLowerCase();


    $(".product").each(function () {

        var productName =
            $(this).data("name").toLowerCase();


        if (productName.includes(searchText)) {

            $(this).show();

        } else {

            $(this).hide();

        }

    });
}



$("#registerForm").submit(function (event) {

    event.preventDefault();


    // Clear old messages
    $(".text-danger").text("");

    $("#successMessage").text("");


    var name = $("#name").val().trim();

    var email = $("#email").val().trim();

    var password = $("#password").val();

    var confirmPassword =
        $("#confirmPassword").val();


    var valid = true;



    // Name validation
    if (name == "") {

        $("#nameError").text("Name is required");

        valid = false;

    } else if (name.length < 3) {

        $("#nameError")
            .text("Name must contain at least 3 characters");

        valid = false;
    }



    // Email validation
    var emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email == "") {

        $("#emailError")
            .text("Email is required");

        valid = false;

    } else if (!emailPattern.test(email)) {

        $("#emailError")
            .text("Enter a valid email");

        valid = false;
    }



    // Password validation
    if (password == "") {

        $("#passwordError")
            .text("Password is required");

        valid = false;

    } else if (password.length < 6) {

        $("#passwordError")
            .text("Password must contain at least 6 characters");

        valid = false;
    }



    // Confirm password
    if (confirmPassword == "") {

        $("#confirmPasswordError")
            .text("Please confirm password");

        valid = false;

    } else if (password != confirmPassword) {

        $("#confirmPasswordError")
            .text("Passwords do not match");

        valid = false;
    }



    // Registration successful
    if (valid == true) {

        $("#successMessage")
            .text("Registration successful!");

        alert("Registration completed");

        $("#registerForm")[0].reset();
    }

});



$("#resetButton").click(function () {

    $(".text-danger").text("");

    $("#successMessage").text("");

});



$(".card").mouseenter(function () {

    $(this).css("background-color", "#f0f0f0");

});


$(".card").mouseleave(function () {

    $(this).css("background-color", "white");

});



$("#searchBox").keyup(function () {

    var text = $(this).val();

    console.log("Search text: " + text);

});