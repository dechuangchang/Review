
import{INCREMENT,RECREMENT} from '../constants/index.js'
export const increment = ()=>{
    return {  
        type:INCREMENT
    }
}
export const recrement = ()=>{
    return {  
        type:RECREMENT
    }
}