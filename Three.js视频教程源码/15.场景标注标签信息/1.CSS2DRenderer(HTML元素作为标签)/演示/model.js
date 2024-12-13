import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(40, 40, 40);
const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff,
});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(50,0,50);
const group = new THREE.Group();
group.add(mesh);


export default group;