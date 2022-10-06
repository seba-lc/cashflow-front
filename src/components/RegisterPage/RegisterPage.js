import { useEffect } from 'react';
import { useState } from 'react';
import { validationRegister } from '../../helpers/Validations';
import { axiosBackClient } from '../../settings/axiosConfig';
import SignMessage from '../SignMessage/SignMessage';
import './RegisterPage.css';

const RegisterPage = () => {
  const [newUser, setNewUser] = useState({
    naim: '', //el nombre naim es para que no lo tome el usuario automatico de google
    email: '',
    pass1: '',
    pass2: ''
  });
  const [errors, setErrors] = useState({});

  const handleKeyUp = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registerErrors = validationRegister(newUser);
    setErrors(registerErrors);
    if(Object.keys(registerErrors).length === 0){
      const newUserDB = {
        name: newUser.naim.trim(),
        email: newUser.email.trim(),
        password: newUser.pass1
      }
      try {
        const response = await axiosBackClient.post('/users/register', newUserDB);
        if(response.status === 200) {
          setErrors({});
          e.target.reset(); //Me parece que es para blanquear los datos del form
        }else if(response.status === 201){
          setErrors({user: 'Existent user, try with another'})
        }
      } catch (error) {
        console.log(error);
        setErrors({register: 'Register Failure, try again lately'})
      }
    }
  }

  useEffect(() => {
    if(Object.keys(errors).length !== 0){
      console.log(errors); //POR AHORA
    }
  }, [errors])

  return (
    <div className='register-style'>
      <form onSubmit={handleSubmit} className="border p-5">
        <label htmlFor="register-name">Name:</label>
        <br />
        <input type="text" placeholder='Enter your Name' id='register-name' onKeyUp={handleKeyUp} name='naim' />
        <br />
        <label htmlFor="register-email">Email:</label>
        <br />
        <input type="email" placeholder='Enter your Email' id='register-email' onKeyUp={handleKeyUp} name='email' />
        <br />
        <label htmlFor="register-password-1">Password:</label>
        <br />
        <input type="password" placeholder='Enter your password' id='register-password-1' onKeyUp={handleKeyUp} name='pass1' />
        <br />
        <label htmlFor="register-password-2">Repeat password:</label>
        <br />
        <input type="password" placeholder='Repeat password' id='register-password-2' onKeyUp={handleKeyUp} name='pass2' />
        <br />
        <button className='mt-2' type='submit'>Sign Up</button>
        {
          Object.keys(errors).length !== 0 ? (
            Object.values(errors).map((error, index) => (
              <SignMessage key={index}>{error}</SignMessage>
            ))
          ) : null
        }
      </form>
    </div>
  );
};

export default RegisterPage;