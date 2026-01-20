// ====== THREE.JS HERO SCENE ======
import * as THREE from "https://unpkg.com/three@0.165.0/build/three.module.js";

const canvas = document.getElementById("hero-canvas");
const heroSection = document.querySelector(".hero");
let width = heroSection.clientWidth;
let height = heroSection.clientHeight;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x02040a, 0.008);

const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
camera.position.set(0, 0, 9);

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true,
});
renderer.setSize(width, height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Geometry: abstract wireframe shape (icosahedron + noise)
const geometry = new THREE.IcosahedronGeometry(3, 3);
const positionAttr = geometry.attributes.position;
const vertex = new THREE.Vector3();
for (let i = 0; i < positionAttr.count; i++) {
  vertex.fromBufferAttribute(positionAttr, i);
  const noise = (Math.sin(vertex.x * 2.1) + Math.cos(vertex.y * 3.7)) * 0.16;
  vertex.addScaledVector(vertex.clone().normalize(), noise);
  positionAttr.setXYZ(i, vertex.x, vertex.y, vertex.z);
}
positionAttr.needsUpdate = true;

const material = new THREE.MeshBasicMaterial({
  color: 0x46e6ff,
  wireframe: true,
  transparent: true,
  opacity: 0.6,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// A few background particles
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 800;
const positions = new Float32Array(particlesCount * 3);
for (let i = 0; i < particlesCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 40;
}
particlesGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(positions, 3)
);
const particlesMaterial = new THREE.PointsMaterial({
  size: 0.04,
  color: 0x46e6ff,
  transparent: true,
  opacity: 0.7,
});
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

const clock = new THREE.Clock();

function animate() {
  const elapsed = clock.getElapsedTime();
  mesh.rotation.y = elapsed * 0.15;
  mesh.rotation.x = Math.sin(elapsed * 0.1) * 0.15;
  particles.rotation.y = elapsed * 0.02;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();

function onResize() {
  width = heroSection.clientWidth;
  height = heroSection.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

window.addEventListener("resize", onResize);

// ====== SUBTLE PARALLAX ======
const parallaxElements = document.querySelectorAll("[data-parallax]");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY || window.pageYOffset;
  parallaxElements.forEach((el) => {
    const speed = parseFloat(el.getAttribute("data-parallax-speed") || "0.05");
    const offset = scrollY * speed;
    el.style.transform = `translateY(${offset * -1}px)`; // subtle upward parallax
  });
});
