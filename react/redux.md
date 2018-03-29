http://www.redux.org.cn/docs/api/createStore.html
首先要区分 store 和 state
 
 state 是应用的状态，一般本质上是一个普通对象
+store 是应用状态 state 的管理者，包含下列四个函数：

    -getState() # 获取整个 state
    -dispatch(action) # ※ 触发 state 改变的【唯一途径】※
    -subscribe(listener) # 您可以理解成是 DOM 中的 addEventListener
    -replaceReducer(nextReducer) # 一般在 Webpack Code-Splitting 按需加载的时候用
    
二者的关系是：state = store.getState()    



