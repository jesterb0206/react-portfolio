import React, {useState} from 'react';

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
      statusEl.innerText = 'Message sent successfully!';
      statusEl.style.color = 'green';
    }
    console.log(formData);
  };

  // Capture the Form Data

  const storeData = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <form id='contact-form' onSubmit={handleSubmit}>
      <h1 id='main-section-header'>Contact</h1>
      <hr id='main-section-hr' />
      <div className='form-inner-container'>
        <input
          onChange={storeData}
          className='name'
          type='text'
          name='fromName'
          id='fromName'
          placeholder='Full Name*'
        />
        <input
          onChange={storeData}
          name='from_email'
          id='from_email'
          className='email'
          type='email'
          placeholder='E-email*'
        />
        <input
          onChange={storeData}
          name='subjectText'
          id='subjectText'
          className='subject'
          type='text'
          placeholder='Subject*'
        />
        <textarea
          onChange={storeData}
          name='message'
          id='msg'
          placeholder='Message*'
        ></textarea>
      </div>
      <p id='status'></p>
      <button id='sendBtn'>Send</button>
    </form>
  );
};

export default Contact;
