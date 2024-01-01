import React from 'react'
import { Canvas } from '@react-three/fiber'

import { Environment,Center } from '@react-three/drei'

import Shirt from './Shirt'
import Backdrop from './Backdrop'
import CameraRig from './CameraRig'
import { AmbientLight } from 'three'
const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={.5} />
     <CameraRig>
      {/* <Backdrop>*/}
        <Center>
          <Shirt/>
        </Center>
      {/*</Backdrop>*/}
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel