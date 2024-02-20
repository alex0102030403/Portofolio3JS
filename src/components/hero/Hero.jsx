
import HeroImg from "../../images/img9.jpeg";
import "./Hero.css";
import Typewriter from "typewriter-effect";
import HeroModel from "./HeroModel";
import { Suspense } from "react";

export default function Hero(){


    return(
        <>
        <section className="heroSection" id="hero">
            <div className="hero">
                <img src={HeroImg} />
                <div className="heroModel">
                    <Suspense>
                        <HeroModel/>
                    </Suspense>
                    
                </div>
            </div>
            <div className="heroContent">
                <h2>
                    Hi, I'm
                    <Typewriter
                    options={{
                        strings: ["Man Alexandru","Software Developer !","Part time Athlete !", "Chill Guy !"],
                        autoStart: true,
                        loop: true
                    }}
                    />
                </h2>
            </div>
        </section>
        </>
    )
}