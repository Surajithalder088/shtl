import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Room(props) {
  const { scene } = useGLTF('/models/room.glb')
  const modelRef = useRef()

  useFrame((state, delta) => {
    if (!modelRef.current) return

    // 🌍 ultra slow smooth rotation
    modelRef.current.rotation.y += delta * 0.1
  })

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={1}
      position={[0, -1, 0]}
      {...props}
    />
  )
}

useGLTF.preload('/models/room.glb')