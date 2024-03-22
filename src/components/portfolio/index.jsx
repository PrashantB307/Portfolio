import React, { useState } from 'react'
import "./style.scss";
import Section from '../shared/section';
import Filters from './filter/index.jsx';
import Showcase from './showcase/index.jsx';



const projectsData = [
    {
        id: 1,
        name: "ShopEase E-Shopping App",
        tags: ["web-app", "mobile-app"],
        link : "https://shop-ease307.vercel.app/",
        media: {
            thumbnail: require("../../images/portfolio/09ShopEaseApp.png"),
        },
        
    },
    {
        id: 2,
        name: "Tourism Website",
        tags: ["web-page"],
        link : "https://tourism-website-nine.vercel.app/",
        media: {
            thumbnail: require("../../images/portfolio/05Webpage.png"),
        },
        
    },
    {
        id: 3,
        name: "Education Website",
        tags: ["web-page"],
        link : ("https://my-webpage-2.vercel.app/"),
        media: {
            thumbnail: require("../../images/portfolio/01Webpage.png"),
        },
    },
    {
        id: 4,
        name: "Calculator App",
        tags: ["web-app", "mobile-app"],
        link : "https://github.com/PrashantB307/Calculator",
        media: {
            thumbnail: require("../../images/portfolio/02CalcultorApp.png"),
        },
    },
    {
        id: 5,
        name: "ByteBlogs",
        tags: ["web-app"],
        link : "https://byteblogs-prashantb307.vercel.app/",
        media: {
            thumbnail: require("../../images/portfolio/10BlogApp.png"),
        },
    },
    {
        id: 6,
        name: "To-Do List App",
        tags: ["web-app", "mobile-app"],
        link : "https://to-do-list-theta-swart.vercel.app/",
        media: {
            thumbnail: require("../../images/portfolio/04ToDoApp.png"),
        },
    },
    {
        id: 7,
        name: "Movie Ticket Booking App",
        tags: ["web-app"],
        link : "https://movie-ticket-booking-chi.vercel.app/",
        media: {
            thumbnail: require("../../images/portfolio/07TicketBookingApp.png"),
        },
    },
    {
        id: 8,
        name: "Conatact App",
        tags: ["web-app", "mobile-app"],
        link : "https://contact-app-five-neon.vercel.app/",
        media: {
            thumbnail: require("../../images/portfolio/06ConatctApp.png"),
        },
    },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => { 
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            title="Check My Projects"
            background="light"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section>
    );
};

export default Portfolio;