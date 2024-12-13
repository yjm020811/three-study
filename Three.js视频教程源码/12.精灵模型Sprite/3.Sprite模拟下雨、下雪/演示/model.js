// 引入Three.js
import * as THREE from 'three';
// 引入gltf模型加载库GLTFLoader.js
import {
    GLTFLoader
} from 'three/addons/loaders/GLTFLoader.js';


const loader = new GLTFLoader(); //创建一个GLTF加载器

const model = new THREE.Group(); 

loader.load("../工厂.glb", function (gltf) { 
    model.add(gltf.scene);
})

const texture = new THREE.TextureLoader().load("./雨滴.png");
const spriteMaterial = new THREE.SpriteMaterial({
    map: texture, 
});
const sprite = new THREE.Sprite(spriteMaterial);
sprite.position.set(0, 40, 0);
sprite.scale.set(10,10,1)

model.add(sprite);

export default model;