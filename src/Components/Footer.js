import React,{useState} from 'react'
//import emailjs,{init} from "emailjs"
import emailjs from 'emailjs-com'
import "./Footer.css"


const Footer = () => {

    //init("6ScGCGqhcs2V61Ugf");

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isFormValid,setIsFormValid] = useState(false)
    const [isNameValid,setIsNameValid] = useState(true)
    const [isEmailValid,setIsEmailValid] = useState(true)
    const [isMessageValid,setIsMessageValid] = useState(true)
    const [emailSent, setEmailSent] = useState(false);

    const serviceId = 'service_zt68sgh';
    const templateId = 'contact_form';
    const userId = '6ScGCGqhcs2V61Ugf';
    const templateParams = {
        name,
        email: "kevinmosigisi001@gmail.com",
        message
    };

    const handleInputChange = (e) => {
        if(e.target.name == "name"){
            setName(e.target.value)
            setIsNameValid(true)
        }
        else if (e.target.name == "email") {
            setEmail(e.target.value)
            setIsEmailValid(true)
        }
        else{
            setMessage(e.target.value)
            setIsMessageValid(true)
        }
    }

    const validateForm = () => {
        
        if (name !== "" && email !== "" && message !== "" ){
            return true
        }
        
        if (name === "") {
            setIsNameValid(false)

        }
        if (email === "") {
        setIsEmailValid(false)
        }
        if (message === "") {
            setIsMessageValid(false)
        }
    }
    const handleSubmit = (e) => {
        
        e.preventDefault()
        if (validateForm()) {
            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error)); 

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            setEmailSent(false);
        }
    }

    return (
        
        <footer>

            <div>
            <h2 class="section_title contact-title">Contact Me</h2>
            <div class="underline"></div>

            <section>
                <form onSubmit="mailto:kevinmosigisi2001@gmail.com">
                    <div className={isNameValid ? "input-control" : "input-control invalid" }>
                        <label>Name</label>
                        <input onChange={handleInputChange} name="name" value={name} type="text"/>
                    </div>
                    <div className={isEmailValid ? "input-control" : "input-control invalid"}>
                        <label>Email</label>
                        <input onChange={handleInputChange}  name="email" value={email} type="email" />
                    </div>
                    <div className={isMessageValid ? "input-control" : "input-control invalid"}>
                        <label>Message</label>
                        <textarea onChange={handleInputChange} name="message" value={message}></textarea>
                    </div>
                    {emailSent && <p className="success">Message sent! I will respond to you as soon as possible</p>}
                    <div className="input-control">
                        <button onClick={handleSubmit} type="submit" className="btn">Send it!</button>
                    </div>
                    
                </form>

                <div className="footer-links">
                    <a href="mailto:kevinmisati001@gmail.com" class="footer_link">kevinmisati001@gmail.com</a>
                    <ul>
                        <li class="footer_link">
                            <a href="https://www.linkedin.com/in/kevin-misati-b5a399208/" target="_blank">
                                <i class="fab fa-linkedin fa-fw fa-2x">

                                </i>
                            </a>
                        </li>
                        <li class="footer_link">
                            <a href="https://github.com/KevinMisati" target="_blank">
                                <i class="fab fa-github fa-fw fa-2x"></i>
                            </a></li>

                        <li class="footer_link">
                            <a rel='' href="https://twitter.com/misatikevi" target="_blank">
                                <i class="fab fa-twitter fa-fw fa-2x"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
    
            <p class="copyright">Kevin Misati &copy;2022</p>
            </div>
        </footer>
    )
}

export default Footer
