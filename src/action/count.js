import { TYPE_INCREAMENT_CUSTOM, TYPE_INCREAMENT_DEFAULT, TYPE_DECREAMENT_CUSTOM, TYPE_DECREAMENT_DEFAULT } from "./config_variables"

export const increament=(dispatch,val=null)=>{
    console.log("fetching....")
    if(val){
        dispatch({type:TYPE_INCREAMENT_CUSTOM,payload:{val}})
    }else
    dispatch({type:TYPE_INCREAMENT_DEFAULT})
}
export const decreament=(dispatch,val=null)=>{
    console.log("fetching decreament....")
    if(val){
        dispatch({type:TYPE_DECREAMENT_CUSTOM,payload:{val}})
    }else
    dispatch({type:TYPE_DECREAMENT_DEFAULT})
}
