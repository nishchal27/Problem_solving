//global space in javascript:
//simply anything that is not in a function is in global space. eg,

var a = 10; // global space

//here function b is also in global space.
function b(){
    var x =10; // local space
};

//accessing global space
console.log(window.a);
//this keyword by default refers to global space
console.log(this.a);
//js will by default search this "a" in global space
console.log(a);

// so this all are referring to the same memory location.