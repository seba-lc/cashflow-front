import { useContext } from 'react';
import UserContext from '../../context/Users/UserContext';
import './HomePage.css';

const HomePage = () => {
  const {auth, userLogged} = useContext(UserContext);

  const handleClick = () => {
    console.log(userLogged);
    console.log(auth);
  }

  return (
    <>
      <div className='homePage-style d-flex justify-content-center align-items-center px-5 text-center'>
        SOY EL HOME: Idea del proyecto. Tener un control sobre los ingresos y quizas tambien de los gastos. La idea surge por la
        variedad de trabajos que van surgiendo, con las diferentes pagas, y las diferentes formas en que se cobra. Entonces, es 
        ponerse un objetivo, y ver cuan lejos o cerca estoy de ese objetivo en detalle en funcion de los diferentes trabajos. Pero 
        la principal idea es tambien volver a la programacion que tanto me gusta y no quiero olvidar. En cuanto a los gastos, quiero
        llevar un control de cuales son mis gastos fijos y controlar los variables. Y asi poder ver que es lo que tengo que ajustar
        para llegar a los objetivos. Podria hacer una planilla de excel, si. Pero esto es mejor, mas maleable, y mucho mas portable.
      </div>
      <button onClick={handleClick}>Pruebas</button>
    </>
  );
};

export default HomePage;