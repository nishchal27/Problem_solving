/*problem with this approach is that we don't need dedicated methods for each objects we create
with this constructor function. This is not a efficient way to create a constructor function.
*/
function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  this.deposit = function (amount) {
    this.balance += amount;
  };

  this.withdraw = (amount) => {
    this.balance -= amount;
  };
}

//creating new object using BakAccount constructor
// const rakeshAccount = new BankAccount("Rakesh k", 1000);
// rakeshAccount.deposit(5000);

// console.log(rakeshAccount);

const accounts = [];

//add account form
const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");


//deposit form
const depositForm = document.querySelector("#depositForm");
const accountNumber = document.querySelector("#accountNumber");
const amount = document.querySelector("#amount");

accountForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const account = new BankAccount(customerName.value, +balance.value);
  accounts.push(account);

  console.log(accounts);
});

depositForm.addEventListener("submit", (event) =>{
  event.preventDefault();

  const account = accounts.find(
    (account) => account.accountNumber === +accountNumber.value
  );

  account.deposit(+amount.value);

  console.log('deposit ',accounts);
})


