import { Environment, OrbitControls, useGLTF ,PresentationControls} from "@react-three/drei"



export default function SidebarModel(){

    const model = useGLTF("./models/ball.glb")

    return(
        <>
            <Environment preset="forest"/>
            <PresentationControls
            polar={[-1, 1.5]}
            azimuth={[-2.4, 2]}
            config={{mass: 2, tension: 100}}
            snap={{mass: 2, tension: 100}}
            >
            <primitive object={model.scene}
                       scale={70}
                       position={[-2, -7.5, 0]}
                       rotation={[0,-5,0]}
                       >

            </primitive>

            </PresentationControls>
        </>
    )
}