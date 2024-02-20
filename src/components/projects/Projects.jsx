import projImg from "../../images/img13.jpeg";
import "./Projects.css"
import ProjectsList from "./ProjectsList";


export default function Projects(){

    const data = [
        {
            name: "3D Portofolio",
            des: "AICI FACEM UN PORTOFOLIU FAIN CU 3D THREE JS ETC",
            projectlink: "http:asdf.com",
            techused: [
                {
                    techname: "React Js",
                },
                {
                    techname: "React Three Fiber",
                }
            ]
        },
        {
            name: "3D UNITY GAME",
            des: "AICI FACEM UN PORTOFOLIU FAIN CU 3D THREE JS ETC",
            projectlink: "http:asdf.com",
            techused: [
                {
                    techname: "React Js",
                },
                {
                    techname: "React Three Fiber",
                }
            ]
        },
        {
            name: "RENDERING ENGINE",
            des: "AICI FACEM UN PORTOFOLIU FAIN CU 3D THREE JS ETC",
            projectlink: "http:asdf.com",
            techused: [
                {
                    techname: "React Js",
                },
                {
                    techname: "React Three Fiber",
                }
            ]
        },
        {
            name: "ONLINE STORE",
            des: "AICI FACEM UN PORTOFOLIU FAIN CU 3D THREE JS ETC",
            projectlink: "http:asdf.com",
            techused: [
                {
                    techname: "React Js",
                },
                {
                    techname: "React Three Fiber",
                }
            ]
        },
        {
            name: "TRADING BOT",
            des: "AICI FACEM UN PORTOFOLIU FAIN CU 3D THREE JS ETC",
            projectlink: "http:asdf.com",
            techused: [
                {
                    techname: "React Js",
                },
                {
                    techname: "React Three Fiber",
                }
            ]
        },
        {
            name: "MULTIPLAYER SHOOTER",
            des: "AICI FACEM UN PORTOFOLIU FAIN CU 3D THREE JS ETC",
            projectlink: "http:asdf.com",
            techused: [
                {
                    techname: "React Js",
                },
                {
                    techname: "React Three Fiber",
                }
            ]
        },
    ]

    return(
        <>
            <section className="projectsContainer" id="projects">
                <h2 className="projectsTitle">- Projects -</h2>
                <img src={projImg}  />
                <div className="row">
                    {
                        data.map((item, index) => (
                            <div className="rowContent">
                                <ProjectsList {...item}/>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}