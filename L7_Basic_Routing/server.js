const http = require('http');
let blogContent = [
    {
        "title": "First Blog Post",
        "description": "This is the first blog post.",
        "author": "Sarthak Jyoti Mishra",
        "date": "21 July 2025"
    }
]
const server = http.createServer((req,res)=>{
    if(req.method == "GET" && req.url === '/'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write('Welcome to the Home Page');
    }
    else {
        console.log("ERROR OCCURRED");
    }
})

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Exporting the server for testing purposes
module.exports = server;