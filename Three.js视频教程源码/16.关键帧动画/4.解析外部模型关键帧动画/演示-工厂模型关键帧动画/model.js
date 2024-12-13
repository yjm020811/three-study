
import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';


const loader = new GLTFLoader(); 
const model = new THREE.Group(); 
loader.load("../工厂.glb", function (gltf) { 
    console.log('控制台查看gltf对象结构', gltf);
    // console.log('动画数据', gltf.animations);
    model.add(gltf.scene); 

})


export default model;