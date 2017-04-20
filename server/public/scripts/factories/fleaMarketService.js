//factory
myApp.factory('fleaMarketService', function() {

//class MarketItem {currentPrice, name, quanity, avePrice(), iniital price -> stretch}
//Create Parent Class
class FleaMarketItem {
    constructor ( name, quantity, initialPrice, currentPrice, averagePrice ){
      this.name = name;
      this.quantity = quantity;
      this.intialPrice = initialPrice;
      this.currentPrice = currentPrice;
      this.averagePrice = averagePrice;
    };
}
  //children (smallElec, fruits, collectables)
// Create Electronic Child
class Electronic extends FleaMarketItem {
    constructor ( name, quantity, initialPrice, currentPrice, averagePrice ) {
      super ( name, quantity, initialPrice, currentPrice, averagePrice );
    }
}
// Create Fruit Child
class Fruit extends FleaMarketItem {
    constructor ( name, quantity, initialPrice, currentPrice , averagePrice) {
      super ( name, quantity, initialPrice, currentPrice, averagePrice );
    }
}
// Create Collectable Child
class Collectable extends FleaMarketItem {
    constructor ( name, quantity, initialPrice, currentPrice, averagePrice ) {
      super ( name, quantity, initialPrice, currentPrice, averagePrice );
    }
}
// Electronic Children
var toaster = new Electronic('Toaster', 0, 6.43, 0);
var lamp = new Electronic('Lamp', 0, 5.23, 0);
var bluRayPlayer = new Electronic('Blu Ray Player', 0, 8.15, 0);
var clock = new Electronic('Clock', 0, 4.44, 0);

// Fruit Children
var apple = new Fruit('Apple', 0, 0.45, 0);
var orange = new Fruit('Orange', 0, 1.22, 0);
var banana = new Fruit('Banana', 0, 8.88, 0);
var grapes = new Fruit('Grapes', 0, 3.32, 0);

// Collectable Children
var comicBook = new Collectable('Comic Books', 0, 3.41, 0);
var fancyStuffedAnimal = new Collectable('Fancy Stuffed Animals', 0, 5.46, 0);
var jewelry = new Collectable('Jewelry', 0, 7.55, 0);
var wine = new Collectable('Wine', 0, 6.56, 0);

//
var electronicObject = {
  item : [ toaster, lamp, bluRayPlayer, clock]};
var fruitObject = {
  item: [ apple, orange, banana, grapes]};
var collectableObject = {
  item: [ comicBook, fancyStuffedAnimal, jewelry, wine]};

//updateBalance() -->add/subtract --> return accountBalance

let myBalance = {
  amount: 100
};

let buyFunc = (thisItem) => {
  if((myBalance.amount - thisItem.currentPrice) > 0){
    myBalance.amount = myBalance.amount - thisItem.currentPrice;
    thisItem.avgArray.push(thisItem.currentPrice);
  }
  else{
    return false;
  }
};

let averagingFunc = (thisItem) => {
  let sum = 0;
  for( var i = 0; i < thisItem.avgArray; i++ ){
      sum += parseInt( thisItem.avgArray[i], 10 );
  }
  var avg = sum/thisItem.avgArray.length;
};

let sellFunc = (thisItem) => {
  if((myBalance.amount + thisItem.currentPrice) < 10){
    myBalance.amount = myBalance.amount + thisItem.currentPrice;
  }
  else{
    return false;
  }
};

//adjPrice
var currentPrice = 1.35;

var setTimer = setInterval(adjPrice(currentPrice), 15000);

function adjPrice(currentPrice){
  var max = 0.5;
  var min = -0.5;
  currentPrice = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(currentPrice);
  return currentPrice;
};

adjPrice(currentPrice);

  return {
    FleaMartetItem : FleaMarketItem,
    fruitObject : fruitObject,
    collectableObject : collectableObject,
    electronicObject : electronicObject,
    myBalance : myBalance,
    currentPrice : currentPrice
  };
});
