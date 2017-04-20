//factory
myApp.factory('fleaMarketService', function() {

//class MarketItem {currentPrice, name, quanity, avePrice(), iniital price -> stretch}
  //children (smallElec, fruits, collectables)

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
    currentPrice : currentPrice

  };
});
