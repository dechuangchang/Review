const counter  = (state=10,action={}) =>{
    console.log(action)
    switch (action.type) {
        case 'INCREMENT':
            return state+1;
        case 'RECREMENT':
            return state-1;    
        default: return state;
    }
}
export default counter