import React from 'react'
import "./Intro.css"
import { ANIMATIONTYPE } from '../Pages/Home'

const Intro = () => {
    return (
<div class="intro-container">
<section data-aos={ANIMATIONTYPE} id="home" class="intro" >
<h1 id="home" class="section_title section_title_intro">
    <span><img alt="👋" src="https://twemoji.maxcdn.com/2/72x72/1f44b.png" /></span>
    Hello , I am Kevin Misati
</h1>
<h3 class="front-end-title">Am a Front-end Web Developer</h3>
<a href="#work" className={`btn`}>
    <i className="fas fa-eye"></i>
    View my work 
</a>
</section>
</div>
)
}

export default Intro
