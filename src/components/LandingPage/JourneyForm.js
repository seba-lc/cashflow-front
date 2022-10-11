import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import UserContext from '../../context/Users/UserContext';
import { axiosBackClient } from '../../settings/axiosConfig';

const JourneyForm = ({business}) => {
  const [newJourney, setNewJourney] = useState({
    business: business._id,
    hourRate: 0,
    hours: 0,
    date: '',
    dayIncome: 0,
    comment: '',
    paymentType: ''
  });
  const [sendInfo, setSendInfo] = useState(false);
  const [errors, setErrors] = useState({});

  const {userLogged} = useContext(UserContext);

  const handleChange = (e) => {
    setNewJourney({
      ...newJourney,
      [e.target.name]: e.target.id === 'TFN' ? 'TFN' : e.target.id === 'ABN' ? 'ABN' : e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(business.payment === 'perJourney'){
      setNewJourney({
        ...newJourney,
        hourRate: newJourney.dayIncome/newJourney.hours,
        user: userLogged.email
      })
    }else{
      setNewJourney({
        ...newJourney,
        dayIncome: newJourney.hourRate*newJourney.hours,
        user: userLogged.email
      })
    };
    setSendInfo(true);
  }

  const sendInfoBack = async (data) => {
    try {
      const newJourney = await axiosBackClient.post('/journey', data);
      console.log('Data sent :)');
    } catch (error) {
      setErrors({
        fail: 'Failure'
      })
    }
  }

  useEffect(() => {
    if(sendInfo){
      sendInfoBack(newJourney);
      setSendInfo(false);
    }
  }, [sendInfo])

  useEffect(() => {
    if(Object.keys(errors).length !== 0){
      console.log(errors);
    }
  }, [errors])

  return (
    <form className='p-3' onSubmit={handleSubmit}>
      <input type="number" className='w-100 mb-3' placeholder='Cantidad de horas' name='hours' onChange={handleChange} />
      <input type="number" className={business.payment === 'perJourney' ? 'w-100 mb-3 d-none' : 'w-100 mb-3'} placeholder='Paga por hora (en AUS)' name='hourRate' onChange={handleChange} /> 
      <input type="date" className='w-100 mb-3' name='date' onChange={handleChange} />
      <input type="number" className={business.payment === 'perHour' ? 'w-100 mb-3 d-none' : 'w-100 mb-3'} placeholder='Total del dia' name='dayIncome' onChange={handleChange} />
      <div>{business.payment === 'perJourney' ? `${newJourney.hours !== 0 ? newJourney.dayIncome/newJourney.hours : '0'}AUS/hr` : `${newJourney.hours*newJourney.hourRate}AUS/day`}</div>
      <textarea name="comment" id="" cols="30" rows="10" placeholder='Comentario..' className='w-100 mb-3' onChange={handleChange} ></textarea>
      <label htmlFor="TFN">TFN</label>
      <input type="radio" id='TFN' name='paymentType' onChange={handleChange}/>
      <label htmlFor="ABN">ABN</label>
      <input type="radio" id='ABN' name='paymentType' className='mb-3' onChange={handleChange}/>
      <button type='submit' className='w-100'>Submit</button>
    </form>
  );
};

export default JourneyForm;