import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "./style.scss";

const ContactInfo = () => {
    return (
        <div className="contact-info-box">
            <h4>
                I would be happy to answer any questions you may have about
               DSA Problem and Web Development.
            </h4>
            <div className="contact-option">
                <FaPhoneAlt />
                <span className="text">+91 9889832244</span>
            </div>
            <div className="contact-option">
                <MdEmail />
                <span className="text">pkb.28.rkt@gmail.com</span>
            </div>
        </div>
    );
};

export default ContactInfo;