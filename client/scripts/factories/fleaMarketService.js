//factory
myApp.factory('fleaMarketService', function() {

//class MarketItem {currentPrice, name, quanity, avePrice(), iniital price -> stretch}
//Create Parent Class
class FleaMarketItem {
    constructor ( name, quantity, initialPrice, currentPrice, averagePrice );
      this.name = name;
      this.quantity = quantity;
      this.intialPrice = initialPrice;
      this.currentPrice = currentPrice;
      this.averagePrice = averagePrice;
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
var electronicObject = {[ toaster, lamp, bluRayPlayer, clock]};
var fruitObject = {[ apple, orange, banana, grapes]};
var collectableObject = {[ comicBook, fancyStuffedAnimal, jewelry, wine]};

//updateBalance() -->add/subtract --> return accountBalance

  return {
    FleaMartetItem : FleaMarketItem,
    fruitObject : fruitObject,
    collectableObject : collectableObject,
    electronicObject : electronicObject,
    myBalance : myBalance
  };
});
