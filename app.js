const productDisplay = document.getElementById("product-display");
const cartDisplay = document.getElementById("cart-display");
const amountDisplay = document.getElementById("total-amount");
const cart = document.getElementById("cart");

const products = [
  {
    id: 1,
    img: "./assets/item1.jpg",
    title: "Ramen Sandwich",
    price: 3.99,
    stock: 4,
    discount: true,
  },
  {
    id: 2,
    img: "./assets/item2.jpg",
    title: "Hair Cake",
    price: 2.45,
    stock: 2,
    discount: true,
  },
  {
    id: 3,
    img: "./assets/item3.jpg",
    title: "Organic Ice Cream",
    price: 19.99,
    stock: 3,
    discount: true,
  },
  {
    id: 4,
    img: "./assets/item4.jpg",
    title: "Foot Steak",
    price: 8.79,
    stock: 0,
    discount: true,
  },
  {
    id: 5,
    img: "./assets/item5.jpg",
    title: "Fish Bananas",
    price: 6.99,
    stock: 4,
    discount: true,
  },
  {
    id: 6,
    img: "./assets/item6.jpg",
    title: "Fried Cigeratte",
    price: 2.79,
    stock: 5,
    discount: true,
  },
  {
    id: 7,
    img: "./assets/item7.jpg",
    title: "Green Pizza",
    price: 4.99,
    stock: 6,
    discount: true,
  },
  {
    id: 8,
    img: "./assets/item8.jpg",
    title: "Sink Juice",
    price: 0.99,
    stock: 2,
    discount: true,
  },
  {
    id: 9,
    img: "./assets/item9.jpg",
    title: "Chess Speghtti",
    price: 5.99,
    stock: 5,
    discount: true,
  },
];

let basket = [];

function renderProduct() {
  products.forEach((product) => {
    productDisplay.innerHTML += `
        <div onclick="addToCart(${product.id})" class="item">
            <div class="overlay">
            </div>
            <div class="thumbnail">
              <img
                class="thumbnail-img"
                src=${product.img}
                alt="picture"
              />
            </div>
            <div class="info">
              <div class="title">${product.title}</div>
              <div class="price-display">
                <div>Price:</div>
                <div>${product.price}</div>
              </div>
              
              </div>
            </div>
          </div>`;
  });
}

function addToCart(id) {
  const selectedItem = products.find((product) => product.id === id);
  const search = basket.find((item) => item.id === id);
  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      img: selectedItem.img,
      title: selectedItem.title,
      price: selectedItem.price,
      quantity: 1,
    });
  } else {
    search.quantity += 1;
  }

  updateCart();
}

function updateCart() {
  console.log(basket)
  renderCartItems(); 
  renderTotal();
}

function renderCartItems() {
  cart.innerHTML = "";
  basket.forEach((item) => {
    cart.innerHTML += `<li id="${item.id}" class="item__">
            <div class="cart-item">
              <div class="cart-content">
                <div class="thumbnail-sm">
                  <img class="thumbnail-sm-img" src=${item.img} />
                </div>
                <div class="cart-right">
                  <div class="cart-item-name">${item.title}</div>
                  <div class="cart-calc">
                    <i onclick="cartItemDecrease(${item.id})" class="item-minus fas fa-minus-circle"></i> ${item.quantity}
                    <i onclick="cartItemIncrease(${item.id})" class="item-plus fas fa-plus-circle"></i>
                  </div>
                </div>
              </div>
            </div>
          </li> 
        `;
  });
}

function cartItemDecrease(id) {
  let search = basket.find((x) => x.id === id);

  if (search.quantity >= 1) {
    search.quantity--;
    updateCart();
  } else if (search.quantity < 1 ) {
    basket = basket.filter((x) => x.quantity > 0);
    updateCart();
  }
}

function cartItemIncrease(id) {
  let search = basket.find((x) => x.id === id);

  if (search) {
    search.quantity++;
    updateCart();
  }
}

function renderTotal() {
  const priceDisplay = document.getElementById("total-price")
  let totalPrice = 0;
  let totalItems = 0;
  basket.forEach((item) => {
    totalItems += item.quantity;
    totalPrice += item.price * item.quantity;
    totalPrice.toFixed(3);
  });

  amountDisplay.innerHTML = `${totalItems}`;
  priceDisplay.innerHTML = `${totalPrice}`
}

renderProduct();

//           <div class="item">
//           <div class="overlay">
//             <div>

//             </div>
//           </div>
//           <div class="thumbnail">
//             <img
//               class="thumbnail-img"
//               src=${img}
//               alt="picture"
//             />
//           </div>
//           <div class="info">
//             <div class="title">${title}</div>
//             <div class="price-display">
//               <div>Price:</div>
//               <div>${price}</div>
//             </div>
//             <div class="item-calc">
//             <i onclick="itemDecrease(${id})" class="item-minus fas fa-minus-circle"></i>
//             <div id=${id} class="quantity">${
//     search.item === undefined ? 0 : search.item
//   }</div>
//             <i onclick="itemIncrease(${id})" class="item-plus fas fa-plus-circle"></i>

//             </div>
//           </div>
//         </div>`;
