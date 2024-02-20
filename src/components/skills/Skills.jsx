import { Suspense } from "react";
import SkillsImg from "../../images/img12.jpeg";
import "./Skills.css"
import SkillsModel from "./SkillsModel";

export default function Skills(){
    return(
        <>
            <section className="skills" id="skills">
                <img src={SkillsImg}/>
                <h2 className="skillsTitle">- Skills -</h2>
                <div className="skillsContent">
                    <div className="skillsContainer">
                        <div className="skillsDescription">
                            <h1 className="html">HTML & CSS - 80%</h1>
                            <div className="htmlLine">
                                <div className="htmlCircle"></div>
                            </div>

                            <h1 className="html">C++ - 90%</h1>
                            <div className="htmlLine">
                                <div className="cppCircle"></div>
                            </div>

                            <h1 className="html">Python - 70%</h1>
                            <div className="htmlLine">
                                <div className="pyCircle"></div>
                            </div>

                            <h1 className="html">JavaScript - 70%</h1>
                            <div className="htmlLine">
                                <div className="jsCircle"></div>
                            </div>
                        </div>
                    </div>

                    <div className="skillsContainerDesc">
                        <div className="skillsDescriptionDesc">
                            <h1 className="DescTitle">- Short descirption of my skills -</h1>
                          
                            <h1 className="htmlDesc">HTML & CSS i mainly learned from online tutorials and a little bit from uni</h1>
                           
                            <h1 className="htmlDesc">C++ was my first programming llot in coding contests asdasdfdfdffdddddddddddfdfdfd</h1>
                           
                            <h1 className="htmlDesc">Python - 70% aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
                           
                            <h1 className="htmlDesc">JavaScript - 70% bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</h1>
                            <h1 className="htmlDesc">C# - 70% cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc</h1>
                            <h1 className="htmlDesc">Java - 70% w wwwwwwwwwwwwwwwwwwwwwww</h1>
                            <h1 className="htmlDesc">JavaScript - 70%</h1>
                            
                            
                        </div>
                    </div>
                   
                </div>
            </section>
        </>
    )
}