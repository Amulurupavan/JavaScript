class Account{
    acc_bal=0;
    deposit_Amount(amount){
        this.acc_bal=this.acc_bal+amount
    }
}
let a1=new Account()
a1.deposit_Amount(5000)
a1.deposit_Amount(2954832)
console.log(a1)

let a2=new Account()
a2.deposit_Amount(200)
console.log(a2)