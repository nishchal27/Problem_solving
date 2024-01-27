function numberGenerator() {
    // Local “free” variable that ends up within the closure
    var num = 1;

    //"checkNumber" is a closure
    function checkNumber() { 
      console.log("num: ",num);
    }
    num++;
    return checkNumber;
  }
  
  var number = numberGenerator();
  number(); // 2