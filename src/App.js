import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Settings from './pages/Settings';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
