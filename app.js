'use strict';
// Creating an array of all of the product image names
Product.names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can','wine-glass'];
// Creating an array with both names and images
// Product.names = [{name:'bag', image: 'bag.jpg'}, {name:'banana', image: 'banana.jpg'}, {name: 'bathroom', image: 'bathroom.jpg'}, {name:'boots',image:'boots.jpg'}, {name:'breakfast', image: 'breakast.jpg'}, {name:'bubblegum', image:'bubblegum.jpg'}, {name:'chair',image:'chair.jpg'}, {name:'cthulhu',image:'cthulhu.jpg'}, {name:'dog-duck',image:'dog-duck.jpg'}, {name:'dragon',image:'dragon.jpg'}, {name:'pen', image:'pen.jpg'}, {name:'pet-sweep', image:'pet-sweep.jpg'}, {name:'scissors',image:'scissors.jpg'}, {name:'shark', image:'shark.jpg'}, {name:'sweep', image:'sweep.jpg'}, {name:'tauntaun',image:'tauntaun.jpg'}, {name:'unicorn',image:'unicorn.jpg'}, {name:'usb', image:'usb.jpg'}, {name:'water-can',image:'water-can.jpg'},{name:'wine-glass',image:'wine-glass.jpg'}];
//Creating an object of the products
Product.all = [];
Product.container = document.getElementById('image_container');
Product.justViewed = [];
Product.pics = [document.getElementById('left'), document.getElementById('center'), document.getElementById('right')];
Product.tally = document.getElementById('tally');
Product.totalClicks = 0;
//Constructor function making the product objects and giving them tracking variables
//and pushing all of the object information into the array product.all
function Product(name) {
  this.name = name;
  this.path = 'img/' + name + '.jpg';
  this.votes = 0;
  this.views = 0;
  Product.all.push(this);
}
for(var i = 0; i < Product.names.length; i++) {
  new Product(Product.names[i]);
}

function makeRandom() {
  return Math.floor(Math.random() * Product.names.length);
}

function displayPics() {
  var currentlyShowing = [];
  //creates a left image and makes sure it isn't a repeat or shown in previous trio
  //of images
  currentlyShowing[0] = makeRandom();
  while (Product.justViewed.indexOf(currentlyShowing[0]) !== -1) {
    console.error('Left image just shown, or in previous trio!');
    currentlyShowing[0] = makeRandom();
  }
  //creates a center image and makes sure it isn't a repeat or shown in previous trio
  //of images
  currentlyShowing[1] = makeRandom();
  while(currentlyShowing[0] === currentlyShowing[1] || Product.justViewed.indexOf(currentlyShowing[1]) !== -1) {
    console.error('Center image just shown, or in previous trio!');
    currentlyShowing[1] = makeRandom();
  }
  //creates a right image and makes sure it isn't a repeat or shown in previous trio
  //of images
  currentlyShowing[2] = makeRandom();
  while(currentlyShowing[0] === currentlyShowing[2] || currentlyShowing[1] === currentlyShowing[2] || Product.justViewed.indexOf(currentlyShowing[2]) !== -1) {
    console.error('Right image just shown, or in previous trio!');
    currentlyShowing[2] = makeRandom();
  }
  // DOM Manipulation
  for(var i = 0; i < 3; i++) {
    Product.pics[i].src = Product.all[currentlyShowing[i]].path;
    Product.pics[i].id = Product.all[currentlyShowing[i]].name;
    Product.all[currentlyShowing[i]].views += 1;
    Product.justViewed[i] = currentlyShowing[i];
  }
}
//Event handle function to see what image is picked. If the iteration is greater
//than 24, it turns of the event listener so user can't generate another set of
//images

function handleClick(event) {
  console.log(Product.totalClicks, 'total clicks');
  if(Product.totalClicks > 24) {
    Product.container.removeEventListener('click', handleClick);
    showTally();
  }
  if (event.target.id === 'image_container') {
    return alert('Only click on images...not outside of them.');
  }
  Product.totalClicks += 1;
  for(var i = 0; i < Product.names.length; i++) {
    if(event.target.id === Product.all[i].name) {
      Product.all[i].votes += 1;
      console.log(event.target.id + ' has ' + Product.all[i].votes + ' votes in ' + Product.all[i].views + ' views');
    }
  }
  displayPics();
}
//Function to take the tally of clicks and add to the DOM
function showTally() {
  for(var i = 0; i < Product.all.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = Product.all[i].name + ' has ' + Product.all[i].votes + ' votes in ' + Product.all[i].views + ' views';
    Product.tally.appendChild(liEl);
  }
}
//Event listner to show next trio of product images upon the selection 'click' of preferred product
Product.container.addEventListener('click', handleClick);
displayPics();
