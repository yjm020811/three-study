import * as THREE from 'three';
// 引入gltf模型加载库GLTFLoader.js
import {
    GLTFLoader
} from 'three/addons/loaders/GLTFLoader.js';
// 引入CSS2模型对象CSS2DObject
import {
    CSS2DObject
} from 'three/addons/renderers/CSS2DRenderer.js';

const loader = new GLTFLoader(); //创建一个GLTF加载器
const model = new THREE.Group();

loader.load("../工厂.glb", function (gltf) {
    model.add(gltf.scene);
    const div = document.getElementById('tag');
    // HTML元素转化为threejs的CSS2模型对象
    const tag = new CSS2DObject(div);
})

export default model;