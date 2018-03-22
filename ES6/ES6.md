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


    


