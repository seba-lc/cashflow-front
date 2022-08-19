import InputSet from './InputSet';
import './SettingPage.css';

const SettingPage = () => {
  return (
    <div className='settingPage-style d-flex flex-column justify-content-center align-items-center'>
      SOY LA PAGINA DE SETTINGS
      <div className="settingFrame">
        Economic month goal
        <InputSet />
      </div>
      <div className="settingFrame">
        Beginning of the week
        <InputSet />
      </div>
    </div>

    //QUEDO ACA. TENGO QUE AGREGAR ESTOS INPUTS QUE DESCRIBO ARRIBA, Y DESPUES PASAR AL BACK. VOLVER A LEER
    //LOS COMENTARIOS DEL PROYECTO MARKETAR
  );
};

export default SettingPage;