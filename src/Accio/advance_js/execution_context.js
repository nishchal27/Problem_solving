//Advance Level Question:
//practice

//Execution context
//this keyword binding
//scoping and scope chain
//hoisting

//run this in browser console for accurate answers.

var name = "Global";

var obj = { //hoisted
  name: "Object",
  getName: function() { //*invoking will lead to executing *maybe*
    console.log(this.name);
    
    function innerFunction() {
      console.log(this.name);
    }
    
    innerFunction(); //not have any access due to scoping. return undefined
    
    return function() {
      console.log(this.name);
    };
  }
};

var result = obj.getName(); //hoisted; invoked the func. and this leads to execution

result(); // 'object'


//--- intermediate level Q ---

var a = 10; //GEC

function outer() {
  console.log(a); // 1; due to shadowing Hoisting var a is undefined in the scope
                 // This happens because the local a shadows the global a
  
  var a = 20; //assignment of var a is happening here before this, it was only hoisted
  
  function inner() {
    console.log(a); // 2; prints: 20; we'll not see the Shadowing issue here
                     // beco'z a is not declared by var and not hoisted a is accessed
                     // from the outer() scope
    
    a = 30;
  }
  
  inner();
  
  console.log(a); // 3 prints: 30
}

outer();
console.log(a); // 4 prints: 10

