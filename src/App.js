import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Settings from './pages/Settings';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

//TENGO QUE PONER ME A HACER TODAS LAS VALIDACIONES, DE LOS FORMULARIOS DEL FRONTEND Y MANDAR LA INFO AL BACKEND
