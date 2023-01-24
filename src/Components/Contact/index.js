// The Contact Page Minus The Header And Footer

import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers';
import emailjs from '@emailjs/browser';

const Contact = () => {
  // Setups the Form Data State Object

  const statusEl = document.getElementById('status');

  const [formData, setFormData] = useState({
    fromName: '',
    from_email: '',
    subjectText: '',
    message: '',
  });
  const {fromName, from_email, subjectText, message} = formData;

  // Handles the Form Submission

  const handleSubmit = (e) => {
    document.getElementById('email-status').textContent = '';
    e.preventDefault();
    if (
      fromName === '' ||
      from_email === '' ||
      subjectText === '' ||
      message === ''
    ) {
      statusEl.innerText =
        'Message sent failed, please fill in all of the required fields!';
      statusEl.style.color = 'red';
    } else {
      if (validateEmail(from_email)) {
        // Email.js Template
        emailjs.send('service_g58fe9j', 'template_8enefoe', {
          from_name: fromName,
          from_email: from_email,
          msg: message,
          subjectText: subjectText,
        });

        document.getElementById('contact-form').reset();

        statusEl.innerText = 'Message sent successfully!';
        statusEl.style.color = 'green';
        setTimeout(() => {
          statusEl.innerText = '';
        }, 1500);
      } else {
        statusEl.innerText = 'Invalid email format, please try again!';
        statusEl.style.color = 'red';
      }
    }
  };

  // Capture the Form Data

  const storeData = (e) => {
    document.getElementById('status').textContent = '';
    document.getElementById('email-status').textContent = '';

    if (e.target.name === 'from_email') {
      const emailStatusEl = document.getElementById('email-status');

      if (e.target.value === '') {
        emailStatusEl.innerText = '';
      } else {
        if (validateEmail(e.target.value)) {
          emailStatusEl.innerText = 'Valid email!';
          emailStatusEl.style.color = 'green';
        } else {
          emailStatusEl.innerText = 'Invalid email format, please try again!';
          emailStatusEl.style.color = 'red';
        }
      }
    }
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const updateEl = (e, errorPlaceholder, defaultPlaceholder, id) => {
    if (e.target.value === '') {
      document.getElementById(id).placeholder = errorPlaceholder;
      document.getElementById(id).style.border = '2px solid #ffa500';
    } else {
      document.getElementById(id).placeholder = defaultPlaceholder;
      document.getElementById(id).style.border = '2px solid transparent';
    }
  };
  const checkForm = (e) => {
    if (e.target.name === 'fromName') {
      updateEl(e, 'Full Name  Required*', 'Full Name*', 'fromName');
    }
    if (e.target.name === 'from_email') {
      updateEl(e, 'E-mail  Required*', 'E-mail*', 'from_email');
    }
    if (e.target.name === 'subjectText') {
      updateEl(e, 'Subject  Required*', 'Subject*', 'subjectText');
    }
    if (e.target.name === 'message') {
      updateEl(e, 'Message  Required*', 'Message*', 'msg');
    }
  };

  // Email.js Public Key

  emailjs.init('tm5ayr4Klja9j1MkC');

  return (
    <>
      <form id='contact-form' onSubmit={handleSubmit}>
        <h1 id='main-section-header'>Contact</h1>
        <hr id='main-section-hr' />
        <div className='form-inner-container'>
          <input
            onBlur={(e) => checkForm(e)}
            onChange={storeData}
            className='name'
            type='text'
            name='fromName'
            id='fromName'
            placeholder='Full Name*'
          />
          <input
            onBlur={(e) => checkForm(e)}
            onChange={storeData}
            name='from_email'
            id='from_email'
            className='email'
            type='email'
            placeholder='E-mail*'
          />
          <input
            onBlur={(e) => checkForm(e)}
            onChange={storeData}
            name='subjectText'
            id='subjectText'
            className='subject'
            type='text'
            placeholder='Subject*'
          />
          <textarea
            onBlur={(e) => checkForm(e)}
            onChange={storeData}
            name='message'
            id='msg'
            placeholder='Message*'
          ></textarea>
        </div>
        <p id='email-status'></p>
        <p id='status'></p>
        <button id='sendBtn'>Send</button>
      </form>
    </>
  );
};

export default Contact;
