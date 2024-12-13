import * as THREE from 'three';
// 引入gltf模型加载库GLTFLoader.js
import {
    GLTFLoader
} from 'three/addons/loaders/GLTFLoader.js';


const loader = new GLTFLoader(); //创建一个GLTF加载器
const model = new THREE.Group();

loader.load("../工厂.glb", function (gltf) {
    model.add(gltf.scene);
    const texLoader= new THREE.TextureLoader();
    const texture = texLoader.load("./警告.png");
    const spriteMaterial = new THREE.SpriteMaterial({
      map: texture,
    });
    const sprite = new THREE.Sprite(spriteMaterial);
    // 控制精灵大小
    sprite.scale.set(5, 5, 1);
    sprite.position.y = 5 / 2; //标签底部箭头和空对象标注点重合  
    const obj = gltf.scene.getObjectByName('设备A标注');// obj是建模软件中创建的一个空对象
    obj.add(sprite);//tag会标注在空对象obj对应的位置
})

export default model;