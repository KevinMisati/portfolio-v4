import React from 'react'
import "./Footer.css"
import { ANIMATIONTYPE } from '../Pages/Home'


const Footer = () => {

    return (
        <footer>
            <div>
            <h2 class="section_title">Contact Me</h2>
            <div class="underline"></div>

                <section data-aos={ANIMATIONTYPE}>
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
            <p class="copyright">Kevin Misati &copy;{new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer
