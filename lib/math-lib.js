// inline export
export const add = (a, b) => console.log("SUM", a + b);

const sub = (a, b) => console.log("SUB", a - b);

const mul = (a, b) => console.log("MUL", a * b);

const div = (a, b) => console.log("DIV", a / b);


// anything defined within a module is scoped to the module (private)
// named exports

export { sub, mul };

// function test() {}
// const test = function () {}
// const test = () => {}