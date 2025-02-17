const { write } = require('fs')
const http=require('http')

const server = http.createServer((req,res)=>{
    if (req.url==='/') {
    res.end('welcome to our home page')
    return;
    
}
    if (req.url ==='/about') {
    res.end("welcome to the about interface")
    return;

}   
    res.writeHead(404,{'content-type':'text/html'})
    res.end(`<h1> OOPS</h1>
    <p> we cant find the page you are looking for</p>
    <a href="/"> go back home</a>`)
})

server.listen(5000)

// web servers they hold the app waiting for a request to the server