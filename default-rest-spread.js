function test(a, b=0) {
    console.log(a, b);
}

test(1, 2);
test(1);
// rest arguments : ... (spread operator)
function demo(a, b, ...c) {
    console.log(a, b, c);
}

demo(3, 4);
demo(3,4,5,6,7);

// number, string ^boolean : immutable by nature
// arrays & objects : mutable by nature
// spread operator is used to get immutable objects 

const product = { id: 100, name: 'test', price: 12999 }; // original ref

const cart = [
    { ...product }, // new ref
];
console.log(product);
console.log(cart);
cart[0].qty = 4;

console.log(cart);
console.log(product);

// always keep your object immutable 
// debugging issues
// data loss
// why immutable in js