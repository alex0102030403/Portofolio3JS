import { useState } from "react";
import SidebarList from "./SidebarList";

import "./Sidebar.css"

import {
    
    AiOutlineLeft,
    AiOutlineRight
} from "react-icons/ai";

import {FcMenu} from "react-icons/fc"


export default function Sidebar(){

    const [expandSidebar, setExpandSidebar] = useState(false);

    const handleExpandClick = () => 
    {
        setExpandSidebar(!expandSidebar);
    }

    return(
        <>
            <div className="sidebarSection">
                <div className={expandSidebar ? "sidebarExpand sidebar" : "sidebar" }>
                    <div className="sidebarIcons">
                        <p onClick={handleExpandClick}>
                            {expandSidebar ? (
                                <FcMenu size={30} />
                            ) : ( 
                                <FcMenu size={30} /> 
                            ) }
                        </p>
                    </div>
                    <SidebarList expandSidebar={expandSidebar} />
                </div>
            </div>
        </>
    )
}