import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import CallToAction from "../shared/CallToAction";
import TechIcons from "../../images/tech-icons.png";
import Section from "../shared/section";

import "./style.scss";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="technologies"
                    />
                </div>
                <div className="right-col">
                    <h1>Skills</h1>
                    
                        <span><h2>Languages  </h2> <p>Java, C, C++, JavaScript, Python</p></span>
                        <span><h2>Frameworks  </h2> <p>NodeJS, ReactJS</p></span>
                        <span><h2>Tools  </h2> <p>GIT, SQL, MongoDB</p></span>
                        <span><h2>Soft Skills  </h2> <p>Problem Solver, Leadership, Quick Learner</p></span>
                    
                    <CallToAction 
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                        action={() => window.open("https://drive.google.com/file/d/1wXrAv6rOHWDmBLfzRCpkE_iEoS3Q4MzS/view?usp=drive_link")}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;