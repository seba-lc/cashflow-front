import { useEffect } from 'react';
import { useState } from 'react';
import { axiosBackClient } from '../../settings/axiosConfig';
import BusinessList from './BusinessList';
import JourneyForm from './JourneyForm';
import './LandingPage.css';

const LandingPage = () => {
  const [showFrame, setShowFrame] = useState(false);
  const [business, setBusiness] = useState({});
  const [businesses, setBusinesses] = useState([]);
  const [errors, setErrors] = useState({});

  const handleClick = () => {
    console.log('muestro formulario para agregar una jornada laboral');
    showFrame ? setShowFrame(false) : setShowFrame(true);
  }

  const closeFrame = () => {
    if(showFrame){
      setShowFrame(false);
      setBusiness({})
    }else{
      setShowFrame(true)
    };
  }

  const bringBusinesses = async () => {
    try {
      const response = await axiosBackClient.get('/business');
      setBusinesses(response.data);
    } catch (error) {
      console.log(error);
      setErrors({
        fail: 'Failure'
      })
    }
  }

  useEffect(() => {
    bringBusinesses();
  }, [])

  useEffect(() => {
    if(Object.keys(errors).length !== 0){
      console.log(errors);
    }
  }, [errors])

  return (
    <>
      <div className='landingPage-style d-flex flex-column justify-content-center align-items-center text-center px-5'>
        <button onClick={handleClick}>Add Journey</button>
        Aca van a ir las graficas que van a mostrar toda la informacion que me interesa mostrar. Ahora puedo mostrar una
        simple tabla que me muestre los laburos por dia, las horas trabajadas, la plata por hora, el total del dia
      </div>
      <div className={`journeyStyle ${showFrame ? 'journeyStyle_show' : null}`}>
        <button onClick={closeFrame}>X</button>
        {
          Object.keys(business).length !== 0 ? <JourneyForm business={business} /> : <BusinessList businesses={businesses} setBusiness={setBusiness} />
        }
      </div>
    </>
  );
};

export default LandingPage;