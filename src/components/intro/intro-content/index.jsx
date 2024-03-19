import React from "react";
import "./style.scss";
import hand from "../../../images/hand.png";
import pic from "../../../images/pic.png"
import CallToAction from "../../shared/CallToAction"; 
import { scrollToSection } from "../../utils/helper";


const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} alt="" />
                            </span>
                            <span className="text">, I am</span>
                        </span>
                        <span className="big-text">Prashant Kumar</span>
                    </h1>
                    <p>I am a 💻 Computer 👨🏻‍💻 Science Student. I am Interested in : 
                      💻 Computer Science, 🧠 Competitive Programming  & 🐍 Web 
                      Development. 
                    </p>
                    <CallToAction text="Contact Me" action={() => scrollToSection("contact")}/>
                </div>
                <div className="right-col">
                    <img src={pic} alt="User pic" />
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
