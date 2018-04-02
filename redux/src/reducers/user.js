
const email = (state={},action={})=>{
    // switch (action.type) {
    //     case 'EMAIL':
    //         return {
    //             isFetching:false,
    //             err:false,
    //             email:action.email
    //         }
    //     case 'GETSTATE':
    //         return {
    //             isFetching:true,
    //             err:false,
    //             email:{}
    //         } 
    //     case 'ERROR':
    //         return {
    //             isFetching:false,
    //             err:action.error,
    //             email:{}
    //         }           
        
    //     default: return initialState
    // }
    switch (action.type) {
        case 'LOAD_USER_PENDING':
            return {
                isFetching:true,
                err:false,
                email:{}
            }
        case 'LOAD_USER_FULFILLED':
            return {
                isFetching:false,
                err:false,
                email:action.payload.data.results[0].email
            }
        case 'LOAD_USER_REJECTED':
            return {
                isFetching:false,
                err:action.payload.response.data,
                email:{}
            }  
        
        default: return state
    }
   
}
export default email;
