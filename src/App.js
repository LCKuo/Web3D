import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Car from './Car'
import { FBXLoader } from 'three-stdlib'
import ModelA from './M'
import ModelB from './Env'
import ModelC from './Env2'
export default function App() {
  return (
    <Canvas gl={{ toneMappingExposure: 0.7 }}>
      <Suspense fallback={null}>
        <Environment files="/old_depot_2k.hdr" background />
        <spotLight angle={40} position={[-80, 200, -100]} intensity={1} />
        <Car position={[-8, 0, -2]} scale={20} rotation-y={-Math.PI / 4} />
        <ModelA position={[30, 0, 40]} scale={20} />
        <ModelC position={[0, -15, 0]} scale={20} />

        <ContactShadows renderOrder={2} frames={1} resolution={1024} scale={120} blur={2} opacity={0.6} far={100} />
      </Suspense>
      <OrbitControls enableZoom={true} enablePan={true} minPolarAngle={0} maxPolarAngle={Math.PI / 2.25} makeDefault />
      <PerspectiveCamera makeDefault position={[-50, 30, 120]} fov={60} />
    </Canvas>
  )
}

function Model({ url, ...props }) {
  const scene = useLoader(FBXLoader, url)
  return <primitive object={scene} {...props} />
}