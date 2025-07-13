//@ts-ignore
import Badge from '../badge/Badge'
import { Canvas, useThree } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import './Profile.css'

function Profile() {
    // var camDistance = 13
    // const { viewPort } = useThree()
    // if (viewport.width < 1000){
    //     camDistance = 10
    // }
    return(
        <div className="profile-container">
            <Canvas camera={{ position: [0, 0, 13], fov: 15 }}>
                <ambientLight intensity={150} />
                <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
                    <Badge />
                </Physics>
            </Canvas>
        </div>
    )
}

export default Profile;

