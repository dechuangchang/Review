Vue.component('todo-item', {
    name: 'todo-item',
    props: ['todo','index'],
    template: '<li>todo{{todo}}key{{index}}</li>'
})
var app = new Vue({
    el: '#app',
    data: {
        message: '页面加载于 ' + new Date().toLocaleString(),
        seen: true,
        items: [
            {
                num: 1
            },
            {
                num: 2
            },
            {
                num: 3
            },
            {
                num: 4
            }
        ],
        form: {
            name: '123'
        }
    },
    methods: {
        reverse: function () {
            this.items = this.items.reverse()

        },
        iptChange: function (message, event) {
            console.log(message, event)
        }
    }
})

