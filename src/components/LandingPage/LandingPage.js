import './LandingPage.css';

const LandingPage = () => {
  const handleClick = () => {
    console.log('muestro formulario para agregar una jornada laboral');
  }

  return (
    <div className='landingPage-style d-flex flex-column justify-content-center align-items-center'>
      <button onClick={handleClick}>Add Journey</button>
      Aca van a ir las graficas que van a mostrar toda la informacion que me interesa mostrar
    </div>
  );
};

export default LandingPage;