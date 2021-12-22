const initialState ={
    contact:[]
}
 const contactReducer = (state = initialState,action)=>{
    const {type,payload} = action;
    switch(type){
        case "GET_CONTACT_SUCCED":
            return{
                ...state,
                contact:payload
            }
        
            case "ADD_CONTACT_SUCCED":
                return{
                    ...state,
                    contact:[...state.contact, payload]
                }
            case "DELETE_CONTACT_SUCCED":
                return{
                    ...state,
                    contact:state.contact.filter(el =>el.id !== payload)
                }

            default:
                return initialState;
    }
}
export default contactReducer