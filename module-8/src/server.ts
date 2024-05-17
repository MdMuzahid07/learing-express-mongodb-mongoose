import mongoose from "mongoose";
import app from "./app";

const PORT = 5000;

// getting-started.js

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main();

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})