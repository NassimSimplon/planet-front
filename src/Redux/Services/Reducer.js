const initialState ={
    service:[]
}
 const serviceReducer = (state = initialState,action)=>{
    const {type,payload} = action;
    switch(type){
        case "GET_SERVICE_SUCCED":
            return{
                ...state,
                service:payload
            }
        
            case "ADD_SERVICE_SUCCED":
                return{
                    ...state,
                    service:[...state.service, payload]
                }
            case "DELETE_SERVICE_SUCCED":
                return{
                    ...state,
                    service:state.service.filter(el =>el.id !== payload)
                }

            default:
                return initialState;
    }
}
export default serviceReducer