import React from 'react'
import './contact.css'
import blogcontact from '../../assets/blogcontact.webp'
const Contact = () => {
  return (
    <div name='contact' className='c'>
      <div className='c-left'><img src={blogcontact}/></div>
       <div className="c-right">
          <h1 className="c-desc">
            What's your story?<br/> Let's Talk
          </h1>
          <form action="https://getform.io/f/f4ffa0d1-1226-46c6-9027-bba9d25c101d" method="POST">
              <input type='text' placeholder='Name' name='user_name' required/>
              <input type='email' placeholder='Email' name='user_email' required/>
              <textarea rows='5' placeholder='Message' name='message' required/>
              <button>Send Message</button>
          </form>
        </div>
    </div>
  )
}

export default Contact
