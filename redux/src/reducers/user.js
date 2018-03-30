const initialState ={
    isFetching:false,
    err:null,
    user:{}
}
const email = (initialState={},action={})=>{
    switch (action.type) {
        case 'EMAIL':
        console.log(action)
            return {
                isFetching:false,
                err:null,
                email:action.data
            }
        
        default: return initialState
    }
}
export default email;
