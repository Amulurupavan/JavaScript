class Account{
    acc_Id;
    acc_Name;
    acc_bal;
    constructor(id,name,bal){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_bal=bal
    }
}

let a1=new Account(101,"Pavan",500)
let a2=new Account(102,"Nani",1000)
let a3=new Account(103,"Gana",1500)

console.log(a1)
console.log(a2)
console.log(a3)