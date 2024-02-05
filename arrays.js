var arr = new Array();
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
let number = 0;
const addAndLog = function (number){
    number += 1;
}
console.log(number)

const processNumber = function(positiveFunction, number) {
  if (number % 2 === 0) {
    positiveFunction(number);
  } else {
    console.log("The number is odd");
  }
}

for (var i in arr){
    positiveFunction(addAndLog, arr[i]);
}
