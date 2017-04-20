//factory
myApp.factory('fleaMarketService', function() {

//class MarketItem {currentPrice, name, quanity, avePrice(), iniital price -> stretch}
  //children (smallElec, fruits, collectables)

//updateBalance() -->add/subtract --> return accountBalance

let myBalance = {
  amount: 100
};

let buyFunc = (thisItem) => {
  if((myBalance - thisItem.currentPrice) > 0){
    myBalance = myBalance - thisItem.currentPrice;
    thisItem.avgArray.push(thisItem.currentPrice);
  }
  else{
    return false;
  }
};

let sellFunc = (thisItem) => {
  if((myBalance + thisItem.currentPrice) < 10){
    myBalance = myBalance + thisItem.currentPrice;
  }
  else{
    return false;
  }
};

  return {

  };
});
