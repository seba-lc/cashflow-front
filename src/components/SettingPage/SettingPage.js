import './SettingPage.css';

const SettingPage = () => {
  const handleTarget = () => {
    console.log('Reemplazar el texto de la ventana por un input para poner una cantidad de platica');
  }

  const handleWeek = () => {
    console.log('Reemplazar el texto de la ventana por un input para poner una fecha (en realidad es un dia del mes lo que necesito nomas)');
  }

  return (
    <div className='settingPage-style d-flex flex-column justify-content-center align-items-center'>
      SOY LA PAGINA DE SETTINGS
      <div className="settingFrame" onClick={handleTarget}>Objetivo del mes</div>
      <div className="settingFrame" onClick={handleWeek}>Comienzo de la semana</div>
    </div>

    //QUEDO ACA. TENGO QUE AGREGAR ESTOS INPUTS QUE DESCRIBO ARRIBA, Y DESPUES PASAR AL BACK. VOLVER A LEER
    //LOS COMENTARIOS DEL PROYECTO MARKETAR
  );
};

export default SettingPage;