import React from 'react'

const Gettouch = () => {
  return (
   <>
    <section class="get-in-touch " id="Contact">
        <div class="section-title">
            <div class="title-1">Get In Touch With Us</div>
            <div class="title-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <div class="get-in-touch-bottom">
            <div class="get-in-touch-left">
                <img src="https://templates.hibootstrap.com/zebu/default/assets/img/book-contact.png" alt=""/>
            </div>
            <div class="contact-forms">
                <div class="name-email">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Your Email"/>

                </div>
                <input type="text" placeholder="Your Phone"/>
                <input type="text" placeholder="Your Subject"/>
                <textarea name="message" id="" cols="20" rows="10" placeholder="Your Message"/>
                <div class="submit-btn">Submit</div>
            </div>
        </div>
    </section>
   </>
  )
}

export default Gettouch