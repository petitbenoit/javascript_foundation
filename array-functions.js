// for of loop
const nos = [1, 2, 3, 4, 5, 6];
for (let i=0; i<nos.length; i++) {
    console.log(i);
}

for (let n of nos){
    console.log(n);
}

//map
let square = [];
for (let n of nos) {
    square.push(n * n);
}
console.log(square, nos);

let square = nos.map(function(value, index, arr){
    console.log(value, index, arr);
    //return updated_value;
    return value * value;
});
console.log(square, nos);

let evenNos = nos.map(function (value, index, arr) {
    if (value % 2 === 0) {
      return value * value;
    }
  });
  console.log(evenNos);

  
  //filter
  let even = evenNos.filter(function (value, index, arr) {
    // return boolean;
    return value !== undefined;
  });
  console.log(even);
//no need to use a code block for single line statement
//single line statement itself acts as a return statement
let evn = nos
  .filter((val, index, arr) => val % 2 == 0)
  .map((val, index, arr) => val * val);

  console.log(evn);