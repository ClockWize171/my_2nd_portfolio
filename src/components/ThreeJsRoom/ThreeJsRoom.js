import React, { Suspense, useRef } from 'react'
import { Container, Spinner, Box, Divider, useColorModeValue } from '@chakra-ui/react'
import { Canvas, useLoader, useFrame } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei"

const ThreeJsRoom = () => {

  const Model = () => {
    const gltf = useLoader(GLTFLoader, "./cute_computer.glb");
    return (
      <>
        <primitive
          object={gltf.scene}
          scale={2.5} />
      </>
    );
  };

  const Light = () => {
    return (
      <>
        {/* Ambient Light illuminates lights for all objects */}
        <ambientLight intensity={0.3} />
        {/* Diretion light */}
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/* Spotlight Large overhead light */}
        <spotLight intensity={1} position={[1000, 0, 0]} castShadow />
      </>
    )
  }

  const LoadingSpinner = () => {
    return (
      <Box pt='10vh' align='center'>
        <Spinner size='xl' />
      </Box>
    )
  }

  function RotatingRoom() {
    const ref = useRef();
    useFrame(({ clock }) => {
      const a = clock.getElapsedTime();
      ref.current.rotation.y = a * 0.35;
    });

    return (
      <mesh ref={ref} position={[0, -1.8, 0]}>
        <Model />
      </mesh>
    );
  }

  return (
    <Container pt={5} maxW='container.sm'>
      <Suspense fallback={<LoadingSpinner />}>
        <Canvas
          camera={{ position: [3, 0, 5] }}
          style={{ weight: '400px', height: '300px' }}>
          <Light />
          <RotatingRoom />
          <OrbitControls enablePan={false} />
        </Canvas>
      </Suspense>
      <Divider
        borderColor={useColorModeValue("gray.400", 'gray.100')}
        paddingTop="3vh" />
    </Container>
  )
}

export default ThreeJsRoom