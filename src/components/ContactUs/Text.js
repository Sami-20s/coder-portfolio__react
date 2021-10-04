import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { linksList } from "./contactList";
import { FaBehance, FaDribbble, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";
// FaBehance , FaDribbble ,FaInstagram ,FaLinkedinIn
// ImPinterest2
const Text = () => {
    return (
        <div className="contact__text">
            <h2>Contact Us</h2>
            <p>
                Let's make something new, different and more meaningful or make thing more visual or
                conceptual?
            </p>
            <div className="contact__text__links">
                {linksList.map(item => {
                    const { id, img, title, subTitle } = item;
                    return (
                        <div key={id} className="contact__text__links__link">
                            {img}
                            <div className="contact__text__links__link__info">
                                <h3>{title}</h3>
                                <h4>{subTitle}</h4>
                            </div>
                        </div>
                    );
                })}
                <div className="contact__text__links__socialIcons">
                    <FaBehance />
                    <FaDribbble />
                    <FaInstagram />
                    <FaLinkedinIn />
                    <ImPinterest2 />
                </div>
            </div>
        </div>
    );
};

export default Text;
