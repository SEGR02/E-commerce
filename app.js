const display = document.querySelector('#showCart');
let numberCart = document.querySelector('#numberCart');
let counterCart = JSON.parse(localStorage.getItem("numbersOfCart")) ?? 0;
let sumCart = JSON.parse(localStorage.getItem("sum")) ?? 0;
let cartToBuy = JSON.parse(localStorage.getItem("cartBuy")) ?? [];
let cardData = JSON.parse(localStorage.getItem("card-data")) ?? [];

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

// Contadores
let quantityMSI = 0;
let quantityHP = 0;
let quantityAcer = 0;
let quantityLenovo = 0;

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
        <i class="fa-regular fa-square-check no-margin"></i>
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
      ${cardData.join("")}
    </div>
    <div>
      <p>${counterCart} items</p>
      <p>$ ${sumCart.toFixed(2)}</p>
      <button class="btn checkout" onclick="checkOut()">
        <i class="fa-regular fa-square-check no-margin"></i>
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
  quantityAcer = 0; quantityHP = 0; quantityLenovo = 0; quantityMSI = 0;
  counterCart = 0;
  sumCart = 0;
  cartToBuy = [];
  cardData = [];
  numberCart.textContent = counterCart;
  localStorage.setItem("numbersOfCart", JSON.stringify(counterCart));
  localStorage.setItem("cartBuy", JSON.stringify(cartToBuy));
  localStorage.setItem("sum", JSON.stringify(sumCart));
  localStorage.setItem("card-data", JSON.stringify(cardData));
  showCar();
}

function sumCarMSI(){
  quantityMSI++;
  sumCart = sumCart + priceMSI;
  cartToBuy.push(``)
  localStorage.setItem("cartBuy", JSON.stringify(cartToBuy));
  localStorage.setItem("sum", JSON.stringify(sumCart));
  cardData.push(`
  <article class="data-laptop-card">
    <div class="card-image">
      <div class="cart-buy">
        <img width="125px" height="100px" src="msi-sword.png" alt="msiLaptop">
      </div>
    </div>
    <div class="card-data">
      <div class="card-title">
        <p>MSI Sword 15</p>
      </div>
      <div class="card-price">
        <p>Subtotal: $${priceMSI.toFixed(2)}</p>
      </div>
      <div class="card-quantity">
        <i class="fa-solid fa-minus btn"></i>
        <p>${quantityMSI}</p>
        <i class="fa-solid fa-plus btn"></i>
        <i class="fa-solid fa-trash margin-left btn"></i>
      </div>
    </div>
  </article>
  `);
  localStorage.setItem("card-data", JSON.stringify(cardData));
}

function sumCarHP(){
  quantityHP++;
  sumCart = sumCart + priceHP;
  cartToBuy.push(``)
  localStorage.setItem("cartBuy", JSON.stringify(cartToBuy));
  localStorage.setItem("sum", JSON.stringify(sumCart));
  cardData.push(`
  <article class="data-laptop-card">
    <div class="card-image">
      <div class="cart-buy">
        <img width="125px" height="100px" src="hp-pavilion.png" alt="msiLaptop">
      </div>
    </div>
    <div class="card-data">
      <div class="card-title">
        <p>HP Pavilion Gaming</p>
      </div>
      <div class="card-price">
        <p>Subtotal: $${priceHP.toFixed(2)}</p>
      </div>
      <div class="card-quantity">
        <i class="fa-solid fa-minus btn"></i>
        <p>${quantityHP}</p>
        <i class="fa-solid fa-plus btn"></i>
        <i class="fa-solid fa-trash margin-left btn"></i>
      </div>
    </div>
  </article>
  `);
  localStorage.setItem("card-data", JSON.stringify(cardData));
}

function sumCarAcer(){
  quantityAcer++;
  sumCart = sumCart + priceAcer;
  cartToBuy.push(``)
  localStorage.setItem("cartBuy", JSON.stringify(cartToBuy));
  localStorage.setItem("sum", JSON.stringify(sumCart));
  cardData.push(`
  <article class="data-laptop-card">
    <div class="card-image">
      <div class="cart-buy">
        <img width="125px" height="100px" src="acer-nitro.png" alt="msiLaptop">
      </div>
    </div>
    <div class="card-data">
      <div class="card-title">
        <p>ACER Nitro</p>
      </div>
      <div class="card-price">
        <p>Subtotal: $${priceAcer.toFixed(2)}</p>
      </div>
      <div class="card-quantity">
        <i class="fa-solid fa-minus btn"></i>
        <p>${quantityAcer}</p>
        <i class="fa-solid fa-plus btn"></i>
        <i class="fa-solid fa-trash margin-left btn"></i>
      </div>
    </div>
  </article>
  `);
  localStorage.setItem("card-data", JSON.stringify(cardData));
}

function sumCarLenovo(){
  quantityLenovo++;
  sumCart = sumCart + priceLenovo;
  cartToBuy.push(``)
  localStorage.setItem("cartBuy", JSON.stringify(cartToBuy));
  localStorage.setItem("sum", JSON.stringify(sumCart));
  cardData.push(`
  <article class="data-laptop-card">
    <div class="card-image">
      <div class="cart-buy">
        <img width="125px" height="100px" src="lenovo-legion.png" alt="msiLaptop">
      </div>
    </div>
    <div class="card-data">
      <div class="card-title">
        <p>Lenovo Legion</p>
      </div>
      <div class="card-price">
        <p>Subtotal: $${priceLenovo.toFixed(2)}</p>
      </div>
      <div class="card-quantity">
        <i class="fa-solid fa-minus btn"></i>
        <p>${quantityLenovo}</p>
        <i class="fa-solid fa-plus btn"></i>
        <i class="fa-solid fa-trash margin-left btn"></i>
      </div>
    </div>
  </article>
  `);
  localStorage.setItem("card-data", JSON.stringify(cardData));
}