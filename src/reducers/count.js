import { TYPE_INCREAMENT_DEFAULT, TYPE_DECREAMENT_DEFAULT, TYPE_INCREAMENT_CUSTOM, TYPE_DECREAMENT_CUSTOM } from "../action/config_variables"

const initialState={
    count:0
}

export const CountReducer=(state=initialState,action)=>{
    switch(action.type){
        case TYPE_INCREAMENT_DEFAULT:
            return {...state,count:state.count+1}
        case TYPE_DECREAMENT_DEFAULT:
            return {...state,count:state.count-1}
        case TYPE_INCREAMENT_CUSTOM:
            console.log("Hii I am increament")
            return {...state,count:state.count+action.payload.val}
        case TYPE_DECREAMENT_CUSTOM:
            console.log("Hii I am decreament")
            return {...state,count:state.count-action.payload.val}
        default:
            return state
    }
}

