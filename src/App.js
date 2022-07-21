import { Canvas } from '@react-three/fiber'
import { OrbitControls, FirstPersonControls, PerspectiveCamera } from '@react-three/drei'
import Scene from './scene/Scene'
import WasdControls from './controller/WasdControls'
import LookControls from './controller/LookControls'


import { Physics } from "@react-three/cannon"
import { PointerLockControls } from "@react-three/drei"
import { Ground } from "./Ground"
import { Player } from "./Player"

export default function App() {

  return (
    <Canvas gl={{ toneMappingExposure: 0.7 }}>
      <Scene />
      <Physics gravity={[0, -30, 0]}>
        <Ground />
        <Player />
      </Physics>
      <PointerLockControls />
    </Canvas>
  )
}
