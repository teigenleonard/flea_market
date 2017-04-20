//*quanity ->sub from total quanity
//avgPrice() -->[keeps track of price bought at], returns avg price
//currentPrice
//updateBalance() send se;; function to chris

myApp.controller('SellController', ['fleaMarketService', function(fleaMarketService) {
console.log("sourced for Sell!");
var sell = this;

sell.sellItem = function(item) {
  console.log("In Sell Controller");
  // item.quantity -= item.quanity;
  // item.currentPrice = item.currentPrice;
  // return item;

};

sell.fruitObject = fleaMarketService.fruitObject;
sell.electronicObject = fleaMarketService.electronicObject;
sell.collectableObject = fleaMarketService.collectableObject;

console.log(sell.fruitObject);


//need Class from factory

}]);
