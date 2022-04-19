import React from 'react';
import './SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import { serverTimestamp, collection, addDoc } from 'firebase/firestore';

function SendMail() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();


  const onSubmit = (data) => {
    addDoc(collection(db,'emails'),{
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: serverTimestamp()
    })
    dispatch(closeSendMessage());
  }
  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CloseIcon onClick={() => dispatch(closeSendMessage())} className='sendMail_close'/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          name='to' 
          placeholder='To' 
          type="email"
          {...register("to", { required: true })}
        />
        <p>{errors.to && <span className='sendMail_error'>To is Required!</span>}</p>
        <input 
          name='subject' 
          placeholder='Subject' 
          type="text"
          {...register("subject", { required: true })}
        />
        <p>{errors.subject && <span className='sendMail_error'>Subject is Required!</span>}</p>
        <input
          name='message'
          placeholder='Message...'
          type="text"
          className='sendMail_message'
          {...register("message", { required: true })}
        />
        <p>{errors.message && <span className='sendMail_error'>Message is Required!</span>}</p>
        <div className="sendMail_options">
          <Button 
            className='sendMail_send'
            variant='contained'
            color="primary"
            type='submit'
          >Send</Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail;