// 選單動畫
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('toggle');
    navLinks.classList.toggle('active');
});

// GSAP 動畫
gsap.from('.hero-text h1', { opacity: 0, y: 60, duration: 1.2, delay: 0.3 });
gsap.from('.hero-text p', { opacity: 0, y: 40, duration: 1, delay: 0.6 });
gsap.from('.nav-links a', { opacity: 0, x: 30, duration: 0.5, stagger: 0.1, delay: 0.8 });
gsap.from('.gallery-item', { opacity: 0, y: 50, duration: 0.8, stagger: 0.2, scrollTrigger: {
    trigger: '.gallery',
    start: 'top 80%'
}});

// Three.js 3D 場景
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

camera.position.z = 6;

// 簡單幾何體模擬無人機
const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
const material = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true });
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

// 環境光
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// 動畫循環
function animate() {
    requestAnimationFrame(animate);
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// 響應式調整
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});