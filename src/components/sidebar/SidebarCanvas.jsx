import { Canvas } from "@react-three/fiber";
import Sidebar from "./Sidebar";
import SidebarModel from "./SidebarModel";
import { Suspense } from "react";

export default function SidebarCanvas(){
    return(
        <>
            <Canvas
                camera={{position:[0,10,40], fov: 25}}
            >
                <Suspense>
                    <SidebarModel/>
                </Suspense>
               
            </Canvas>
        </>
    )
}