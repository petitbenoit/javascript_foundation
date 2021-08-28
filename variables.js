// var 
// scope of variable i is belonging to the for loop : no of mem alloc for i is 1
// let & const : block scope variable : ES6 [BLOCK LEVEL VARIABLES]

// scope management change respect to the variable var -> let
for (let i = 0; i < 10; i++) {
    // each iteration can be considered to be as a single block
    setTimeout(function () {
      console.log("computation task", i);
    }, i * 1000);
}
    
// const : read only variable

// once the value is set it cannot be changed

const a = 10;
a = 20;