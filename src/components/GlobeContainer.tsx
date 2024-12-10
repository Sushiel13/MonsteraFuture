import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Globe } from './Globe';

export function GlobeContainer() {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [0, 0, 2.5] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Globe />
          <OrbitControls enableZoom={false} autoRotate={true} />
        </Suspense>
      </Canvas>
    </div>
  );
}