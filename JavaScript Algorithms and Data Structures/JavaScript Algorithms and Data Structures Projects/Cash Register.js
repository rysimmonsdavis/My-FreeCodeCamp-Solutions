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

  let change = [["PENNY", 0.0], ["NICKEL", 0.0], ["DIME", 0.0], ["QUARTER", 0.0], ["ONE", 0.0], ["FIVE", 0.0], ["TEN", 0.0], ["TWENTY", 0.0], ["ONE HUNDRED", 0.0]];

  let remainingChangeDue = cash - price;
  
  for(let i = (cid.length - 1); i >= 0; i--){
    
    let denominationName = cid[i][0];
    let remainingDenominationSum = cid[i][1];

    let totalDenominationChangeDue = 0;

    switch (denominationName) {
      case "ONE HUNDRED":
        var denominationUnitAmount = 100.0;
        calculateTotalDenominationChangeDueAndRemoveFromCidAndAddToChangeToReturn();
        break;
      case "TWENTY":
        var denominationUnitAmount = 20.0;
        calculateTotalDenominationChangeDueAndRemoveFromCidAndAddToChangeToReturn();
        break;
      case "TEN":
        var denominationUnitAmount = 10.0;
        calculateTotalDenominationChangeDueAndRemoveFromCidAndAddToChangeToReturn();
        break;
      case "FIVE":
        var denominationUnitAmount = 5.0;
        calculateTotalDenominationChangeDueAndRemoveFromCidAndAddToChangeToReturn();
        break;
      case "ONE":
        var denominationUnitAmount = 1.0;
        calculateTotalDenominationChangeDueAndRemoveFromCidAndAddToChangeToReturn();
        break;
      case "QUARTER":
        var denominationUnitAmount = 0.25;
        calculateTotalDenominationChangeDueAndRemoveFromCidAndAddToChangeToReturn();
        break;
      case "DIME":
        var denominationUnitAmount = 0.1;
        calculateTotalDenominationChangeDueAndRemoveFromCidAndAddToChangeToReturn();
        break;
      case "NICKEL":
        var denominationUnitAmount = 0.05;
        calculateTotalDenominationChangeDueAndRemoveFromCidAndAddToChangeToReturn();
        break;
      case "PENNY":       
        var denominationUnitAmount = 0.01;
        calculateTotalDenominationChangeDueAndRemoveFromCidAndAddToChangeToReturn();
        break;
    }

    function calculateTotalDenominationChangeDueAndRemoveFromCidAndAddToChangeToReturn(){
      console.log(remainingChangeDue)

      while (Math.round(remainingChangeDue * 100) / 100 >= denominationUnitAmount && remainingDenominationSum > 0){
        remainingChangeDue -= denominationUnitAmount;
        remainingDenominationSum -= denominationUnitAmount;
        totalDenominationChangeDue += denominationUnitAmount;
      }
      cid[i][1] -= Math.round(totalDenominationChangeDue  * 100) / 100;
      change[i][1] = Math.round(totalDenominationChangeDue  * 100) / 100;
    }
  }

  let remainingCidSum = 0;
  for(let i = 0; i < cid.length; i++){
    remainingCidSum += cid[i][1]
  }

  if(remainingChangeDue > 0){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if(remainingCidSum == 0){
    return {status: "CLOSED", change: change};
  } else {
    return {status: "OPEN", change: change};
  }
}

  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));