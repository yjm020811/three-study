// 引入Three.js
import * as THREE from 'three';
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const loader = new GLTFLoader(); //创建一个GLTF加载器

const model = new THREE.Group(); //声明一个组对象，用来添加加载成功的三维场景

loader.load("../../工厂.glb", function (gltf) { 
    // 查看gltf所有颜色贴图的.encoding值
    gltf.scene.traverse(function(obj) {
        if (obj.isMesh) {
            if(obj.material.map){//判断是否存在贴图
                console.log('obj.material.map.encoding',obj.material.map.encoding);
            }
        }
    });
    model.add(gltf.scene); 
})

// 工厂三维场景中添加一个球体
const geometry = new THREE.SphereGeometry(20);
const texLoader = new THREE.TextureLoader();
const texture = texLoader.load('./earth.jpg');
// texture.encoding = THREE.LinearEncoding;//默认值
//设置纹理对象.encoding和webgl渲染器renderer.outputEncoding一致
texture.encoding = THREE.sRGBEncoding;
console.log('texture.encoding',texture.encoding);
const material = new THREE.MeshLambertMaterial({
    map: texture,
});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.y+=20;
model.add(mesh);


export default model;
