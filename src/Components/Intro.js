import React from 'react'
import "./Intro.css"

const Intro = () => {
    return (
<div class="intro-container">
    <section  id="home" class="intro" >
        <div className="main-intro">
            <h1 id="home" class="section_title section_title_intro">
            Hello , I am Kevin Misati
            </h1>
            <h3 class="front-end-title">Am a Frontend Web Developer</h3>
            <a href="#work" className={`btn`}>
            <i className="fas fa-eye"></i>
            View my work 
            </a>
        </div>
    </section>
</div>
)
}

export default Intro
