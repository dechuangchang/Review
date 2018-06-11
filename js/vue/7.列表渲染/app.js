
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue',
        ok:false,
        num:0,
        arr:'ABCDEFGHIGKLMN',
        json:{
            name:'cdc',
            age:'25',
            job:'F2E'
        }
    },
    methods: {
        ojbk:function(){
            this.num = Math.floor(Math.random()*14)
        }
    },
    computed: {
        
    },
    watch:{
        
    },
    beforeCreate: function (a, b, c) {
        console.log('beforeCreate')
    },//初始化之后
    created: function () {
        console.log('created')
        this.arr = this.arr.split('')
    },//初始化完成
    beforeMount: function (a, b, c) {
        console.log('beforeMount')
    },//挂载开始之前
    mounted: function (a, b, c) {
        console.log('mounted')
    },//挂载结束 mounted不会承诺所有的子组件也都一起被挂载




})

