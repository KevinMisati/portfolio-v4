import React from 'react'
import "./Skills.css"
import { ANIMATIONTYPE } from '../Pages/Home'


const Skills = () => {
   /*  const skills = [
        {
            name:"HTML5"
        }
    ] */
    return (
        <section class="skills">
            <div class="skills-block">
                <div class="section_title_about">
                    <h2 class="section_title section_title_skills">
                        My Skills
                    </h2>
                    <div class="underline"></div>
                </div>
                <div class="skills-container">
                    <p data-aos={ANIMATIONTYPE} class="row1">HTML5 <i class="fab fa-html5" ></i></p>
                    <p data-aos={ANIMATIONTYPE} class="row2">CSS3 <i class="fab fa-css3" ></i></p>
                    <p data-aos={ANIMATIONTYPE} class="row2">Tailwind <i class="fab fa-css3-alt"></i></p>
                    <p data-aos={ANIMATIONTYPE} class="row3">JavaScript <i class="fab fa-js-square"></i></p>
                    <p data-aos={ANIMATIONTYPE} class="row7">React <i class="fab fa-react"></i></p>
                    <p data-aos={ANIMATIONTYPE} class="row8">Redux <i class="fas fa-sitemap"></i></p>
                    <p data-aos={ANIMATIONTYPE} class="row9">Git <i class="fab fa-git-alt"></i></p>
                    <p data-aos={ANIMATIONTYPE} class="row9">Github <i class="fab fa-github"></i></p>
            </div>
        
        </div>
</section >
    )
}

export default Skills
