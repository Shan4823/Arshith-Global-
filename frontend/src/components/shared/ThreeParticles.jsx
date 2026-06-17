import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeParticles({ count = 80 }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const w = el.clientWidth || window.innerWidth;
    const h = el.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
    camera.position.z = 90;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    // Particle positions and velocities
    const posArr = new Float32Array(count * 3);
    const velArr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      posArr[i * 3]     = (Math.random() - 0.5) * 170;
      posArr[i * 3 + 1] = (Math.random() - 0.5) * 110;
      posArr[i * 3 + 2] = (Math.random() - 0.5) * 20;
      velArr[i * 3]     = (Math.random() - 0.5) * 0.055;
      velArr[i * 3 + 1] = (Math.random() - 0.5) * 0.055;
    }

    const ptGeo = new THREE.BufferGeometry();
    ptGeo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
    const ptMat = new THREE.PointsMaterial({ size: 1.4, color: 0x3db256, transparent: true, opacity: 0.65 });
    scene.add(new THREE.Points(ptGeo, ptMat));

    // Efficient line segments — single geometry, update draw range each frame
    const MAX_SEGS = count * 5;
    const linePosArr = new Float32Array(MAX_SEGS * 6);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePosArr, 3));
    lineGeo.setDrawRange(0, 0);
    const lineMat = new THREE.LineBasicMaterial({ color: 0x3db256, transparent: true, opacity: 0.16 });
    scene.add(new THREE.LineSegments(lineGeo, lineMat));

    const THRESHOLD_SQ = 30 * 30;
    let frameId;

    function animate() {
      frameId = requestAnimationFrame(animate);

      for (let i = 0; i < count; i++) {
        const ix = i * 3;
        posArr[ix]     += velArr[ix];
        posArr[ix + 1] += velArr[ix + 1];
        if (Math.abs(posArr[ix])     > 86) velArr[ix]     *= -1;
        if (Math.abs(posArr[ix + 1]) > 56) velArr[ix + 1] *= -1;
      }
      ptGeo.attributes.position.needsUpdate = true;

      let segCount = 0;
      for (let i = 0; i < count && segCount < MAX_SEGS; i++) {
        for (let j = i + 1; j < count && segCount < MAX_SEGS; j++) {
          const dx = posArr[i * 3] - posArr[j * 3];
          const dy = posArr[i * 3 + 1] - posArr[j * 3 + 1];
          if (dx * dx + dy * dy < THRESHOLD_SQ) {
            const b = segCount * 6;
            linePosArr[b]     = posArr[i * 3];
            linePosArr[b + 1] = posArr[i * 3 + 1];
            linePosArr[b + 2] = posArr[i * 3 + 2];
            linePosArr[b + 3] = posArr[j * 3];
            linePosArr[b + 4] = posArr[j * 3 + 1];
            linePosArr[b + 5] = posArr[j * 3 + 2];
            segCount++;
          }
        }
      }
      lineGeo.attributes.position.needsUpdate = true;
      lineGeo.setDrawRange(0, segCount * 2);

      renderer.render(scene, camera);
    }

    animate();

    const onResize = () => {
      const nw = el.clientWidth || window.innerWidth;
      const nh = el.clientHeight || 500;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
      ptGeo.dispose();
      ptMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}
    />
  );
}
