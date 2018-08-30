type BankAccount = {money: number, deposit: (val: number) => void};

let bankAccount: BankAccount = {
    money: 3000,

    deposit(value: number): void {
        this.money += value;
    } 
};

let myself: {
    name: string, 
    bankAccount: BankAccount, 
    hobbies: string[]} = {
    
        name: "Flavio",
        bankAccount: bankAccount,
        hobbies: ["Drink", "Play Rock n Roll"] 
};

myself.bankAccount.deposit(1500);
console.log(myself);
