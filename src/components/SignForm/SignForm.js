import './SignForm.css';

const SignForm = () => {
  return (
    <>
      <form className='border p-2 border-dark'>
        <label htmlFor="user-email">Email:</label>
        <br />
        <input type="email" placeholder='Enter your Email' id='user-email' />
        <br />
        <label htmlFor="user-password">Password:</label>
        <br />
        <input type="password" placeholder='Enter your password' id='user-password' />
        <br />
        <button className='mt-2'>Sign In</button>
      </form>
      <button className='mt-3'>Sign In/Up with Google</button>
      <button className='mt-3'>No tenes cuenta? REGISTRATE</button>
    </>
  );
};

export default SignForm;