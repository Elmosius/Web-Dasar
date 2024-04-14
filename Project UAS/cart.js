/* Nama team = Celvin's (Case Elmo Kevin'  Store)
    Tema =  Small-Medium Enterprise (Jual Case HP)
    Member :
    1. 2272008 - Elmosius Suli
    2. 2272007 - Kevin Owen
*/

// button cart (ngebuka & nutup)
function closeYourCart() {
  document.getElementById("your-cart-css").style.width = "0";
}
function openYourCart() {
  var width = screen.width;
  if (width <= 1000) {
    document.getElementById("your-cart-css").style.width = "100%";
  } else if (width <= 1100) {
    document.getElementById("your-cart-css").style.width = "60%";
  } else if (width <= 1200) {
    document.getElementById("your-cart-css").style.width = "55%";
  } else if (width <= 1400) {
    document.getElementById("your-cart-css").style.width = "50%";
  } else if (width <= 1700) {
    document.getElementById("your-cart-css").style.width = "45%";
  } else if (width <= 2000) {
    document.getElementById("your-cart-css").style.width = "40%";
  } else {
    document.getElementById("your-cart-css").style.width = "22.5%";
  }
}

// bagian kalau dipencet productnya

("use strict");
let cart = [];
let cartTotal = 0;
const cartDom = document.querySelector(".cart");
const addtocartbtnDom = document.querySelectorAll('[data-action="add-to-cart"]');

