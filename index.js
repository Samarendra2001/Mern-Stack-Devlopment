const lib = require('./lib.js')
const express = require('express');
const fs = require('fs');//requiring file sysytem module
const t1 = performance.now()
const txt = fs.readFileSync('demo.txt','utf-8')//it will read the file synchronously
console.log(txt);
 /* fs.readFile('demo.txt','utf-8',(err,txt)=>{
    console.log(txt); 
 }) */
 // const t1 = performance.now()  this is for time like how much time is taking
//console.log(lib)
console.log(lib.sum(4,5),lib.diff(8,2))
const t2 = performance.now()
console.log(t2-t1);// this will give u the time differenece b/w those two codes
//console.log('hello ')

const server = express();
server.listen(8080);




// here utf-8 is for encoding bcz when u call  readfile it'll give some buffer file so 
//to get in text we need to encode it 
// and that (err,txt) = In node , for callback funcn there is that default err.



// import {sum,diff} from './lib.js';
// const fs = require('fs');

// const t1 = performance.now();

// const txt = fs.readFileSync('demo.txt','utf-8');

// fs.readFile('demo.txt','utf-8',(err, txt)=>{
//    console.log(txt)
// });

// console.log(txt);

// console.log(lib.sum(4,5),lib.diff(3,6))
// const t2 = performance.now();
// console.log(t2-t1);
// const a = 5;

