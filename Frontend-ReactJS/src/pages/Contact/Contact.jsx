import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { INPUT_LENGTH } from "../../utils/constants.js";
import { setLoader } from '../../redux/loaderSlice.js';
import useIsComponentMounted from "../../hooks/useIsComponentMounted.js";
import { sendMessage } from '../../apis/handlers/contactSubmission.js';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';
import SuccessMessage from '../../components/SuccessMessage/SuccessMessage.jsx';

// import "./contact.css"

/**
 * Component returns contact page.
 *
 * @returns {React.ReactElement}
 */
function Contact() {
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const isComponentMounted = useIsComponentMounted();

 const [formData, setFormData] = useState({
  name: '',
  email: '',
  occupation: '', //---> honeypot field
  subject: '',
  message: '',
  spamFilter: '',
 });

 const [error, setError] = useState('');
 const [success, setSuccess] = useState('');

 //Number generator for spam filter
 const [spamCode] = useState(() =>
  String(Math.floor(1000 + Math.random() * 9000))
 );

 const handleChange = (e) => {
  setFormData((prev) => ({
   ...prev,
   [e.target.name]: e.target.value,
  }));
 };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.spamFilter !== spamCode) {
   setError('Spam filter verification failed.');
   return;
  }

  // Honeypot triggered
  if (formData.occupation.trim() !== "") {
   return;
  }

  const requestData = {
   name: formData.name,
   email: formData.email,
   occupation: formData.occupation, //---> honeypot field
   subject: formData.subject,
   message: formData.message,
   spamFilter: formData.spamFilter
  }

  dispatch(setLoader(true));
  setError('');
  setSuccess('');

  sendMessage(requestData)
   .then(res => {
    if (isComponentMounted) {
     if (res.response) { setSuccess("Message sent successfully!"); }
     else { setError(res.message); }
    }
   })
   .catch(error => { console.error("Error in sendMessage function.", error); })
   .finally(() => { dispatch(setLoader(false)); })

 };

 return (
  <section className="Main-Section">

   {/* Metadata */}
   <title>Contact Us</title>
   <meta name="description" content="Contact Us" />

   {/* Component */}
   <div className="Main-Form-Container">
    <h1>Contact</h1>
    <br />
    <p>Fill in the form to send us a message.</p>
    <p>We will get back to you as soon as possible.</p>
    <br />

    {error && (
     <ErrorMessage message={error} />
    )}

    {success && (
     <SuccessMessage message={success} />
    )}

    <form onSubmit={handleSubmit}>
     <div>
      <label htmlFor="name">
       <b>Name *</b>
      </label>
      <input
       type="text"
       name="name"
       id="name"
       placeholder="Enter Name"
       required
       minLength={INPUT_LENGTH.name.minValue}
       maxLength={INPUT_LENGTH.name.maxValue}
       value={formData.name}
       onChange={handleChange}
      />
     </div>

     <div>
      <label htmlFor="email">
       <b>Email *</b>
      </label>
      <input
       autoComplete="email"
       type="email"
       name="email"
       id="email"
       placeholder="Enter Email"
       required
       minLength={INPUT_LENGTH.email.minValue}
       maxLength={INPUT_LENGTH.email.maxValue}
       value={formData.email}
       onChange={handleChange}
      />
     </div>

     <div className="Occupation-Input">
      <label htmlFor="occupation">Occupation *</label>
      <input
       autoComplete="off"
       aria-hidden="true"
       tabIndex="-1"
       id="occupation"
       type="text"
       name="occupation"
       minLength={INPUT_LENGTH.occupation.minValue}
       maxLength={INPUT_LENGTH.occupation.maxValue}
       value={formData.occupation}
       onChange={handleChange}
      />
     </div>

     <div>
      <label htmlFor="subject">Subject *</label>
      <input
       type="text"
       name="subject"
       id="subject"
       placeholder="Enter Subject"
       required
       minLength={INPUT_LENGTH.subject.minValue}
       maxLength={INPUT_LENGTH.subject.maxValue}
       value={formData.subject}
       onChange={handleChange}
      />
     </div>

     <div>
      <label htmlFor="message">Message *</label>
      <textarea
       id="message"
       name="message"
       placeholder="Type your message"
       rows="8"
       required
       minLength={INPUT_LENGTH.message.minValue}
       maxLength={INPUT_LENGTH.message.maxValue}
       value={formData.message}
       onChange={handleChange}
      />
     </div>

     <div>
      <label htmlFor="spamFilter">Spam Filter</label>

      <div>
       <input
        className="Spam-Filter-Input"
        type="number"
        name="spamFilter"
        id="spamFilter"
        placeholder="Enter number on the right"
        required
        minLength={INPUT_LENGTH.spamFilter.minValue}
        maxLength={INPUT_LENGTH.spamFilter.maxValue}
        value={formData.spamFilter}
        onChange={handleChange}
       />
       <span> ← {spamCode} </span>

      </div>

     </div>

     <div>
      <button
       disabled={success !== ''}
       type="submit"
      >Send Message</button>
     </div>
    </form>
   </div>

   <br />

  </section>
 )
}

export default Contact