// 16. WRITE NODE.JS CODE TO CREATE SERVER AND DISPLAY YOUR NAME ON BROWSER.

const http = require("http");
const PORT = 8000 || process.env.PORT;

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(`<h1>Harshil</h1>`);
});

server.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});


