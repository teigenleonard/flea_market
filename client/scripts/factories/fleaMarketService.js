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

  return {

  };
});
