
// console.log(__dirname)
// console.log(__filename)
// console.log(exports)
// console.log(module)
// console.log(require())
// setTimeout(()=>{
//     console.log(2)
// },2000)
// var {fun,add,num}  = require('./count');
// console.log(fun(10));
// console.log(add(10,10));
// console.log(num);

// const EventEmitter = require('events');
// class MyEmitter extends EventEmitter {}

// const fun1= new MyEmitter();
// const fun2= new MyEmitter();
// const fun3= new MyEmitter();

// let arr = [fun1,fun2,fun3];
// arr.forEach((item)=>{
//     item.on('event', msg => {
//         console.log(msg);
//     });
// })
// fun1.emit('event','fun1');
// fun2.emit('event','fun2');
// fun3.emit('event','fun3');

const fs = require('fs');

// console.log(fs.readFileSync('./readme.txt','UTF-8'))

// fs.writeFile('./readme.txt','123','UTF-8',(err)=>{
//     console.log(err)
// })

// fs.mkdir('js',function(){
//     fs.readFile('./readme.txt','UTF-8',function(err,data){
//         fs.writeFile('./js/readme2.txt',data,'UTF-8',()=>{
//             console.log('copy readme')
//         })
//     });
// })
const stream = require('stream');