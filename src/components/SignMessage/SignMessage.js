import './SignMessage.css';

const SignMessage = ({ children }) => {
  return (
    <div className='border border-dark text-center'>
      {children}
    </div>
  );
};

export default SignMessage;