const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on("birthday", () => {
    console.log("You are welcome");
});

myEmitter.on("birthday", () => {
    console.log(", MD");
});


myEmitter.emit("birthday")