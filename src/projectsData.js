import electronics from "./images/electronics.png"
import jumia from "./images/jumia.png"
import hospital from "./images/Keumbu hospital.png"
import snapshot from "./images/snapshot.png"
import livit from "./images/livit.png"
import construction from "./images/construction.png"
import resumeBuilder from "./images/resume builder.png"
import  nasa from "./images/nasa.png"

export const projects = [
    
    {
        title: "Electronics Shop",
        url: "https://dreamlaptop.netlify.app/",
        img: electronics,
        techs: ["CSS","React","Axios","Django","SQlite"],
        desc: "This is a real-world full-stack e-commerce web app for selling laptops, phones, and accessories online. A buyer can browse the available products, add the ones he or she wants to buy to the cart, and finally checkout. Products can be delivered to a specified address or picked up from a nearby store, depending on the user's preference.",
        gurl:"https://github.com/KevinMisati/Lapshop-frontend"
    },
    
    {
        title: "Hospitality Website",
        url: "https://liviti.netlify.app/",
        img: livit,
        techs: ["CSS", "React"],
        desc: "This is a website for people who enjoy traveling, possibly during the holidays, and who want to book their accommodation houses or rooms online before they go. They simply look through the houses and rooms and choose the ones they like best.",
        gurl:"https://github.com/KevinMisati/hospitality-management"
    },
    {
        title: "Resume builder",
        url: "https://buildcvi.netlify.app/",
        img: resumeBuilder,
        techs: ["NextJs","TypeScript","ShadCn","Tailwind CSS"],
        desc: "This is a full-stack CV builder application",
        gurl:"https://github.com/KevinMisati/resume-builder"
    },
    {
        title: "Snap Shots",
        url: "https://photos01.netlify.app/",
        img: snapshot,
        techs: ["CSS","React","Flickr API"],
        desc: "This is a photography website where users can search for images and have them displayed on the home page. These images are obtained from the Flickr API endpoint.",
        gurl: "https://github.com/KevinMisati/snapshots"
    },
    {
        title: "Jumia",
        url: "https://jumia-clone1.netlify.app/",
        img: jumia,
        techs: ["CSS", "React"],
        desc: "This is a clone of Kenya's largest e-commerce platform for selling various products online.",
        gurl: "https://github.com/KevinMisati/jumia-clone"
    },
    {
        title: "Keumbu hospital",
        url: "https://keumbu-hospital.vercel.app/",
        img: hospital,
        techs: ["NextJs","TypeScript","Appwrite","ShadCdn","Tailwind CSS"],
        desc: "This is a full-stack hospital application with a seamless booking system for doctor appointments",
        gurl:"https://github.com/KevinMisati/healthcare"
    },
]

const otherProjects = [
    {
        title: "Electronics Shop",
        url: "https://lapstoro.netlify.app/",
        img: electronics,
        techs: ["CSS","React","Axios","Django","PostgreSQL"],
        desc: "This is a real-world full-stack e-commerce web app for selling laptops, phones, and accessories online. A buyer can browse the available products, add the ones he or she wants to buy to the cart, and finally checkout. Products can be delivered to a specified address or picked up from a nearby store, depending on the user's preference.",
        gurl:"https://github.com/KevinMisati/electronic-shop"
    }, 
    {
        title: "Nasa api",
        url: "https://nasaapii.netlify.app/",
        img: nasa,
        techs: ["HTML","CSS", "JavaScript","NASA API"],
        desc: "I'm pulling data from the NASA API and displaying it throughout this site. I'm displaying daily news that NASA updates every day, a Mars rover photo, and some random images from their library that will change with each refresh.",
        gurl: "https://github.com/KevinMisati/nasapi"
    },
    {
        title: "Construction company",
        url: "https://we-build1.netlify.app/",
        img:construction,
        techs: ["CSS", "React"],
        desc: "This website connects a building company with potential customers. Customers review some of the company's previous projects, and if they like the company, they can contact it via email or phone for a business deal.",
        gurl: "https://github.com/KevinMisati/construction-company"
    },
]

