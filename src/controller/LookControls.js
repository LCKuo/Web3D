import { useEffect } from 'react'
import { useThree } from 'react-three-fiber'
import { Euler } from 'three'

const euler = new Euler(0, 0, 0, 'YXZ')

export default function LookControls({ enabled }) {
    const { camera, gl } = useThree()
    useEffect(() => {
        const state = {
            prev: { screenX: null, screenY: null },
        }
        const onMouseDown = (e) => {

        }
        const onMouseUp = () => {
        }
        const onMouseMove = (e) => {
            const dx = e.screenX - state.prev.screenX
            const dy = e.screenY - state.prev.screenY
            euler.setFromQuaternion(camera.quaternion)
            euler.y -= dx * 0.002
            euler.x -= dy * 0.002
            camera.quaternion.setFromEuler(euler)
            state.prev.screenX = e.screenX
            state.prev.screenY = e.screenY
        }
        gl.domElement.addEventListener('mousemove', onMouseMove)
        gl.domElement.addEventListener('mousedown', onMouseDown)
        gl.domElement.addEventListener('mouseup', onMouseUp)
    }, [camera, gl])
    return null
}
