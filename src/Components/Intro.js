import React from 'react'
import "./Intro.css"
import coderImg from "../images/developer.png"

const Intro = () => {

    return (
        <section className="intro-container">
            <div  id="home" className="intro" >
                <p id="home" className="section_title_intro">
                    Hello, I'm Kevin <span className='waving-hand'>👋</span>
                </p>
                <h3 className="front-end-title">I build cool stuff for the web</h3>
                
                <a href="#work" className={`btn`}>
                    <i className="fas fa-eye"></i>
                    View my work 
                </a>
            </div>
            <div className="img-container">
                <img 
                    src={coderImg}
                    alt="Hero"
                />
            </div>
        </section>
)
}

export default Intro
