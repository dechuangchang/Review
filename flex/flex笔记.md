
##   resize: both; 加上 overflow: auto; 
###  可以调整元素的大小 
flex.html

##   display: flex; 加上 margin: auto;  
###  实现上下左右剧中 
flex.html

###  display: flex;父元素下的直接子元素会变成 display:block; 孙子元素无影响 
flex_1.html

###  display: flex; 会消除margin重叠  会消除掉float 将float变成none 
flex_margin.html

#    如果你给一个元素添加display:flex; 称之为容器
#    容器里面的直接子元素，称为项目

#    主轴：在容器当中，项目默认按照从左向右的方向排列 这里的排列方向就是主轴方向，

#    交叉轴：交叉轴就是与主轴垂直的的那个轴  默认方向从上到下


# 设置主轴的方向（项目的排列方向）
+ flex-direction:  
    - row	           默认值。灵活的项目将水平显示，正如一个行一样。   左  ->  右
    - row-reverse	   与 row 相同，但是以相反的顺序。        左  <-  右
    - column	       灵活的项目将垂直显示，正如一个列一样。      上  ->  下
    - column-reverse   与 column 相同，但是以相反的顺序。 上  <-  下
    - initial	       设置该属性为它的默认值。请参阅 initial。
    - inherit	       从父元素继承该属性。请参阅 inherit。

flex_direction.html   
# 设置flex容器是单行或者多行，同时横轴的方向决定了新行堆叠的方向。
# 换行要注意主轴方向和顺序
+ flex-wrap:
    - nowrap	       默认值。 默认不换行 会压缩每个项目的宽度
    - wrap	           规定灵活的项目在必要的时候拆行或拆列。
    - wrap-reverse	   规定灵活的项目在必要的时候拆行或拆列，但是以相反的顺序。

flex_wrap.html 

# flex-wrap+flex-direction 的缩写
 flex-flow: flex-direction flex-wrap|initial|inherit;

# 设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。
+ justify-content: 
    - flex-start      默认值。项目位于容器的开头。 左对齐
    - flex-end        项目位于容器的结尾。右对齐
    - center          项目位于容器的中心。居中
    - space-between   项目位于各行之间留有空白的容器内。 第一个和最后一个项目 距离0
    - space-around    项目位于各行之前、之间、之后都留有空白的容器内。 第一个和最后一个项目0.5 第一个和最后一个项目 距离0.5
    - space-evenly    居中左右对齐 第一个和最后一个项目 距离1
    - initial         设置该属性为它的默认值。请参阅 initial。
    - inherit         从父元素继承该属性。请参阅 inherit。

justify_content.html
