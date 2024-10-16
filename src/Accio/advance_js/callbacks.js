//practice Execution Context
//callbacks
//scope

function abc(cb){
    let x = 2;
     
     console.log("Hey")
     if(x >= 2){
         if(typeof cb === 'function'){
             cb();
         }
     }
     console.log("Bye");
}
 function sayHello(){
     console.log("hello");
     }
 abc(sayHello);



 //-------xx-------xx----
//class
//scope

class View{
    
    constructor(x,y){
        this.x = x
        this.y = y
    }
    
    print(cb){
        if(typeof cb==='function'){
            cb(this.x,this.y)
        }else{
            console.log('Kindly pass function to print')
        }
    }
}

const v = new View(2,3)

function sum(a,b){
    console.log(a+b)
}
function mul(a,b){
    console.log(a*b)
}
function printValue(a,b){
    console.log(`X: ${a} Y: ${b}`)
}

v.print(sum)
v.print(mul)
v.print(printValue)
