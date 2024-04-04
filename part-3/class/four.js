class Account{
    min_bal=500;
    id=101;
    name="pavan";

open_Account(){
    console.log("Account opened successfully")
}
deposit_Amount(){
    console.log("Amount deposited successfully")
}
withdrawl_Amount(){
    console.log("Amount withdrawl successfully")
}
get_bal(){
    console.log("Insufficient balance")
}
}

let a1=new Account()
let a2=new Account()
console.log(a1)
console.log(a2)
a1.open_Account()
a1.deposit_Amount()
a1.withdrawl_Amount()
a1.get_bal()
a2.get_bal()