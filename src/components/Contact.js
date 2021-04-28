import React from 'react';
import emailjs from 'emailjs-com';
import Navbar from './Navbar';
import {motion} from 'framer-motion';

function Contact() {

    
    function sendEmail(e) {
        e.preventDefault();
    
    emailjs.sendForm('service_5nxk86c', 'template_vgk31ti', e.target, 'user_q60JsMHaIDXbb05ZnVgMd')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    const pageTransition={
        in:{
            opacity:1,
            x:0
        },
        out:{
            opacity:0,
            x:"-100%"
        }
    }
    return (
    
    /*this empty brackets are more important when using multiple exports in a single file*/
    <> 
    <Navbar/>
    <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
    >
    <div className="contact-container">
    
    <div className="form-container">
    <form onSubmit={sendEmail}>
    <ul class="form-style-1">
    <li>
        <label>Full Name<span class="required">*</span></label>
        <input type="name" name="field3" class="field-long" required/>
    </li>
    <li>
        <label>Email <span class="required">*</span></label>
        <input type="email" name="field3" class="field-long" required/>
    </li>
    
    <li>
        <label>Your Message <span class="required">*</span></label>
        <textarea name="message" id="field5" class="field-long field-textarea" required/>
    </li>
    <li>
        <input type="submit" value="Submit" />
    </li>
    </ul>
    </form>
            
            
    </div>
    
    </div>
    </motion.div>
    </>
    /*Ending of that empty brackets as like here*/
    )
}

export default Contact;
