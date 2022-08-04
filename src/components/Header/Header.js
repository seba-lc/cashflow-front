import './Header.css';
import {Link} from 'react-router-dom';
import SignForm from '../SignForm/SignForm';
import { useState } from 'react';

const Header = () => {
  const [showSignForm, setShowSignForm] = useState(false);

  const handleClick = () => {
    showSignForm ? setShowSignForm(false) : setShowSignForm(true);
  }

  return (
    <>
      <div className='w-100 text-center bg-danger header-style d-flex justify-content-between align-items-center px-5'>
        SOY EL HEADER
        <Link to='/'>Home</Link>
        <Link to='/landing'>Landing</Link>
        <Link to='/settings'>Settings</Link>
        <button onClick={handleClick}>Sign in / Sign Up</button>
      </div>
      <div className={`signForm-style ${showSignForm ? 'signForm_active' : null}`}>
        <SignForm />
      </div>
    </>
  );
};

export default Header;