import { Environment, PresentationControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


export default function SkillsModel(){

    const skillsModel = useGLTF("./models/coffe.glb");

    return(
        <>
            <Canvas
        camera={{position: [0, 10 , 40], fov:25}}
        >
            <Environment preset="studio"/>
            <PresentationControls
            polar={[-1, 1.5]}
            azimuth={[-2.4, 2]}
            config={{mass: 2, tension: 100}}
            snap={{mass: 2, tension: 100}}
            >
        <primitive
        object={skillsModel.scene}
        scale={1}
        position={[0,-4,-3]}
        />
            </PresentationControls>
        </Canvas>
        </>
    )
}