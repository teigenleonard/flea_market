//factory
myApp.factory('fleaMarketService', function() {

//class MarketItem {currentPrice, name, quanity, avePrice(), iniital price -> stretch}
  //children (smallElec, fruits, collectables)

//updateBalance() -->add/subtract --> return accountBalance

let myBalance = {
  amount: 100
};

let buyFunc = (thisItem) => {
  myBalance = myBalance - thisItem.currentPrice;
};

let sellFunc = (thisItem) => {
  myBalance = myBalance - thisItem.currentPrice;
};

  return {

  };
});
