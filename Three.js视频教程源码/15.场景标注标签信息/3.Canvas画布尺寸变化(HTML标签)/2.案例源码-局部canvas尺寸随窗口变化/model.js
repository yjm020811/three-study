import * as THREE from 'three';
// 引入CSS2模型对象CSS2DObject
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
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



const div = document.getElementById('tag');
// HTML元素转化为threejs的CSS2模型对象
const tag = new CSS2DObject(div);
tag.position.set(100,0,0);

const group = new THREE.Group();
group.add(mesh1,mesh2,mesh3);

group.add(tag);


export default group;