//@ts-ignore
import Badge from '../badge/Badge'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Environment, Lightformer } from '@react-three/drei'
import ContactInfo from '../ContactInfo/ContactInfo'
import './Profile.css'

function Profile() {
    return(
        <div className="profile-container">
            <Canvas camera={{ position: [0, 0, 13], fov: 25 }}>
                <ambientLight intensity={Math.PI} />
                <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
                    <Badge />
                </Physics>
                <Environment background blur={0.75}>
        <color attach="background" args={['#181a20']} />
        <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
        <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
        <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
        <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
      </Environment>
            </Canvas>
            <ContactInfo />
        </div>
    )
}

export default Profile;

