const initialState ={
    partenaire:[]
}
 const partenaireReducer = (state = initialState,action)=>{
    const {type,payload} = action;
    switch(type){
        case "GET_PARTENAIRE_SUCCED":
            return{
                ...state,
                partenaire:payload
            }
        case "GET_PARTENAIRE_BY_ID_SUCCED":
            return{
                ...state,
                partenaire:payload
            }
            case "ADD_PARTENAIRE_SUCCED":
                return{
                    ...state,
                    partenaire:[...state.partenaire, payload]
                }
            case "DELETE_PARTENAIRE_SUCCED":
                return{
                    ...state,
                    partenaire:state.partenaire.filter(el =>el._id !== payload)
                }

            default:
                return initialState;
    }
}
export default  partenaireReducer  