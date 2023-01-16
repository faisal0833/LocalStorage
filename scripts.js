const productForm = document.getElementById("add-product");
const allProductDiv = document.getElementById("all-product");
const productNameInput = document.getElementById("product-name");
const productImageInput = document.getElementById("product-image");
const productPriceInput = document.getElementById("product-price");
const productTextInput = document.getElementById("product-text");

const products = JSON.parse(localStorage.getItem("lsProducts")) || [];

// Add Product
const addProduct = (nameValue, imageValue, priceValue, textValue) => {
  products.push({
    Image: imageValue,
    price: priceValue,
    name: nameValue,
    text: textValue,
  });
  // Add Product localstorage
  localStorage.setItem("lsProducts", JSON.stringify(products));
};

// Create Element
const createElement = (nameValue, imageValue, priceValue, textValue) => {
  // Create Col
  const productCol = document.createElement("div");
  productCol.classList.add("col-lg-3");

  // Create Single Product Div
  const productDiv = document.createElement("div");
  productDiv.classList.add("single-product");

  // Create Single Product Image
  const productImage = document.createElement("img");
  productImage.setAttribute("src", imageValue);

  // Create Single Product h5
  const productPrice = document.createElement("h5");
  productPrice.innerText = priceValue;

  // Create Single Product Name
  const productName = document.createElement("h3");
  productName.innerText = nameValue;

  // Create Single Product Text
  const productText = document.createElement("p");
  productText.innerText = textValue;

  // Complete Single Product
  productDiv.append(productImage, productPrice, productName, productText);

  // Complete Col
  productCol.appendChild(productDiv);

  // Complete First Task
  allProductDiv.appendChild(productCol);
};

// Main Click Function
productForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const nameValue = productNameInput.value;
  const imageValue = productImageInput.value;
  const priceValue = productPriceInput.value;
  const textValue = productTextInput.value;

  // Task 1
  createElement(nameValue, imageValue, priceValue, textValue);

  // Task 2
  addProduct(nameValue, imageValue, priceValue, textValue);
});

// Show Product From local Storage
products.forEach((product) => {
  createElement(
    product["name"],
    product["image"],
    product["price"],
    product["text"]
  );
});
