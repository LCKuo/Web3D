import { Suspense } from 'react'
import { Environment, ContactShadows } from '@react-three/drei'
import Car from '../Models/Car'
import ModelA from '../Models/M'
import ModelHall from '../Models/EnvFinal'
import { Grass } from '../GrassEffect/Grass'
import { BlobGeometry } from '../Models/BlobGeometry'



export default function Scene() {
    return (
        <Suspense fallback={null}>
            <Environment files="/old_depot_2k.hdr" background />
            <spotLight angle={40} position={[-80, 200, -100]} intensity={1} />
            <Car position={[-4, .03, -1]} scale={.7} rotation-y={-Math.PI / 4} />
            <ModelA position={[-3.6, 0, .5]} scale={.7} />

            <ModelHall position={[0, .01, 0]} scale={.3} />
            <ContactShadows renderOrder={2} frames={1} resolution={1024} scale={120} blur={2} opacity={0.6} far={100} />
        </Suspense>
    )
}