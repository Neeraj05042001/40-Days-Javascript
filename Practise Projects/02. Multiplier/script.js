function multiplier(number) {
  return function (specifiedNumber) {
    
    
    return number * specifiedNumber;
    
  };
}

const multiply = multiplier(5)
console.log(multiply(3))
console.log(multiply(4))


function memoize(initialBalance){
 
    let balance = initialBalance;
    console.log(balance)
return {
    deposit: (deposit)=>{
        balance = balance + deposit
        console.log(balance)
    },
    withdrawl: (withdrawn)=>{
        balance = balance - withdrawn
        console.log(balance)
    }
}

}

const bank = memoize(400)
bank(bank.deposit(300))