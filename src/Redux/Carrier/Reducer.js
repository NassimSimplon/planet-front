const initialState ={
    carrier:[]
}
 const carrierReducer = (state = initialState,action)=>{
    const {type,payload} = action;
    switch(type){
        case "GET_CARRIER_SUCCED":
            return{
                ...state,
                carrier:payload
            }
        
            case "ADD_CARRIER_SUCCED":
                return{
                    ...state,
                    carrier:[...state.carrier, payload]
                }
            case "DELETE_CARRIER_SUCCED":
                return{
                    ...state,
                    carrier:state.carrier.filter(el =>el.id !== payload)
                }

            default:
                return initialState;
    }
}
export default carrierReducer