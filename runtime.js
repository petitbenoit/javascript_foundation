console.log("app started");

// browser will remove this function from the stack and make it to run as a separate process
// which is managed by the browser
setTimeout(function() {
    console.log("some computation task execution"); // <- pushed back function into the stack done by browser itself
}, 0);


console.log("app finished");

// async code : managed by the browser
// sync code : can be executed only on the stack

// stack can run one functionality at a time (single threading)
// callbacks and async

// always run sync then => async


// sequence of execution 