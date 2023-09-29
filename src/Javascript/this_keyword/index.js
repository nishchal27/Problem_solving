//1. first tutorial of this keyword:

//global space in javascript:
//*simply anything that is not in a function is in global space. eg,

var a = 10; // global space

//here function b is also in global space.
function b() {
  var x = 10; // local space
}

//*accessing global space
// console.log(window.a);

//*this keyword by default refers to global space
// console.log(this.a);

//*js will by default search this "a" in global space
// console.log(a);

//* so this all are referring to the same memory location.
//!--xx--    --xx--     --xx--

//2. second tutorial of this keyword:-->

/* 1st case: "this keyword" refers to the object in which it is called.
"this" references the object that is executing the current function.
 if that function is an method in an object, then "this" refers to the object itself.*/

/* 2nd case: if that function is a regular function which means it is not part of an object, then "this" refers to the global object, which is
   the window object in browsers and global in node.*/

//examples for 1st case:
const video = {
    title: 'a',
    play() {
        console.log(this);
    },
};

//adding a method to the video object, stop is a method in a video object; 
//*so here "this" refers to the video object; we're getting the same results as above.
video.stop = function(){
    console.log(this);
};

video.stop();