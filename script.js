// 選單動畫
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

// GSAP 動畫
gsap.from('.hero-text', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from('.nav-links a', { opacity: 0, x: 50, duration: 0.5, stagger: 0.1 });

// Three.js 3D 場景
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.z = 5;

// 簡單立方體作為無人機模擬
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 動畫循環
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// 響應式窗口調整
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});