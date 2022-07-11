/*
Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/




function checkCashRegister(price, cash, cid) {

  //calculate price and cash difference
  let priceCashDifference = priceCashDifference(price, cash);

  //get sorted cid
  //let sortedCid = sortedCid(cid);

  //calculate and return status change
  return statusChange(priceCashDifference, cid);

}


//calculate price and cash difference
function priceCashDifference(price, cash){
  return cash - price;
}



//get sorted cid
/*
function sortedCid(cid) {

  let sortedCid = [];

  

  return sortedCid;
}
*/


//calculate status change
function statusChange(priceCashDifference, cid){

  // "INSUFFICIENT_FUNDS" "CLOSED" "OPEN";

  //create object to be returned 
  let statusChange = {status: "", change: []};

  //create changing price cash difference variable
  let remainingPriceCashDifference = priceCashDifference;

  let change = [["PENNY", 0.0], ["NICKEL", 0.0], ["DIME", 0.0], ["QUARTER", 0.0], ["ONE", 0.0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];

  //calculate change 
  for(let i = (cid.length - 1); i >= 0; i--){

    let denominationName = cid[i][0];
    let denominationRemainingSum = cid[i][1];
    let denominationTotalChangeDue = 0;

    switch (denominationName) {
      case "ONE HUNDRED":

          var denominationUnitAmount = 100.0;
          
          while (remainingPriceCashDifference > denominationUnitAmount && denominationRemainingSum > 0){
            remainingPriceCashDifference -= denominationUnitAmount;
            denominationRemainingSum -= denominationUnitAmount;
            
            denominationTotalChangeDue += denominationUnitAmount;
          }

          cid[i][1] -= denominationTotalChangeDue;
          change[i][1] += denominationTotalChangeDue;

      case "TWENTY":
        var denominationUnitAmount = 20.0;
      case "TEN":
        var denominationUnitAmount = 10.0;
      case "FIVE":
        var denominationUnitAmount = 5.0;
      case "ONE":
        var denominationUnitAmount = 1.0 ;
      case "QUARTER":
        var denominationUnitAmount = 0.25;
      case "DIME":
        var denominationUnitAmount = 0.1;
      case "NICKEL":
        var denominationUnitAmount = 0.05;
      case "PENNY":       
        var denominationUnitAmount = 0.01;
    }
  }

  let remainingCidSum = 0;
  for( let i = 0; i < newCid.length; i++){
      remainingCidSum += cid[i][1];
    }
  

  return statusChange;
}


//calculate total change in drawar
function cidSum(cid){

  let cidSum = 0;

  for (let i = 0; i < cid.length; i++){
    cidSum += cid[i][1];
  }

  return cidSum
}



  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);