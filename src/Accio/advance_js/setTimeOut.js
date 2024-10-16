//this keyword
//callbacks
//this with arrow
//call()

var status = 'Hello';

setTimeout(() => {
  const status = 'Hey';

  const data = {
    status: 'Bye',
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus());
  console.log(data.getStatus.call(this));
}, 0);
