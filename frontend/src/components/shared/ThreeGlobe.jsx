import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeGlobe() {
  const mountRef = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const w = el.clientWidth || 400;
    const h = el.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    // Outer wireframe icosahedron
    const outerGeo = new THREE.IcosahedronGeometry(1.85, 3);
    const outerMat = new THREE.MeshBasicMaterial({ color: 0x3db256, wireframe: true, transparent: true, opacity: 0.22 });
    const outer = new THREE.Mesh(outerGeo, outerMat);
    scene.add(outer);

    // Inner slower wireframe (counter-rotates)
    const innerGeo = new THREE.IcosahedronGeometry(1.2, 2);
    const innerMat = new THREE.MeshBasicMaterial({ color: 0x86efac, wireframe: true, transparent: true, opacity: 0.15 });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    scene.add(inner);

    // Soft glow core sphere
    const coreGeo = new THREE.SphereGeometry(0.9, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x3db256, transparent: true, opacity: 0.05 });
    scene.add(new THREE.Mesh(coreGeo, coreMat));

    // Orbiting ring 1 — horizontal equator dots
    const ORBIT_COUNT = 60;
    const buildOrbit = (radius, tilt, color, size) => {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(ORBIT_COUNT * 3);
      for (let i = 0; i < ORBIT_COUNT; i++) {
        const a = (i / ORBIT_COUNT) * Math.PI * 2;
        pos[i * 3]     = Math.cos(a) * radius;
        pos[i * 3 + 1] = Math.sin(a) * radius * tilt;
        pos[i * 3 + 2] = Math.sin(a) * radius * (1 - Math.abs(tilt));
      }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({ size, color, transparent: true, opacity: 0.85 });
      return new THREE.Points(geo, mat);
    };

    const ring1 = buildOrbit(2.2, 0.05, 0x86efac, 0.06);
    const ring2 = buildOrbit(2.0, 0.5, 0x3db256, 0.045);
    const ring3 = buildOrbit(2.4, -0.35, 0x4ade80, 0.035);
    scene.add(ring1);
    scene.add(ring2);
    scene.add(ring3);

    // Floating ambient particles
    const ambGeo = new THREE.BufferGeometry();
    const AMB = 40;
    const ambPos = new Float32Array(AMB * 3);
    for (let i = 0; i < AMB; i++) {
      const r = 2.2 + Math.random() * 0.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      ambPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      ambPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      ambPos[i * 3 + 2] = r * Math.cos(phi);
    }
    ambGeo.setAttribute('position', new THREE.BufferAttribute(ambPos, 3));
    const ambMat = new THREE.PointsMaterial({ size: 0.04, color: 0x3db256, transparent: true, opacity: 0.6 });
    scene.add(new THREE.Points(ambGeo, ambMat));

    // Mouse-responsive rotation
    let targetRotX = 0, targetRotY = 0;
    const onMouse = (e) => {
      const rect = el.getBoundingClientRect();
      targetRotY = ((e.clientX - rect.left) / rect.width  - 0.5) * 0.6;
      targetRotX = ((e.clientY - rect.top)  / rect.height - 0.5) * 0.4;
    };
    const parentEl = el.closest('.mncfix-hero') || el.parentElement;
    parentEl?.addEventListener('mousemove', onMouse);

    let t = 0, frameId, curRotX = 0, curRotY = 0;

    function animate() {
      frameId = requestAnimationFrame(animate);
      t += 0.006;

      // Smooth mouse follow
      curRotX += (targetRotX - curRotX) * 0.05;
      curRotY += (targetRotY - curRotY) * 0.05;

      outer.rotation.y = t * 0.35 + curRotY;
      outer.rotation.x = t * 0.12 + curRotX;

      inner.rotation.y = -t * 0.5;
      inner.rotation.z = t * 0.2;

      ring1.rotation.y = t * 0.55;
      ring1.rotation.x = Math.sin(t * 0.25) * 0.15;

      ring2.rotation.y = -t * 0.38;
      ring2.rotation.z = t * 0.18;

      ring3.rotation.y = t * 0.28;
      ring3.rotation.x = -t * 0.15;

      renderer.render(scene, camera);
    }

    animate();

    const onResize = () => {
      const nw = el.clientWidth || 400;
      const nh = el.clientHeight || 400;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
      parentEl?.removeEventListener('mousemove', onMouse);
      [outerGeo, outerMat, innerGeo, innerMat, coreGeo, coreMat, ambGeo, ambMat].forEach(o => o.dispose());
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{ width: '100%', height: '100%', display: 'block', minHeight: 260 }}
    />
  );
}
