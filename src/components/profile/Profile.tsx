//@ts-ignore
import Badge from '../badge/Badge'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import ContactInfo from '../ContactInfo/ContactInfo'
import './Profile.css'

function Profile() {
    return(
        <div className="profile-container">
            <Canvas camera={{ position: [0, 0, 13], fov: 15 }}>
                <ambientLight intensity={150} />
                <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
                    <Badge />
                </Physics>
            </Canvas>
            <ContactInfo />
        </div>
    )
}

export default Profile;

