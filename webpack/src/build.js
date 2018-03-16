import css from './assets/css/index.css';
document.getElementById('title').innerHTML='Hello webpack!!!';
var url = require('./assets/img/img2/3_wzs_xyz.jpg');
document.getElementById('title2').innerHTML='<img src='+url+' />'
const json = require('./json.json');
document.getElementById('json').innerHTML = json.name;

$('#json').html(json.name+'ggggggggg')
import add from  './add.js';
console.log(add(1,2))