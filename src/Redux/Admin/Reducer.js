const initialState ={
    admin:[]
}
 const adminReducer = (state = initialState,action)=>{
    const {type,payload} = action;
    switch(type){
        case "GET_ADMIN_SUCCED":
            return{
                ...state,
                admin:payload
            }
        
            case "ADD_ADMIN_SUCCED":
                return{
                    ...state,
                    admin:[...state.admin, payload]
                }
            case "DELETE_ADMIN_SUCCED":
                return{
                    ...state,
                    admin:state.admin.filter(el =>el.id !== payload)
                }

            default:
                return initialState;
    }
};
export default adminReducer