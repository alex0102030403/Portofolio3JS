
import backgroundImage from "../../images/img15.jpeg";
import contactImage from "../../images/image14.jpeg";
import "./Contact.css";
import {RiSendPlaneFill} from "react-icons/ri"
import { Suspense } from "react";
import ContactModel from "./ContactModel";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact(){


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
       
        emailjs
          .sendForm('service_vv1m0yt', 'template_6rexo3b', form.current, {
            publicKey: '6dE6qNL3VDFlHY48A',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return(
        <>
            <section className="contactContainer" id="contact">
                <img src={backgroundImage} className="backgroundImg"/>
               
                <h1 className="contactTitle">- Contact -</h1>
                <div className="contactContent">
                <div className="backgroundModel">
                    <Suspense>
                        <ContactModel/>
                    </Suspense>
                </div>
                    <div className="contactImage">
                        <img src={contactImage} />
                    </div>
                    
                    <div className="formContent">
                        <form ref={form} onSubmit={console.log("ASDF")}>
                            <div className="formTitle">
                                <h2>Contact Me</h2>
                                <div>
                                    <div className="contactForm">
                                        <label className="formLabel">Name</label>
                                        <input type="text" className="formControl" name="user_name"></input>
                                    </div>

                                    <div className="contactForm">
                                        <label className="formLabel">E-mail</label>
                                        <input type="text" className="formControl" name="user_email"></input>
                                    </div>
                                    <div className="contactForm">
                                        <label className="formLabel">Job Types</label>
                                        <select className="customSelectTag" name="user_subject">
                                        <option>Full Time</option>
                                        <option>Part Time</option>
                                        <option>Internship</option>
                                        </select>
                                    </div>
                                    <div className="contactForm">
                                        <label className="formLabel">Subject</label>
                                        <textarea type="text" className="formSubject" name="message"/>
                                    </div>
                                    <div className="buttonSubmit" onClick={(sendEmail)} style={{ cursor: 'pointer' }}>
                                        <p  >Send <RiSendPlaneFill size={20}/></p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )

}