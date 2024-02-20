import { Environment, PresentationControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";



export default function HeroModel(){

    const heroModel = useGLTF("./models/pc2.glb");

    return(
        <>
        <Canvas camera={{position: [0,10,40] ,fov: 25}} >
            <Environment preset="city"/>
            <PresentationControls
            polar={[-1, 1.5]}
            azimuth={[-2.4, 2]}
            config={{mass: 2, tension: 100}}
            snap={{mass: 2, tension: 100}}
            >
        <primitive
            object={heroModel.scene}
            scale={1}
            position={[2,-3,0]}
            rotation={[-0.1, -1.55, 0]}

        />
        </PresentationControls>
        </Canvas>
        
        </>
    )
}