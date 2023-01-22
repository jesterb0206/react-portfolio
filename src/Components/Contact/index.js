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
    <section id='contact-form' onSubmit={handleSubmit}>
      <form>
        <h1 id='main-section-header'>Contact Me!</h1>
        <div className='form-inner-container'>
          <input
            onChange={storeData}
            className='name'
            type='text'
            name='fromName'
            id='fromName'
            placeholder='Full name*'
          />
          <input
            onChange={storeData}
            name='from_email'
            id='from_email'
            className='email'
            type='email'
            placeholder='E-mail*'
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
    </section>
  );
};

export default Contact;
