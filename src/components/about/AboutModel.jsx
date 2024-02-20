import { Environment, OrbitControls, useAnimations, useGLTF,PresentationControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";



export default function AboutModel(){

const contactModel = useGLTF("./models/miror3.glb");

return(
    <>
        <Canvas
        camera={{position: [0, 10 , 40], fov:25}}
        >
            <Environment preset="night"/>
            <PresentationControls
            polar={[-1, 1.5]}
            azimuth={[-2.4, 2]}
            config={{mass: 2, tension: 100}}
            snap={{mass: 2, tension: 100 }}
            >
        <primitive
        object={contactModel.scene}
        scale={0.25}
        position={[0,-7,0]}
        />
            </PresentationControls>
        </Canvas>
    </>
)

}