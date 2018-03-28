块级作用域{
    let
        没有预解析，不存在变量提升
        不能重新定义变量，可以覆盖
        for循环（）是父级作用域的概念  在子级可以重新定义
    const
        常量
        不能重新定义变量，不可以覆盖
}

结构赋值
    ```
    let [a,b,c] = [1,2,3];
    console.log(a,b,c) //1 2 3

    let {a,b,c} = {
        a:1,
        b:2,
        c:3
    }
    console.log(a,b,c) // 1 2 3
    ```
    结构和格式要保持一致
    

    ```
    重新赋Key 
    let {a,b,c:e} = {
        a:1,
        b:2,
        c:3
    }
    console.log(a,b,c) //c is not defined
    console.log(a,b,e) // 1 2 3
    ```

    ```
    赋默认值
    let {a,b,c=3} = {
        a:1,
        b:2
    }
    console.log(a,b,c) // 1 2 3

    如果后端传入null  将会覆盖掉默认值
    *相当于默认值不会生效 因为null也是一个对象

    ```

    ```
    类似交换值
    let a = 1;
    let b = 2;
    [a,b]=[b,a]
    console.log(a,b)  // 2 1

    ```
    ```
    函数传参的形式运用解构赋值

    function fn({a,b=2}){
        console.log(a,b)  // 1 2
    }
    fn({
        a:1
    })
    ```

## 字符串

    ```
    字符串拼接
    es5 
    let a = 1;
    let b = 2;
    let str = '数字'+a+'+数字'+b+''

    es6 
    let str = `数字${a}+数字${b}`
    ```

    ```
    字符串查找

    es5 
    indexof()
    返回位置

    let str = 'abcdefg';
    str.includes(ab)
    返回值 true||false

    ```

    ```

    字符串是否以***开头
    let str = 'abcdefg';
    str.startsWith(***)
    返回值 true||false


    字符串是否以***结尾
    let str = 'abcdefg';
    str.endsWith(***)
    返回值 true||false

    ```

    ```
    重复字符串
    let str = 'abcdefg';
    str.repeat(5) //"abcdefgabcdefgabcdefgabcdefgabcdefg"
    值为0||大于0的数字
    为0的话返回空字符串
    ```

    ```
    填充字符串
    str.padStart(整个字符串的长度,填充的东西)  往前填充
    str.padEnd(整个字符串的长度,填充的东西)  往后填充
    let str = 'abcdefg';
    let padstr = '123'
    str.padEnd(str.length+padstr.length,padstr) //"abcdefg123"

    ```

## 函数 

    ```
    函数默认参数
    function fn(a=1,b=2){
        console.log(a,b)
    }
    fn() //1 2
    fn('','') // '' ''
    fn(3,4) ..3 4

    function fn({a=1,b=2}={a:3,b:4}){
        console.log(a,b)
    }
    fn() //3 4
    fn({}) //1 2
    ```
    
    ```
    function fn(a=18){
        let a = 101; //会报错  函数参数默认一已经定义  不能重新定义
        console.log(a)
    }
    fn() 
    ```

    ```
    rest（拓展）(剩余)运算符
     
    ...

    let arr = [1,2,3,4];
    console.log(arr) // [1, 2, 3, 4]
    console.log(...arr) // 1 2 3 4


    function fn(...a){
        console.log(a.sort()) // [1,2,3,4,5]
    }
    fn(4,2,3,1,5)


    function fn(a,b,c){
        console.log(a,b,c) //1 2 3
    }
    fn(...[1,2,3])


    function fn(a,b,...c){
        console.log(a,b,c) //4 2 [3, 1, 5]
    }
    fn(4,2,3,1,5)



    ```
#### 箭头函数

    ```
    es6
    let show = () => 1;
    
    es5
    function show(){
        return 1
    } 
    ```

    ```
    es6
    let show = (a,b) => a+b;
    
    es5
    function show(a,b){
        return a+b
    } 
    ```

    ```

    es6
    let show = (a=1,b=2) =>{
        console.log(a,b)
        return a+b
    };
    
    es5
    function show(a,b){
        console.log(a,b)
        return a+b
    } 
    ```
