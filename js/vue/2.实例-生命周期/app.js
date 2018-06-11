
var app = new Vue({
    el: '#app',
    data: {
        a:'1'
    },
    methods: {
        
    },
    beforeCreate:function(a,b,c){
        console.log('beforeCreate')
        console.log(a,b,c)
        console.log(this.a)
    },//初始化之后
    created:function(a,b,c){
        console.log('created')
        console.log(a,b,c)
        console.log(this.a)
    },//初始化完成
    beforeMount:function(a,b,c){
        console.log('beforeMount')
        console.log(a,b,c)
    },//挂载开始之前
    mounted:function(a,b,c){
        console.log('mounted')
        console.log(a,b,c)
    },//挂载结束 mounted不会承诺所有的子组件也都一起被挂载


    beforeUpdate:function(a,b,c){
        console.log('beforeUpdate')
        console.log(a,b,c)
        console.log(this)
    },//数据已更新 DOM更新之前
    updated:function(a,b,c){
        console.log('updated')
        console.log(a,b,c)
        console.log(this)
    },//数据已更新 DOM更新之后
    activated:function(a,b,c){
        console.log('activated')
        console.log(a,b,c)
        
    },
    deactivated:function(a,b,c){
        console.log('deactivated')
        console.log(a,b,c)
    },
    beforeDestroy:function(a,b,c){
        console.log('beforeDestroy')
        console.log(a,b,c)
    },
    destroyed:function(a,b,c){
        console.log('destroyed')
        console.log(a,b,c)
    },
    errorCaptured:function(a,b,c){
        console.log('errorCaptured')
        console.log(a,b,c)
    },

})

