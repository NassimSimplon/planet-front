const initialState ={
    product:[]
}
 const productReducer = (state = initialState,action)=>{
    const {type,payload} = action;
    switch(type){
        case "GET_PRODUCT_SUCCED":
            return{
                ...state,
                product:payload
            }
        
            case "ADD_PRODUCT_SUCCED":
                return{
                    ...state,
                    product:[...state.product, payload]
                }
            case "DELETE_PRODUCT_SUCCED":
                return{
                    ...state,
                    product:state.product.filter(el =>el.id !== payload)
                }

            default:
                return initialState;
    }
};
export default productReducer