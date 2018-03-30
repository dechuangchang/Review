import {ADD,REE} from '../constants/index.js' 
export const add = (name,data)=>{
    return{
        type:ADD,
        name,
        data
    }
}
export const ree = (name,data)=>{
    return{
        type:REE,
        name,
        data
    }
}