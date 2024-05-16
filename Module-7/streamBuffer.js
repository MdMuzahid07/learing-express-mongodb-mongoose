const http = require('http');
const fs = require('fs');

// creating a server using row nodejs

const server = http.createServer();



// server listener

server.on("request", (req, res) => {
    if (req.url === "/read-file" && req.method === "GET");

    const readAble = fs.createReadStream("./mytext/read.txt");

    readAble.on("data", (buffer) => {
        res.statusCode = 200
        res.write(buffer)
    })

    readAble.on("end", () => {
        res.statusCode = 200
        res.end("your streaming is over")
    })

    readAble.on("error", (error) => {
        console.log(error);
        res.statusCode = 500
        res.end("something went wrong")
    })


    // stream file reading


});


server.listen(5000, () => {
    console.log("server listening pon port 5000");
})