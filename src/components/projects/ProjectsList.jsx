
import { useState } from "react"
import { FcExpand,FcCollapse } from "react-icons/fc"

export default function ProjectsList({name, des, techused}){

    const [show,setShow] = useState(false);

    const handleShowAndCollapse = () => {
        setShow(!show);
    }

    return(

        <>
            <div className="projectsList" onClick={handleShowAndCollapse}>
                <div className="titleAndCollapseOption">
                    <h2>{name}</h2>
                    <p>
                        {
                            show ? <FcCollapse size={20}/> : <FcExpand size={20}/>
                        }
                    </p>
                </div>

                {
                    show ? ( <p>{des}</p> ) : (
                        <div className="description">
                            <p>
                                {des.substring(0,0)}... Read More
                            </p>
                        </div>
                    )
                }
                <div className="techused">
                    {
                        techused && techused.map((tech, index) => (
                            <div className="techUsedInProjects">
                                <p>{tech.techname}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )

}