箭头函数需要注意的地方

    ```
    this指向问题
    let json = {
        id:1,
        show: function(){
            console.log(this.id)
        }
    };
    json.show() // 1

    let json = {
        id:1,
        show: function(){
            setTimeout(function(){
                console.log(this.id)  //this指向window
            },1000)
        }
    }
    json.show() // undefined

    let json = {
        id:1,
        show: function(){
            setTimeout(() => {
                console.log(this.id)  //this指向json
            },1000)
        }
    }
    json.show() // 1


    ```

    arguments的问题
    ```
    箭头函数没arguments

    let fn = ()=>{
        console.log(arguments)
    }
    fn(1,2,3) //arguments is not defined

    可以通过...运算符 来整合
    let fn = (...arguments)=>{
        console.log(arguments)
    }
    fn(1,2,3)
    ```
    ```
    箭头函数不能当作构造函数
    let fn = ()=>{
        this.name = 'a'
    }
    let info = new fn();
    info.name //fn is not a constructor
    ```
## 数组
    循环 
    for(let i = 0 ; i< 4 ; i++>){}

    while(true){}


    arr.forEach()
    没有返回值
    ```
      
    var arr =  [1,2,3,4,5,6]
    arr.forEach(function(item,index,arr){
        console.log(item,index,arr)
    })
    1 0  [1, 2, 3, 4, 5, 6]
    2 1  [1, 2, 3, 4, 5, 6]
    3 2  [1, 2, 3, 4, 5, 6]
    4 3  [1, 2, 3, 4, 5, 6]
    5 4  [1, 2, 3, 4, 5, 6]
    6 5  [1, 2, 3, 4, 5, 6]


    ```
    arr.map()
    arr.filter()
    arr.some()
    arr.every()
    和forEach()接收的参数一样。。。。。。
    他们接收两个参数
    第一个是每次循环的回掉
    第二个是this的指向 //默认window

    arr.map()
    有返回值
    ```
    let arr = [
        {
            name:1,
            age:2,
            it:true
        },
        {
            name:2,
            age:3,
            it:true
        },
        {
            name:4,
            age:5,
            it:true
        }
    ]
    var arr2 = arr.map((item,index)=>{
        console.log(item,index)
        return 1
    })
    arr2 //[1,1,1]

    需要配合return 返回一个新数组
    如果没有return 相当于forEach
    ```

    arr.filter() 过滤
    如果回掉函数返回true就会保留下来
    ```
    let arr = [1,2,3,4,5,7]
    let arr2 = arr.filter((item,index)=>{
        return item%2
    })
    arr2 // [1, 3, 5, 7]
    ```


    arr.some()
    类似查找的功能。。。 返回一个布尔值
    ```
    let arr = [1,2,3,4,5,7]
    let arr2 = arr.some((item,index)=> {
        return item == 4
    })
    arr2 // true
    ```
  
    arr.every()
    要所有回掉都返回true  才会返回true
    ```
    let arr = [1,3,5,7]
    let arr2 = arr.every((item,index)=> {
        return item%2 == 1
    })
    arr2 // true
    ```
-----------------------------------   
    arr.reduce()

    ```
    let arr = [1,2,3,4,5,6,7,8,9,10]
    arr.reduce((total,currentValue, index,arr)=>{
        return total+currentValue //55
    })
    // total	    必需。初始值, 或者计算结束后的返回值。
    // currentValue	必需。当前元素
    // currentIndex	可选。当前元素的索引
    // arr	        可选。当前元素所属的数组对象。
    ```
    arr.reduceRight()
    和reduce()计算方向相反

-----------------------------------------

    for of 循环
    ```
    let arr = [1,2,3,4,5,6,7,8,9,10]

    for(let i of arr){
        console.log(i)
    }

    for(let i of arr.keys()){
        console.log(i)
    } //keys() 数组的索引

    for(let item of arr.entries()){
        console.log(item)
    } //entries() 数组的某一项集合

    for(let [val,index] of arr.entries()){
        console.log(val,index)
    }
    ```
    Array.from()

    作用  把类数组转成数组
    因为类数组不能用数组的方法
    有length就可以转数组
    也可以用[...arr]

    Array.of() //整理成数组
    Array.of(123123,35,234,234,234)
    [123123, 35, 234, 234, 234]

    ```arr.find()
    let arr = [1,2,3,4,5,6,7,8,9,10]
    arr.find((item,index) =>{
        return item > 4
    })```
    返回 5 
    find()是return第一个符合条件的值
    如果没有找到返回undefined

    ```arr.findIndex()
    let arr = [1,2,3,4,5,6,7,8,9,10]
    arr.findIndex((item,index) =>{
        return item > 4
    })```
    返回 4
    findIndex()是return第一个符合条件的值的索引
    如果没有找到返回-1


    ```
    arr.fill(填充的内容，开始位置，结束位置) //填充默认值
    let arr = new Array(10)
    arr.fill('默认值')
    ["默认值", "默认值", "默认值", "默认值", "默认值", "默认值", "默认值", "默认值", "默认值", "默认值"]
    ```
    ```
    arr.includes() 查找 返回布尔值
    let arr = [1,2,3,4,5,6,7,8,9,10]
    arr.includes(2) true
    ```

