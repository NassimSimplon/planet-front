

const inisialState = {
  token: {
    _id: "",

    adminNom: "",
    adminPrenom: "",

    adminEmail: "",
  },
    authenticate: false,
    authenticating: false,
  };
  
   const signInReducer = (state = inisialState, action) => {
    switch (action.type) {
          case " LOGIN_FAILED":
            state = {
              ...state,
              authenticating: false,
            };
            break;
      case "LOGIN_SUCCESS":
        state = {
          ...state,
  
          token: action.payload.token,
          authenticate: true,
        };
  
        break;
  
      case "LOGOUT_SUCCESS":
        state = {
          ...inisialState,
        };
        break;
  
      default:
    }
  
    return state;
  };

  export default signInReducer