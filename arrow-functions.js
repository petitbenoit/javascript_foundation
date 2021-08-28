// function fun_name() : named function
// function(): unnamed /anonymous function
// () => expression ( => : arrow operator)


const person = {
    name: "test",
    age: 12,
    greeting: function () {
        setTimeout( function() {
            console.log("hello from", this.name);
        }, 1000);
    },
};

person.greeting();
person.name='demo';
person.greeting();