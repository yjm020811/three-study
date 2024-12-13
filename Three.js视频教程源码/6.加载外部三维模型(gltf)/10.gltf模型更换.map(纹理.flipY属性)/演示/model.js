// 引入Three.js
import * as THREE from 'three';
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const loader = new GLTFLoader(); //创建一个GLTF加载器

const model = new THREE.Group(); //声明一个组对象，用来添加加载成功的三维场景


const texLoader = new THREE.TextureLoader();
// 加载手机mesh另一个颜色贴图
const texture = texLoader.load('./黑色.png');


console.log('texture.flipY', texture.flipY);
loader.load("../手机模型.glb", function (gltf) { 
    // console.log('gltf.scene',gltf.scene);
    model.add(gltf.scene); 
})

export default model;
