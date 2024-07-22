function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  
    // this.deposit = function (amount) {
    //   this.balance += amount;
    // };
  
    // this.withdraw = (amount) => {
    //   this.balance -= amount;
    // };
  }

  const rakeshAccount = new BankAccount("Rakesh k");

  //prototype chaining
  BankAccount.prototype.deposit = function (amount) {
    //here we can't use arrow function, arrow functions points to the window object
    //by default so this method will not work.
    this.balance += amount;
  }

  /*now deposit method doesn't exist in rakeshAccount object but it works properly bcoz it exits in
  rakeshAccount's constructor function prototype
  */ 

  rakeshAccount.deposit(5000);

  console.log(rakeshAccount);