import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Sidebar from "./components/sidebar/Sidebar";
import Skills from "./components/skills/Skills";


export default function App(){

    
    return(
        <>
            <Sidebar />
            <Hero />
            <About/>
            <Skills />
            <Projects />
            <Contact />
        </> 
    )
}