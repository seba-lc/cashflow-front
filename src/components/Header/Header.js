import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className='w-100 text-center bg-danger header-style d-flex justify-content-between px-5'>
      SOY EL HEADER
      <Link to='/'>Home</Link>
      <Link to='/landing'>Landing</Link>
      <Link to='/settings'>Settings</Link>
    </div>
  );
};

export default Header;