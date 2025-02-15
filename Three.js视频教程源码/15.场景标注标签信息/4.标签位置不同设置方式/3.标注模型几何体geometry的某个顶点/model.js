import * as THREE from 'three';
// 引入CSS2模型对象CSS2DObject
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

const geometry = new THREE.BoxGeometry(40, 40, 40);
const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff,
});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(50,0,50);

const div = document.getElementById('tag');
// HTML元素转化为threejs的CSS2模型对象
const tag = new CSS2DObject(div);
//标签tag作为mesh子对象，默认受到父对象位置影响
mesh.add(tag);

const pos = geometry.attributes.position;
tag.position.set(pos.getX(0),pos.getY(0),pos.getZ(0));
// mesh.position.x += pos.getX(0);
// mesh.position.y += pos.getY(0);
// mesh.position.z += pos.getZ(0);

const group = new THREE.Group();
group.add(mesh);


export default group;