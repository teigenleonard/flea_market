//factory
myApp.factory('fleaMarketService', function() {

//class MarketItem {currentPrice, name, quanity, avePrice(), iniital price -> stretch}
  //children (smallElec, fruits, collectables)

//updateBalance() -->add/subtract --> return accountBalance


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
    currentPrice : currentPrice

  };
});
