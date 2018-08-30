var bankAccount = {
    money: 3000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Flavio",
    bankAccount: bankAccount,
    hobbies: ["Drink", "Play Rock n Roll"]
};
myself.bankAccount.deposit(1500);
console.log(myself);