addtocartbtnDom.forEach((addtocartbtnDom) => {
  addtocartbtnDom.addEventListener("click", () => {
    var radioButtonGroup = addtocartbtnDom.value;
    var itemName = document.querySelector("input[name=" + radioButtonGroup + "]:checked").value;

    const productDom = addtocartbtnDom.parentNode.parentNode;
    const product = {
      img: productDom.querySelector(".product-img").getAttribute("src"),
      name: productDom.querySelector(".product-name").innerText + itemName,
      price: productDom.querySelector(".product-price").innerText,
      quantity: 1,
    };

    const IsinCart = cart.filter((cartItem) => cartItem.name === product.name).length > 0;
    if (IsinCart === false) {
      cartDom.insertAdjacentHTML(
        "beforeend",
        `
  <div class="d-flex flex-row shadow-sm card cart-items mt-2 mb-3 animated flipInX rounded">
    <div class="col-2 p-2 mt-2">
        <img src="${product.img}" alt="${product.name}" style="max-width: 50px;"/>
    </div>
    <div class="col-4 p-2 mt-3 text-start">
        <p class="text-black cart_item_name">${product.name}</p>
    </div>
    <div class="col-2 p-2 mt-3">
        <p class="text-success cart_item_price">${product.price}</p>
    </div>
    <div class="col p-2 mt-2">
        <button class="btn  btn-dark" type="button" data-action="increase-item">&plus;
    </div>
    <div class="col p-2 my-3">
      <p class="text-success cart_item_quantity">${product.quantity}</p>
    </div>
    <div class="col p-2  my-2">
      <button class="btn  btn-dark" type="button" data-action="decrease-item">&minus;
    </div>
    <div class="col p-2  my-2">
      <button class="btn  btn-danger" type="button" data-action="remove-item">&times;
    </div>
  </div> 
  `
      );

      if (document.querySelector(".cart-footer") === null) {
        cartDom.insertAdjacentHTML(
          "afterend",
          `
      <div class="d-flex flex-row shadow-sm card cart-footer mt-2 mb-3 animated flipInX justify-content-evenly">
        <div class="p-2">
          <button class="btn btn-danger" type="button" data-action="clear-cart">Clear Cart
        </div>
        <div class="p-2 ml-auto ms-4">
          <button class="btn btn-dark" type="button" data-action="check-out" >Pay <span class="pay"></span> 
            &nbsp; &#10137;&nbsp;&nbsp;&nbsp;
            <i class="fa-solid fa-envelope"></i>
        </div>
      </div>`
        );
      }
      cart.push(product);

      const cartItemsDom = cartDom.querySelectorAll(".cart-items");
      cartItemsDom.forEach((cartItemDom) => {
        if (cartItemDom.querySelector(".cart_item_name").innerText === product.name) {
          cartTotal += parseInt(cartItemDom.querySelector(".cart_item_quantity").innerText) * parseInt(cartItemDom.querySelector(".cart_item_price").innerText);
          document.querySelector(".pay").innerText = cartTotal + " $ ";

          // increase item in cart
          cartItemDom.querySelector('[data-action="increase-item"]').addEventListener("click", () => {
            cart.forEach((cartItem) => {
              if (cartItem.name === product.name) {
                cartItemDom.querySelector(".cart_item_quantity").innerText = ++cartItem.quantity;
                cartItemDom.querySelector(".cart_item_price").innerText = parseInt(cartItem.quantity) * parseInt(cartItem.price) + " $ ";
                cartTotal += parseInt(cartItem.price);
                document.querySelector(".pay").innerText = cartTotal + " $ ";
              }
            });
          });

          // decrease item in cart
          cartItemDom.querySelector('[data-action="decrease-item"]').addEventListener("click", () => {
            cart.forEach((cartItem) => {
              if (cartItem.name === product.name) {
                if (cartItem.quantity > 1) {
                  cartItemDom.querySelector(".cart_item_quantity").innerText = --cartItem.quantity;
                  cartItemDom.querySelector(".cart_item_price").innerText = parseInt(cartItem.quantity) * parseInt(cartItem.price) + " $ ";
                  cartTotal -= parseInt(cartItem.price);
                  document.querySelector(".pay").innerText = cartTotal + " $ ";
                }
              }
            });
          });

          //remove item from cart
          cartItemDom.querySelector('[data-action="remove-item"]').addEventListener("click", () => {
            cart.forEach((cartItem) => {
              if (cartItem.name === product.name) {
                cartTotal -= parseInt(cartItemDom.querySelector(".cart_item_price").innerText);
                document.querySelector(".pay").innerText = cartTotal + " $ ";
                cartItemDom.remove();
                cart = cart.filter((cartItem) => cartItem.name !== product.name);
                addtocartbtnDom.innerText = "Add to cart";
                addtocartbtnDom.disabled = false;
              }
              if (cart.length < 1) {
                document.querySelector(".cart-footer").remove();
              }
            });
          });

          //clear cart

          document.querySelector('[data-action="clear-cart"]').addEventListener("click", () => {
            cartItemDom.remove();
            cart = [];
            cartTotal = 0;
            if (document.querySelector(".cart-footer") !== null) {
              document.querySelector(".cart-footer").remove();
            }
            addtocartbtnDom.innerText = "Add to cart";
            addtocartbtnDom.disabled = false;
          });

          document.querySelector('[data-action="check-out"]').addEventListener("click", () => {
            cartItemDom.remove();
            cart = [];
            cartTotal = 0;
            if (document.querySelector(".cart-footer") !== null) {
              document.querySelector(".cart-footer").remove();

              addtocartbtnDom.innerText = "Add to cart";
              addtocartbtnDom.disabled = false;

              // nanya email

              let email = prompt("Enter your email");

              if (email != null) {
                Email.send({
                  Host: "smtp.elasticemail.com",
                  Username: "celvins@gmail.com",
                  Password: "3A0EADD56A201E75CF537F37D09A82E917C9",
                  To: email,
                  From: "celvinstore682@gmail.com",
                  Subject: "Hiii Celviners...",
                  Body: "Thank you for buying your order has been recorded, let's complete the next payment... (click me)",
                });
              }

              // nutup + alert

              document.getElementById("your-cart-css").style.width = "0";
              alert("Thank you for shopping with us ♡, please make further payments in the email.");
              {
              }
            }
          });
        }
      });
    }
  });
});
