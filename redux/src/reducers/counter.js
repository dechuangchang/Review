const counter = (state=10,action={})=>{
    //action 数据来源就是action里面定义函数return
    switch (action.type) {
        case 'ADD':
            return state+1
        case 'REE':
            return state-1
       
        default: return state
    }
}
export default counter;
