import React from 'react'
import {useParams} from "react-router-dom"
import classes from "./ProductDetails.module.css"
import {projects} from "../projectsData"

const Project = () => {

    let titleParam = useParams().title
    console.log(projects,"projects")
    let {title,img,url,desc,techs,gurl} = projects.filter(project => project.title == titleParam)[0]
    return (
        <div className={classes["details-container"]}>
            <div className={classes.details}>
                <h3 className={classes.title} >{title}</h3>
                
                <div className={classes["about-container"]}>
                <div className={classes.links}>
                    <a href={url}>
                        View live <i className="fas fa-eye"></i>
                    </a>
                    <a href={gurl}>
                        view code <i className="fab fa-github"></i>
                    </a>
                </div>
                <div className={classes["product-img"]} >
                    <img alt="project" src={img} />
                </div>
                <div className={classes["about-techs"]}>
                <div className={classes.about}>
                    <h3 className={classes["sub-title"]}>About the project</h3>
                    <p>{desc}</p>
                </div>
                <div className={classes.technologies}>
                    <h3 className={classes["sub-title"]}>Technologies used</h3>
                    <div className={classes["techs-container"]}>
                    {techs.map(tech => {
                        return (
                            <div className={classes["tech-container"]}>
                                {tech}
                            </div>
                        )
                    })}
                            </div>
                    </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Project
