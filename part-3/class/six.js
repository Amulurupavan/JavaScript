class Account{
    acc_bal=0;
    deposit_Amount(amount){
        this.acc_bal=this.acc_bal+amount
    }
    get_bal(){
        return this.acc_bal;
    }
    withdrawl_Amount(amount){
        this.acc_bal=this.acc_bal-amount
    }
}
let a1=new Account()
//a1.deposit_Amount(5000)
a1.deposit_Amount(2954832)
a1.get_bal()
console.log(a1)
a1.withdrawl_Amount(50000)
console.log(a1)

let a2=new Account()
a2.deposit_Amount(200)
console.log(a2.get_bal())

a2.withdrawl_Amount(150)
console.log(a2)
console.log(a2.get_bal())