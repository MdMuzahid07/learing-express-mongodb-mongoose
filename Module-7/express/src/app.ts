import express from "express";
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello world!, welcome to Developer World')
})

export default app;