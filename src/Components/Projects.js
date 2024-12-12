import React from 'react'
import "./Projects.css"
import {Link} from "react-router-dom"
import { ANIMATIONTYPE } from '../Pages/Home'
import electronics from "../images/electronics.png"
import hospital from "../images/Keumbu hospital.png"
import resumeBuilder from "../images/resume builder.png"
import liviti  from "../images/livit.png"
import jumia from "../images/jumia.png"
import construction from "../images/construction.png"
import snapshot from "../images/snapshot.png"
import nasa  from "../images/nasa.png"
import { projects } from '../projectsData'

export const projects1 = [
    {
        title:"Keumbu hospital",
        url: "https://keumbu-hospital.vercel.app/",
        img: hospital,
        techs: [],
        desc:""
    },
    {
        title:"Resume builder",
        url: "https://build-cvs.vercel.app/",
        img: resumeBuilder,
        techs: [],
        desc:""
    },
    {
        title:"Electronics Shop",
        url: "https://dreamlaptop.netlify.app/",
        img: electronics,
        techs: [],
        desc:""
    },
    {
        title: "Hospitality Website",
        url: "https://liviti.netlify.app/",
        img: liviti
    },
    {
        title: "Jumia",
        url: "https://jumia-clone1.netlify.app/",
        img: jumia,
        techs: [],
        desc: ""
    },
    {
        title: "Construction company",
        url: "https://we-build1.netlify.app/",
        img: construction
    },
    {
        title: "Snap Shots",
        url: "https://photos01.netlify.app/",
        img: snapshot,
        techs: [],
        desc: ""
    }
]

const Projects = () => {
    return (
        <section class="my_work" id="work">
            <h2 class="section_title"> My Projects</h2>
            <div class="underline"></div>
            
            <p class="section_subtitle"></p>

            <div class="projects-container">
            <div class="projects">
                {projects.map((project) => {
                    return (
                        <div data-aos={ANIMATIONTYPE} class="project">
                            <div class="project-image-div project-3">
                                <Link to={`project/${project.title}`}>
                                    <img src={project.img} alt={project.title} />
                                </Link>
                                
                            </div>
                        </div>
                    )
                })}

               
            </div>
            </div>
        </section>
    )
}

export default Projects
