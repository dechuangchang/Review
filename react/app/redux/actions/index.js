
import{INCREMENT,RECREMENT} from '../constants/index.js'
export const increment = (name)=>{
    return {  
        type:INCREMENT,
        name
    }
}
export const recrement = (name)=>{
    return {  
        type:RECREMENT,
        name
    }
}