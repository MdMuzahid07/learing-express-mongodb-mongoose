import express, { NextFunction, Request, Response } from "express";
const app = express();
const port = 3000;

// parsers
app.use(express.json());



// create a simple middleware

const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method, req.hostname, res.location);

    next();
}

app.get('/', logger, (req: Request, res: Response) => {
    res.send('Hello world!, welcome to Developer World')
});


app.post("/", logger, (req: Request, res: Response) => {
    console.log(req.body);
    res.send("world is awesome");
})

export default app;