import { Canvas } from '@react-three/fiber'
import { OrbitControls, FirstPersonControls, PerspectiveCamera } from '@react-three/drei'
import Scene from './scene/Scene'

export default function App() {
  return (
    <Canvas gl={{ toneMappingExposure: 0.7 }}>
      <Scene />
      <OrbitControls enableZoom={true} enablePan={true} minPolarAngle={0} maxPolarAngle={Math.PI / 2.25} makeDefault />
      <PerspectiveCamera makeDefault position={[-50, 30, 120]} fov={60} />
    </Canvas>
  )
}