## json
    对象简介语法

    ```
    let a = 1;
    let b = 2;

    let json ={
        a,
        b,
        c(){
            console.log(1)
        }
    }
    json.c() //1
    *json简写不要用箭头函数
    ```
#### Object.is()  
    比较两个值是否相等
    Object.is(1,2)
```        
    false
    Object.is(1,1)
    true
    Object.is(1,true)
    false
    Object.is(true,true)
    true
    Object.is(-0,0)
    false
    Object.is(null,1)
    false
```
#### Object.assign() 
     一般用于合并对象
    ```
    Object.assign({a:1},{a:2})  //返回{a: 2} key相同后面会覆盖前面
    Object.assign({a:1},{}) //返回{a: 1}  也可以复制对象
    Object.assign({a:1},{b:2},{c:3})  // 返回 {a: 1, b: 2, c: 3}
    ```

    es7引入
    Object.keys
    ```
    let json = {
        a:1,
        b:2,
        c:3
    }

    Object.keys(json) //["a", "b", "c"]


    for(key of keys(json)){
        console.log(key)  // a b c 
    }

    ```

    Object.entries
    ```
    Object.entries(json) // ["a", 1]["b", 2]["c", 3]
    for(item of Object.entries(json)){
        console.log(item) // 1 2 3
    }
    ```

    Object.values

    ```
    Object.values(json) // [1, 2, 3]
    for(val of values(json)){
        console.log(val) // 1 2 3
    }
    ```

    es7json也能用解构运算符了

    ```
    let {a,b,...c} = {a:1,b:2,c:3,d:4}
    console.log(a,b,c) //1 2 {c: 3, d: 4}


    ```

## Promise : 翻译：许诺 承诺
    解决异步回掉问题
    http://www.hangge.com/blog/cache/detail_1638.html
    ```
    new Promise(function(resolve,reject){
        //resolve 成功调用
        //reject  失败调用
    })
    ```

    ```
    then 方法就是把原来的回调写法分离出来，在异步操作执行完后，用链式调用的方式执行回调函数。
    let a = 1;
    let promise = new Promise(function(resolve,reject){
        if(a==10){
            resolve('成功')
        }else{
            reject('失败')
        }
    })
    promise.then(res=>{
        console.log(res)
    },err=>{
        console.log(err)
    })

    它可以和 then 的第二个参数一样，用来指定 reject 的回调
    promise.catch(err=>{
        console.log(err)
    })
    ```
    Promise.all([p1,p2,p3])  批量处理Promise对象
    all必须处理全部成功的Promise 否则报错
    ```
    let p1 = Promise.resolve('name');
    let p2 = Promise.resolve('sex');
    let p3 = Promise.resolve('age');
    Promise.all([p1,p2,p3]).then(res =>{
        let [p1,p2,p3] = res
        console.log(p1,p2,p3) //name sex age
    })
    ```

## 模块化  
   
    <script type='module'>
    
    </script>
    定义模块 export抛出
    引入模块 import引入
    
    取别名
    import {a as b} from './a,js';

    export default 抛出的不用{} 
    export 抛出的需要{}或as

    import() 动态引入  返回值是个Promise对象
    ```
    import 默认不能写到if之类的语法中
    Promise的方法
    import('./common/lib.js').then(res => {
        console.log(1)
    })

    Promise.all([
        improt('./*.*'),
        improt('./*.*')
    ]).then(([a,b])=>{
        console.log(a,b)
    })

    这样可以写到if中  路径也可以写成动态
    ```
    也可以结合ES7中的 async await

## ES6中的类
    class
    ```
    class Pa{
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
        showName(){
            console.log(this.name )
        }
        showAge(){
            console.log(this.age )
        }
    }
    let p1 = new Pa('a','12')
    p1.showName()
    p1.showAge()

    这种表达式的形式也是可以
    let Pa = class{
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
        showName(){
            console.log(this.name )
        }
        showAge(){
            console.log(this.age )
        }
    }
    let p1 = new Pa('a','12')
    p1.showName()
    p1.showAge()


    ```
    class里面取值get和存值 set
    感觉没什么用

    类身上的静态方法
    static  类直接调用的方法
    ```
    class Pa{
        constructor(name,age){
            
        }
        static showName(){
            console.log(1)
        }
    }

    Pa.showName()
    ```

    父子级继承
    extends
    ```
   class Pa{
        constructor(name){
            this.name = name
        }
        showName(){
            console.log(this.name)
        }
    }
    class Pac extends Pa{
        
        constructor(name,age){
            super(name);  // 获取父级定义的constructor
            this.age = age;
        }
        aAge(){
            console.log(this.age)
        }
        showName(){
            super.showName() // 触发父级的showName
            console.log(this.name)
        }
    }
    let p1 = new Pac('cdc','17')
    p1.aAge()
    ```
