'User Strict';
// Things to do
// 1. Create an array to store the pictures of products

// 2. Make a product object
Products.allProducts = [];
function Products(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  Products.allProducts.push(this);

}
// 3. Make new instances of the product object using a constructor function
new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');

// 4. Create a listener function to click on the product image of choice
var imgEl = document.getElementById('products');

imgEl.addEventListener('click',genran);
// 5. Figure a way to display 3 random pictures at a time

// This code just lets me know I can calculate 20 random numbers through a loop
// var rannum = Math.floor(Math.random() * 20);
// for (i = 0; i < 20; i++) {
//   var rannum = Math.floor(Math.random(i) * 20);
//   console.log(rannum);
// };

for (i = 0; i < 3; i++) {
  var pic = genran();
  console.log(pic);
  imgEl.src = Products.allProducts[pic].filepath;

};

function genran() {
  return Math.floor(Math.random() * Products.allProducts.length);

};
genran();

/* generate code to make sure 3 random #'s not equal to each other */
