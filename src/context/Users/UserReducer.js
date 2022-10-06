import { axiosBackClient } from "../../settings/axiosConfig";
import { GET_USER, REMOVE_USER } from "../../type";


export default (state, action) => {
  switch(action.type){
    case GET_USER:
      return {
        ...state,
        userLogged: {
          name: action.payload.name,
          email: action.payload.email
        },
        auth: true
      }
    case REMOVE_USER:
      if(localStorage.getItem('ID')){
        localStorage.removeItem('ID')
      }
      delete axiosBackClient.defaults.headers.common['x-auth-token'];
      return {
        ...state,
        userLogged: {},
        auth: false
      }
  }
}