新增 数据类型
    symbol使用情况一般
    
    定义 
    let syt = Symbol('aaa'); //Symbol(aaa)
    console.log( typeof syt) //symbol
    S 大写  
    前面不可以加NEW 因为不是一个构造函数

    ```
    let syt = Symbol();

    let json = {
        a:1,
        b:2,
        [syt]:3
    }
    for(let key in json ){
        console.log(key) //a b
    }
    在forin的时候不会遍历Symbol()  可以用作私有数据
    ```

## generator   生成器  解决异步深度嵌套
```
function * generator(){
    yield 'a'
    yield 'b'
    yield 'c'
    return 'd';
}
let a = generator();
a.next(), //{value: "a", done: false}
a.next(), //{value: "b", done: false}
a.next(), //{value: "c", done: false}
a.next(), //{value: "d", done: true}
a.next(), //{value: undefined, done: true}
a.next()  //{value: undefined, done: true}

* 配合for of 
function * generator(){
    yield 'a'
    yield 'b'
    yield 'c'
    return 'd';
}
let a = generator();
for(let item of a){
    console.log(item) //a b c
}
不会遍历return

* 配合结构或者扩展运算符Array.from()
function * generator(){
    yield 'a'
    yield 'b'
    yield 'c'
    return 'd';
}

console.log([...generator()]) // ["a", "b", "c"]

let [a,b,c] = generator() 
console.log(a,b,c) //a b c

console.log(Array.from(generator())) //["a", "b", "c"]

```

### async
https://ke.qq.com/webcourse/index.html#course_id=274758&term_id=100324959&taid=1868306479067462&vid=s142438nwqs

```
async function fn() {
    let a =  await xxx 
    //await只存在于async
}

```


数据结构 
set
数据结构 类似数组 但是里面不能有重复值
可用for of遍历
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set
```
    let setArr =  new Set([1,2,3]);
    setArr.add('a') //添加
    setArr.delete(1) //删除
    console.log(setArr.has(2)) //查找有没有  返回布尔值
    console.log(setArr.size) //查看个数  和length差不多
    //setArr.clear() //清空

    console.log([...setArr][0])

    数组去重
    let arr = [1,2,5,4,5,4,3,6,4,3,2,2,3,1,2];
    let setArr =  new Set(arr);
    console.log([...setArr])
```
WeakSet
数据结构 类似数组 但是里面不能有重复值 和set方法一样
官方推荐set放数组 Weakset放json 没有size 也没clear
用add都可以添加进去  直接初始定义json就会报错

## map 
类似JSON

```
let map = new Map();
    let json = {
        a:1,
        b:2
    }
    
    map.set('a','aaa')//正常使用
    map.set(json,'aaa')
    console.log(map.get(json))
    console.log(map)
```
map.set('a','aaa') 设置一个值
map.get(json)  获取一个值
map.has(json) 查看有没有
map.clear()    删除所有
map.delete(json) 删除一个值

WeakMap key只能是对象

Set   里面是数组，不重复，没有key，没有get方法
Map 对json功能增强，key可以是任意类型值

数字数值的变化
    二进制
    ```
    let a = 0b010101;
    console.log(a)
    ```
    ```
    八进制
    let a = 0o01234567;
    console.log(a)
    ```

    ```
    let a = 12;
    Number.isFinite(a)
    判断是不是数字

    Number.isInteger(a)
    判断是不是整数

    Number.isSafeInteger()
    判断是不是安全数
    安全整数范围 -(2**53-1) ~ 2**53-1 
    Number.MAX_SAFE_INTEGER 最大的安全整数
    Number.MIN_SAFE_INTEGER 最小的安全整数
    ```
    Math.abs() 绝对值
    ...
    ES6新增
    ```
    Math.trunc() //截断
    let a = 1234.56789;
    console.log(Math.trunc(a)) //1234
    只保留整数部分 


    Math.sign(a) //查看正负数
    let a = 0;
    console.log(Math.sign(a))
    负数  返回  -1
    0     返回  0
    -0    返回  -0
    整数  返回  1
    其他值 返回 NAN


    Math.cbrt() 计算一个数的立方根
    console.log(Math.cbrt(27)) //3
    ```
proxy : 代理





