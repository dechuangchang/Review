import {ADD,REE} from '../constants/index.js' 
export const add = (name,data)=>{
    return dispatch => {
        setTimeout(() => {
                dispatch({
                    type: ADD
                });
        }, 2000);
    }
}
export const ree = (name,data)=>{
    return{
        type:REE,
        name,
        data
    }
}