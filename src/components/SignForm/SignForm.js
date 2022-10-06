import './SignForm.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import UserContext from '../../context/Users/UserContext';
import { validationLogin } from '../../helpers/Validations';
import { useEffect } from 'react';
import SignMessage from '../SignMessage/SignMessage';

const SignForm = () => {
  let navigate = useNavigate();
  const [userLog, setUserLog] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const { auth, login } = useContext(UserContext);

  const handleKeyUp = (e) => {
    setUserLog({
      ...userLog,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!auth){
      const loginErrors = validationLogin(userLog);
      setErrors(loginErrors);
      if(Object.keys(loginErrors).length === 0){
        const backErrors = await login(userLog);
        setErrors(backErrors);
        if(Object.keys(backErrors).length === 0){
          e.target.reset();
          setUserLog({
            email: '',
            password: ''
          })
        }
      }
    }else{
      console.log('Ya estas logeado fucking moron');
    }
  }

  useEffect(() => {
    if(Object.keys(errors).length !== 0){
      console.log(errors); //POR AHORA
    }
  }, [errors])

  return (
    <>
      <form className='border p-2 border-dark' onSubmit={handleSubmit}>
        <label htmlFor="user-email">Email:</label>
        <br />
        <input type="email" placeholder='Enter your Email' id='user-email' onKeyUp={handleKeyUp} name='email' />
        <br />
        <label htmlFor="user-password">Password:</label>
        <br />
        <input type="password" placeholder='Enter your password' id='user-password' onKeyUp={handleKeyUp} name='password' />
        <br />
        <button className='mt-2' type='submit'>Sign In</button>
        {
          Object.keys(errors).length !== 0 ? (
            Object.values(errors).map((error, index) => (
              <SignMessage key={index}>{error}</SignMessage>
            ))
          ) : null
        }
      </form>
      <button className='mt-3'>Sign In/Up with Google</button>
      <button className='mt-3' onClick={() => navigate('/register')}>No tenes cuenta? REGISTRATE</button>
    </>
  );
};

export default SignForm;