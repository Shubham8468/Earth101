import React from 'react'
import './Contact.css'


const Contact = () => {
  //this is new feature in react 19 for form handling
  const handeleFormSubmit = (formData) => {
    // console.log(formData.entries()); 
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);

  }
  return (
    <section className='section-contact'>
      <h2 className='container-title'> Contact Us</h2>
      <div className='container-wrapper'>
        <form className='form-main' action={handeleFormSubmit}>
          <input type="text" className='contact-data' required autoComplete='true' placeholder='Enter Your Name' name='userName' />
          <input type="email" className='contact-data' required autoComplete='true' placeholder='Enter Your Email' name='userEmail' />
          <textarea name="message" rows="10" className='contact-data valu' required autoComplete='true' placeholder='Enter Your Message' ></textarea>
          <button type='submit' className='contact-btn' value="send">Send</button>
        </form>

      </div>
    </section>

  )
}

export default Contact
