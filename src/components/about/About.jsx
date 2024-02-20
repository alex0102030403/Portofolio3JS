
import { Suspense } from "react"
import AboutImg from "../../images/img10.jpeg"
import "./About.css"
import AboutModel from "./AboutModel"

const MyCv = "Ss";
export default function About(){
    return(
        <>
            <section className="about" id="about">
                <img src={AboutImg} />
                <h2 className="aboutTitle">- About Me -</h2>
                <div className="aboutContainer">
                    <div className="aboutModel">
                        <Suspense>
                            <AboutModel/>
                        </Suspense>

                    </div>
                    <div className="aboutContent">
                        <h2 className="aboutDescriptiontitle">Hi There !</h2>
                        <h3 className="aboutDescription">Welcome to my portfolio! I'm a dedicated programmer 
                        with a love for coding and a competitive athlete with a drive for excellence. 
                        Explore my work to see how I combine my technical skills and sportsmanship to tackle 
                        challenges both in the digital world and on the field. From software projects to personal 
                        athletic achievements, I'm excited to share my journey of pushing boundaries and achieving 
                        success in two diverse but equally rewarding domains.</h3>
                        <div className="cvButton">
                            <a href={MyCv} download="Dand_cv.pdf">
                                My Cv
                            </a>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}