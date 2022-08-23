import { useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [showFrame, setShowFrame] = useState(false);

  const handleClick = () => {
    console.log('muestro formulario para agregar una jornada laboral');
    showFrame ? setShowFrame(false) : setShowFrame(true);
  }

  const closeFrame = () => {
    showFrame ? setShowFrame(false) : setShowFrame(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Envio la info al backend');
  }

  return (
    <>
      <div className='landingPage-style d-flex flex-column justify-content-center align-items-center text-center px-5'>
        <button onClick={handleClick}>Add Journey</button>
        Aca van a ir las graficas que van a mostrar toda la informacion que me interesa mostrar. Ahora puedo mostrar una
        simple tabla que me muestre los laburos por dia, las horas trabajadas, la plata por hora, el total del dia
      </div>
      <div className={`journeyStyle ${showFrame ? 'journeyStyle_show' : null}`}>
        <button onClick={closeFrame}>X</button>
        <form className='p-3' onSubmit={handleSubmit}>
          <input type="number" className='w-100 mb-3' placeholder='Cantidad de horas' />
          <input type="number" className='w-100 mb-3' placeholder='Paga por hora (en AUS)' />
          <input type="date" className='w-100 mb-3' />
          <input type="number" className='w-100 mb-3' placeholder='Total del dia' />
          <textarea name="" id="" cols="30" rows="10" placeholder='Comentario..' className='w-100 mb-3'></textarea>
          <label htmlFor="TFN">TFN</label>
          <input type="radio" id='TFN' name='jobType'/>
          <label htmlFor="ABN">ABN</label>
          <input type="radio" id='ABN' name='jobType' className='mb-3'/>
          <button type='submit' className='w-100'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default LandingPage;