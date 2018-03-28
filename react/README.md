
#可以通过三种方式创建React组件：
####无状态函数式组件
    ```
    function HelloComponent(props) {
        return <div> Hello {props.name} </div>;
    }

    ReactDOM.render(<HelloComponent name="root" />, document.getElementById('react-root')) 
    ```
    -------
####React.createClass
    createClass新版本已废除
    -------
####React.Component 推荐


    ```
    React.Component 有三种手动绑定方法：

    在构造函数中完成绑定
    调用时使用method.bind(this)来完成绑定
    使用arrow function 来绑定
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this); //构造函数中绑定
    }

    <div onClick={this.handleClick.bind(this)}></div> //使用bind来绑定

    <div onClick={()=>this.handleClick()}></div> //使用arrow function来绑定

    -----------------------
    class App extends Component{
        constructor(props){
            super(props);
            this.state={
                value:''
            }
        }
        change = (e) => {
            this.setState({
                value:e.target.value
            })
        }
        render(){
            return (
                <div>
                    <input onChange={this.change} vlaue={this.state.value}/>
                    <p>{`Hello ${this.state.value}`}</p>
                </div>
            )
        }
    }

    - React.Component创建的组件，其状态state是在construct中像初始化组件属性一样声明

    ```
#生命周期
    组件挂载阶段
    +ES6(React.Component)
        -constructor() //首先被调用，继承了React.Component，必须在其他语句前调用super(props)；否则this.props的值为undefined
        -componentWillMount() //在render()方法之前被调用不会触发重新渲染。
        -render() //render必须，并返回null、false 或者一个React Element。 返回 null false 不想渲染任何东西
        -componentDidMount() //将会在组件挂载之后被调用，在该方法中修改state将会触发重新渲染。
    更多查看https://github.com/Marco2333/react-demo/blob/master/demo/demo03%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md

#jsx
    命名
        文件名：使用大驼峰法，例如MyComponent.js； 
        组件命名：组件命名和文件名一致，如MyComponent.js里的组件名应该是MyComponent;一个目录的根组件使用index.js命名，以目录名称作为组件名称； 
        引用命名：React 组件使用大驼峰命名法，HTML 标签、组件实例使用小驼峰命名法；
#mockjs
    ```
        Mock.mock('http://123.com', {
            'name': "MarcoHan",
            'age|1-100': 100,
            'color': [1, 2, 3]
        });

        $.ajax({
            type: "GET",
            url: "http://123.com",
            dataType: "json"
        }).done(function(data, status, xhr) {
            console.log(data)
        });
    ```

#受控组件与非受控组件    
    个人理解：
    受控组件 用state实时控制
    非受控组件  用ref最后获取状态

# 父子组件通信

 父=>子 ref
 子=>父 props
