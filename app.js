const display = document.querySelector('#showCart');
let numberCart = document.querySelector('#numberCart');
let counterCart = JSON.parse(localStorage.getItem("numbersOfCart")) ?? 0;
let sumCart = JSON.parse(localStorage.getItem("sum")) ?? 0;
let cartToBuy = JSON.parse(localStorage.getItem("cartBuy")) ?? [];

// Botones
let buttonMSI = document.querySelector('.btn-list');
let buttonHP = document.querySelector('.button-hp');
let buttonAcer = document.querySelector('.button-acer');
let buttonLenovo = document.querySelector('.button-lenovo');

// Precios
let priceMSI = document.querySelector('.red');
let priceHP = document.querySelector('.price-hp');
let priceAcer = document.querySelector('.price-acer');
let priceLenovo = document.querySelector('.price-lenovo');

priceMSI = Number(priceMSI.textContent.slice(1));
priceHP = Number(priceHP.textContent.slice(1));
priceAcer = Number(priceAcer.textContent.slice(1));
priceLenovo = Number(priceLenovo.textContent.slice(1));

numberCart.textContent = counterCart;

function toCart() {
  counterCart++;
  numberCart.textContent = counterCart;
  localStorage.setItem("numbersOfCart", JSON.stringify(counterCart));
}

function showCar() {

  if(counterCart === 0){

    display.classList.add('showCart');
    display.innerHTML = `
    <div>
      <i onclick="hideCart()" class="fa-solid fa-xmark x-position"></i>
      <h3>My cart</h3>
    </div>
    <div>
      <img src ="bag-empty.png" width="280px" height="260px">
      <h4>Your cart is empty</h4>
      <p>You can add items to your cart by clicking on the <br>button "Add to list" or "+" on the product page</p>
    </div>
    <div>
      <p>0 items</p>
      <p>$ 0.00</p>
      <button class="btn checkout" onclick="checkOut()">
        <i class="fa-regular fa-square-check"></i>
        Checkout
      </button>
    </div>
    `
  } else if(counterCart>0){
    display.classList.add('showCart');
    display.innerHTML = `
    <div>
      <i onclick="hideCart()" class="fa-solid fa-xmark x-position"></i>
      <h3>My cart</h3>
    </div>
    <div class="laptops-cart-container">
      ${cartToBuy.join("")}
    </div>
    <div>
      <p>${counterCart} items</p>
      <p>$ ${sumCart.toFixed(2)}</p>
      <button class="btn checkout" onclick="checkOut()">
        <i class="fa-regular fa-square-check"></i>
        Checkout
      </button>
    </div>
    `
  }

}

function hideCart(){
  display.classList.remove('showCart');
  display.innerHTML = '';
}

function checkOut(){
  counterCart = 0;
  sumCart = 0;
  cartToBuy = [];
  numberCart.textContent = counterCart;
  localStorage.setItem("numbersOfCart", JSON.stringify(counterCart));
  localStorage.setItem("cartBuy", JSON.stringify(cartToBuy));
  localStorage.setItem("sum", JSON.stringify(sumCart));
  showCar();
}

function sumCarMSI(){
  sumCart = sumCart + priceMSI;
  cartToBuy.push(`<div class="cart-buy">
  <img width="125px" height="100px" src="msi-sword.png" alt="msiLaptop">
  </div>`)
  localStorage.setItem("cartBuy", JSON.stringify(cartToBuy));
  localStorage.setItem("sum", JSON.stringify(sumCart));
}

function sumCarHP(){
  sumCart = sumCart + priceHP;
  cartToBuy.push(`<div class="cart-buy">
  <img width="125px" height="100px" src="hp-pavilion.png" alt="msiLaptop">
  </div>`)
  localStorage.setItem("cartBuy", JSON.stringify(cartToBuy));
  localStorage.setItem("sum", JSON.stringify(sumCart));
}

function sumCarAcer(){
  sumCart = sumCart + priceAcer;
  cartToBuy.push(`<div class="cart-buy">
  <img width="125px" height="100px" src="acer-nitro.png" alt="msiLaptop">
  </div>`)
  localStorage.setItem("cartBuy", JSON.stringify(cartToBuy));
  localStorage.setItem("sum", JSON.stringify(sumCart));
}

function sumCarLenovo(){
  sumCart = sumCart + priceLenovo;
  cartToBuy.push(`<div class="cart-buy">
  <img width="125px" height="100px" src="lenovo-legion.png" alt="msiLaptop">
  </div>`)
  localStorage.setItem("cartBuy", JSON.stringify(cartToBuy));
  localStorage.setItem("sum", JSON.stringify(sumCart));
}