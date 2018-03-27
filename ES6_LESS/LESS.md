http://www.css88.com/doc/less/features/#variables-feature

# 变量
```
@master : rgb(238, 44, 109);
.a{
    border: 1px solid @master;
}
```
--------------
```
@kuandu : width;
<ul className='width'></ul>
.@{kuandu} {
    @{kuandu}:200px;
    list-style: none;
}
```
--------------
```
@logo   : 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/';
@logos  : '../img/';
body{
    background:@body url("@{logo}logo_top_ca79a146.png") no-repeat center;
    background:@body url("@{logos}u.jpg") no-repeat;
}
```
# 混合

不加括号,less会认为是css语法
加括号 less会认为你是一个mixin语法
```
无参数
.reset(){
    padding: 0px;
    margin: 0px ;
    list-style: none;
    text-decoration: none;
}// 混合集


//调用
div{
    .reset();
    //在调用的混合集后面追加 !important 关键字，可以使混合集里面的所有属性都继承
}

```
```
有参数
.border(@width,@style,@color){
    border: @width @style @color
}
div{
    .border( 1px,solid,@master);
}

设置默认值
.border(@width:1px,@style:solid,@color:#000){
    border: @width @style @color
}
```
# 模式匹配
```
.fl(left){
    float: left;
}
.fl(right){
    float: right;
}
div{
    .fl(left);//float: left;
}


封装三角
.triangle(@direction,@width:10px,@color:#333){
    width: 0px;
    height: 0px;
    display: inline-block;
    border: @width solid rgba(0, 0, 0, 0);
}
.triangle(top,@width:10px,@color:#333){
    border-top: @width solid @color;
}
.triangle(bottom,@width:10px,@color:#333){
    border-bottom: @width solid @color;
}
.triangle(left,@width:10px,@color:#333){
    border-left: @width solid @color;
}
.triangle(right,@width:10px,@color:#333){
    border-right: @width solid @color;
}
```
@arguments在mixins内部有特殊意义，调用mixin时，它包含所有传入的参数。

```
.border(@width:1px,@style:solid,@color:#000){
    border: @arguments;
}
div{
    .border( 1px,solid,@master);
}
```

# 运算
```
//数值可颜色都可以运算
.border(@width:1px,@style:solid,@color:#000){
    border: @arguments;
}
.border( 1px+99,solid,@master); //border: 100px solid #ee2c6d;
.border( (1px+99)/2,solid,@master/2); //border:50px solid #771637;
```

# 嵌套规则
a{
    b{
        c{

        }
    }
}

父级选择器
```
a{
    text-decoration: none;
    color: @header;
    &:hover{
        color: @master;
    }
}
等价于
body a:hover {
    color: #ee2c6d;
}

.conten{
    display: inline-block;
    margin-left: 20px ;
    &_ok {
        color: red;
    }
}
等价于
body .conten {
  display: inline-block;
  margin-left: 20px;
}
body .conten_ok {
  color: red;
}

```

条件混合
```
body{
    .compare(@width) when (@width>=1200) {
        background: red;
    }
    .compare(@width) when (@width<1200) {
        background: rgb(10, 204, 68);
    }
    .compare(1300px);


    // and
    .compare(@width,@height) when (@width>=1200) and (@height >= 300) {
        background: red;
    }
    
    .compare(300px,100px);

    // ， 或
    .compare(@width,@height) when (@width>=1200) , (@height >= 300) {
        background: red;
    }
   
    .compare(1300px,600px);

    // not  否定
    .compare(@width,@height) when not(@width=1200){
        background: rgb(10, 204, 68);
    }

}
```
（类型检查函数）
.mixin (@a; @b: 0) when (isnumber(@b)) { ... }
.mixin (@a; @b: black) when (iscolor(@b)) { ... }
iscolor
isnumber
isstring
iskeyword
isurl

# 循环结构

```
.loop(5);
.loop(@i) when(@i >= 1){
    .li_@{i} {
        background: #111*@i
    }
    .loop((@i - 1));
};


.generate-columns(4);
.generate-columns(@n, @i: 1) when (@i =< @n) {
    .li_@{i} {
        width: (@i * 100% / @n);
    }
    .generate-columns(@n, (@i + 1));
}
```
# 合并 Merge 
没用感觉。。。

# Import 导入
 +@import语句会通过Less依赖文件扩展名的方式区别对待不同的文件：
    -如果文件有一个.css扩展名，则将它作为CSS对象，同时@import语句保持不变（查看下面的inline选项）
    -如果有其他扩展名，则作为Less对象，然后导入它。
    -如果没有扩展名，则插入.less，然后将它作为Less文件导入包含进来。
```
@import "foo";      // foo.less is imported
@import "foo.less"; // foo.less is imported
@import "foo.php";  // foo.php imported as a less file
@import "foo.css";  // statement left in place, as-is
```

#Extend （扩展）
extend是一个Less伪类，它会合并它所在的选择其和它所匹配的引用。