import {ADD,REE} from '../constants/index.js' 
export const add = ()=>{
    return{
        type:ADD
    }
}
export const ree = (id)=>{
    return{
        type:REE
    }
}