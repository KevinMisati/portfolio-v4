import React from 'react'
import "./Services.css"
import coderImg from "../images/developer.png"
import { ANIMATIONTYPE } from '../Pages/Home'

const Services = () => {
    return (
        <>
        <section  class="my_services" id="services">
<h2 class="section_title section_title_services">What I do</h2>
<div class="underline"></div>
<div class="services">
    <img data-aos={ANIMATIONTYPE} alt="coding" src={coderImg} />

    <div data-aos={ANIMATIONTYPE} class="services_text">
        <p>I love and enjoy building cool stuff for the web. I enjoy spending my free time increasing my knowledge on Web Development and building new and
        challenging projects.
</p>
       
    </div>

</div>
                <a   data-aos={ANIMATIONTYPE}  className="btn" href="#work" >My work</a>
</section >
</>
    )
}

export default Services
