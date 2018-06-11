
function windowPreventDefault(e){
    e.preventDefault();
}
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue',
        timer:0,
        arr:[],
    },
    methods: {
        add:function(msg,event){
            event.preventDefault()
            console.log(event.target.innerText)
            if(this.timer == 0 ){
                this.arr.push('start!')
                
            }else{
                let num = new Date().getTime() - this.timer
                this.arr.unshift(msg+num)
            }
            this.timer = new Date().getTime() ;
            
        
        },
        reverse:function(){
            this.arr.reverse()
            window.removeEventListener('contextmenu',windowPreventDefault)
            
        },
        keyup(e){
            console.log(e.keyCode)
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
        window.addEventListener('contextmenu',windowPreventDefault)
    },//初始化完成
    beforeMount: function (a, b, c) {
        console.log('beforeMount')
    },//挂载开始之前
    mounted: function (a, b, c) {
        console.log('mounted')
        
    },//挂载结束 mounted不会承诺所有的子组件也都一起被挂载




})

