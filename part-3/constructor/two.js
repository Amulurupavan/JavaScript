class Account{
    acc_Id;
    acc_Name;
    acc_bal;
    constructor(id,name,amount){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_bal=amount
    }
    open_Account(){
        console.log("Opened successfully")
    }
    deposit_Amount(amount){
        this.acc_bal=this.acc_bal+amount
    }
    withdrawl_amount(amount){
        this.acc_bal=this.acc_bal-amount
    }
    get_bal(){
        return this.acc_bal
    }
}

let a1=new Account(101,"Pavan",5000)
let a2=new Account(102,"Nani",15000)
console.log(a1)
console.log(a2)
a1.deposit_Amount(5000)
console.log(a1)
a2.deposit_Amount(5000)
console.log(a2)

a1.withdrawl_amount(750)
console.log(a1)
a2.withdrawl_amount(1500)
console.log(a2)