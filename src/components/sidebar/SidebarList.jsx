import React from "react";
import "./SidebarList.css";

import {
    FcAbout,
    FcCallback,
    FcCommandLine,
    FcFeedback,
    FcHome,
    FcTodoList,
    FcDocument
} from "react-icons/fc";
import SidebarCanvas from "./SidebarCanvas";

import { Link } from "react-scroll"

export default function SidebarList({expandSidebar}){
    console.log(expandSidebar);
    return(

        <>
        <React.Fragment>
            {expandSidebar ? (
            <div className="navbarItems">
                <div className="sidebarProfilModel">
                    <SidebarCanvas/>
                </div>
                <ul>
                    <li className="navItems"> 
                    <Link to="hero" spy={true} smooth={true} duration={300}>
                        <FcHome size={25} /> Home
                    </Link>
                    </li>

                    <li className="navItems"> 
                    <Link to="about" spy={true} smooth={true} duration={300}>
                    <FcAbout size={25} /> About Me
                    </Link>
                    </li>

                    <li className="navItems"> 
                    <Link to="skills" spy={true} smooth={true} duration={300}>
                    <FcTodoList size={25} /> Skills
                    </Link>
                    </li>

                    <li className="navItems"> 
                    <Link to="projects" spy={true} smooth={true} duration={300}>
                    <FcCommandLine size={25} /> Projects
                    </Link>
                    </li>
                    
                    <li className="navItems"> 
                    <Link to="about" spy={true} smooth={true} duration={300}>
                    <FcDocument size={25} /> Cv
                    </Link>
                    </li>

                    <li className="navItems"> 
                    <Link to="contact" spy={true} smooth={true} duration={300}>
                    <FcFeedback size={25} /> Contact
                    </Link>
                    </li>
                </ul>
            </div>
            ) : (
            <div className="navbarItemsOnlyIcons">
            <ul>
                    <li className="navItems"> <FcHome size={25} /> </li>
                    <li className="navItems"> <FcAbout size={25} />  </li>
                    <li className="navItems"> <FcTodoList size={25} /> </li>
                    <li className="navItems"> <FcCommandLine size={25} /> </li>
                    <li className="navItems"> <FcDocument size={25} /> </li>
                    <li className="navItems"> <FcFeedback size={25} /> </li>
                </ul>
            </div>
            )}
            </React.Fragment>
        </>

    )
}