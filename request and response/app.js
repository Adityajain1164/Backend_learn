const http = require("http");
// //* we have to create server so we have to use createserver funciton of http but it take a funciton call back not a function
// function requestListener(req,rec){
//   console.log(rec);

// }
// http.createServer(requestListener)//* here we have to pass function by reference not by calling the funciton

// //* or we can give a anonamis funciton

// http.createServer(function(req,rec){
//   console.log(req);  // they both will work another way to write the above function
// })

//* this server funciton of http return a object and we have to listen it
// const server=http.createServer((req,res)=>{
//   console.log(req);
//   process.exit();  // to exit the server when ever you want

// })

//* if we want only one header then
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if(req.url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Home page</title></head>');
    res.write('<body><h1> Welcome to our company </h1></body>');
    res.write('</html>');
    return res.end();
  } else if(req.url==="/product "){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Product</title></head>');
    res.write('<body><h1> Buy our exlusive product </h1></body>');
    res.write('</html>');
    // res.end(); //* once we do end then the response is send to the client we can not write and set header so always use return function 
    return res.end();
  }
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title> complete coding</title></head>');
  res.write('<body><h1> I belive in myslef </h1></body>');
  res.write('</html>');
  res.end();

   
});

// server.listen(3000);
//* where 3000 is the port number
//* untill i dont give the request to the server it keep listining so go to localhost:3000 and then it will simily consloe log the complete the request
//* when ever you want to make changes to the server first you have to kill the server then start it agarin

//* if we want to know when server have start listining the we have a fancy way of above
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`the server is start on http://localhost:${PORT}/product`);
});

