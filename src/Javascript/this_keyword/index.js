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
  title: "a",
  play() {
    console.log(this);
  },
};

//adding a method to the video object, stop is a method in a video object;
//*so here "this" refers to the video object; we're getting the same results as above.
video.stop = function () {
  console.log(this);
};

const videoTag = {
  title: "a",
  tags: ["a", "b", "c"],

  //here "showTag()" is a method but the callback function inside it is a regular function
  showTags() {
    this.tags.forEach(function (tag) {
      //*here "this" is referring to global space b'coz this is a callback function
      //*which is a regular function and it's not an method of "videoTag" object
      console.log(this, tag);
    });
  },
};

/*to solve the problem above we can use forEach method's arguments it take
two arguments: 1. callback function 2. object. so we're passing "this" which refers to "videoTag" object.*/
const videoTag2 = {
  title: "a",
  tags: ["a", "b", "c"],

  //here "showTag()" is a method but the callback function inside it is a regular function
  showTags() {
    //here in "showTags()" we're in execution context of "showTags()" method
    this.tags.forEach(
      function (tag) {
        console.log(this, tag);
      },
      //*here "this" is referring to the current object that is videoTag2 object,
      //b'coz we're not in the callback function
      this
    );
  },
};

// video.stop();
// videoTag.showTags();
videoTag2.showTags();
