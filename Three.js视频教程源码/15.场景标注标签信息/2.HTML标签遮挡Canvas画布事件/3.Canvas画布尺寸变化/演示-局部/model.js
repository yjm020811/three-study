import * as THREE from 'three';
const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshLambertMaterial({
    color: 0x009999,
});
const mesh1 = new THREE.Mesh(geometry, material);

const mesh2 = mesh1.clone();
mesh2.material = new THREE.MeshLambertMaterial({color: 0x999900,});
mesh2.position.y = 100;
const mesh3 = mesh1.clone();
mesh3.material = new THREE.MeshLambertMaterial({color: 0x990099,});
mesh3.position.x = 100;

const group = new THREE.Group();
group.add(mesh1,mesh2,mesh3);

export default group;