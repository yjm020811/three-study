import * as THREE from 'three';

// mesh顶部中心添加标注，顶部中心坐标是(0,100,0)
const geometry = new THREE.BoxGeometry(25, 100, 50);
geometry.translate(0, 50, 0);
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
});
const mesh = new THREE.Mesh(geometry, material);

const group = new THREE.Group();
group.add(mesh);



export default group;