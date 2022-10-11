import './LandingPage.css';

const BusinessList = ({businesses, setBusiness}) => {
  const handleClick = (e, item) => {
    setBusiness(item);
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      {
        businesses?.map((item, index) => (
          <div className='business-frame px-5 py-1' key={index} onClick={(e) => handleClick(e, item)} >{item.name}</div>
        ))
      }
    </div>
  );
};

export default BusinessList;