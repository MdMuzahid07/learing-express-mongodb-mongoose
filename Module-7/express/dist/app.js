"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// parsers
app.use(express_1.default.json());
// create a simple middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname, res.location);
    next();
};
app.get('/', logger, (req, res) => {
    res.send('Hello world!, welcome to Developer World');
});
app.post("/", logger, (req, res) => {
    console.log(req.body);
    res.send("world is awesome");
});
exports.default = app;
