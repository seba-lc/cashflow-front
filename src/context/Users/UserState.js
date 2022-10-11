import { useReducer } from "react";
import { axiosBackClient } from "../../settings/axiosConfig";
import { GET_USER, REMOVE_USER } from "../../type";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";

const UserState = ({ children }) => {
  const initialState = {
    userLogged: {},
    auth: false
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);
  /*
  EXPLICACION:
  Estoy haciendo desestructuring al return de una funcion de react, que por supuesto me esta retornando un array. El primer termino de ese
  array es el estado, y el segundo termino es una funcion que modifica ese estado. En el useReducer (la funcion de react) en el primer
  termino va la funcion que definimos en el reducer del contexto, y en el segundo termino defino el estado inicial.
  La funcion definida en el reducer es simplemente una que recibe un estado, y le genera una accion (action) que al parecer se define en
  el State del contexto
  */

  const login = async (data) => {
    let errors = {};
    try {
      const response = await axiosBackClient.post('/users', data);
      //el backend me devuelve: id, name, user
      if(response.status === 200){
        localStorage.setItem('ID', response.data.id);
        axiosBackClient.defaults.headers.common['x-auth-token'] = response.data.id;
        delete response.data.id; //Borro el id del objeto que me manda el backend
        dispatch({
          type: GET_USER,
          payload: response.data
        });
        return errors; //lo devuelve vacio
      }else if(response.status === 201 || response.status === 202){
        errors.data = 'Incorrect Credentials';
        dispatch({
          type: REMOVE_USER
        })
        return errors; //lo devuelve cargado
      }
    } catch (error) {
      console.log(error);
      errors.fail = 'Fail, try again';
      dispatch({
        type: REMOVE_USER
      });
      return errors;
    }
  }

  const logout = () => {
    dispatch({
      type: REMOVE_USER
    })
  }

  const getAuth = async () => {
    let errors = {};
    const token = localStorage.getItem('ID');
    if(token){
      axiosBackClient.defaults.headers.common['x-auth-token'] = token;
      try {
        const response = await axiosBackClient.get('/users'); //Este funciona si el token no expiro. Si expiro me tira un status 400 y pasa para el catch
        if(response.status === 200){
          dispatch({
            type: GET_USER,
            payload: response.data
          });
          return errors;
        }else if(response.status === 201){
          errors.type = 'Expired Credentials'
          dispatch({
            type: REMOVE_USER
          })
          return errors;
        }
      } catch (error) {
        console.log(error);
        errors.fail = 'Fail, try again';
        dispatch({
          type: REMOVE_USER
        })
        return errors;
      }
    }else{
      delete axiosBackClient.defaults.headers.common['x-auth-token']
    }
  }

  return(
    <UserContext.Provider
      value={{
        userLogged: state.userLogged,
        auth: state.auth,
        login,
        logout,
        getAuth
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
