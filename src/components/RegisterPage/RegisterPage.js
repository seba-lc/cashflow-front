import './RegisterPage.css';

const RegisterPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Envio info al backend');
  }

  return (
    <div className='register-style'>
      <form onSubmit={handleSubmit} className="border p-5">
        <label htmlFor="register-name">Name:</label>
        <br />
        <input type="text" placeholder='Enter your Name' id='register-name' />
        <br />
        <label htmlFor="register-email">Email:</label>
        <br />
        <input type="email" placeholder='Enter your Email' id='register-email' />
        <br />
        <label htmlFor="register-password-1">Password:</label>
        <br />
        <input type="password" placeholder='Enter your password' id='register-password-1' />
        <br />
        <label htmlFor="register-password-2">Repeat password:</label>
        <br />
        <input type="password" placeholder='Repeat password' id='register-password-2' />
        <br />
        <button className='mt-2' type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default RegisterPage;