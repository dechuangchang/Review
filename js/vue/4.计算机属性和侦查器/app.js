
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue',
        question:null,
    },
    methods: {
    },
    computed: {
        reversedMessage: function () {
            console.log(this.message)
            return this.message.split('').reverse().join('')
        },
        now: function () {
            console.log(this.message+'???')
            return this.message+'???'
        },
        set: function (newValue) {
            
            this.message = 'mlk'
          }
    },
    watch:{
        question:function(newQuestion, oldQuestion){
            console.log(newQuestion, oldQuestion)
            return false
        }
    },
    beforeCreate: function (a, b, c) {
        console.log('beforeCreate')
    },//初始化之后
    created: function (a, b, c) {
        console.log('created')
    },//初始化完成
    beforeMount: function (a, b, c) {
        console.log('beforeMount')
    },//挂载开始之前
    mounted: function (a, b, c) {
        console.log('mounted')
    },//挂载结束 mounted不会承诺所有的子组件也都一起被挂载




})

