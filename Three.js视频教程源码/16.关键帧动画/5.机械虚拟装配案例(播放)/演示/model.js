// 引入Three.js
import * as THREE from 'three';
// 引入gltf模型加载库GLTFLoader.js
import {
    GLTFLoader
} from 'three/addons/loaders/GLTFLoader.js';
import {
    GUI
} from 'three/addons/libs/lil-gui.module.min.js';


const loader = new GLTFLoader();

const model = new THREE.Group(); 
const textureCube = new THREE.CubeTextureLoader()
    .setPath('./环境贴图/')
    .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']);
    textureCube.encoding = THREE.sRGBEncoding;


loader.load("../机械装配动画.glb", function (gltf) {
    gltf.scene.traverse(function (obj) {
        if (obj.isMesh) {
            obj.material.metalness = 1.0;
            obj.material.roughness = 0.35;
            obj.material.envMap = textureCube;
            obj.material.envMapIntensity = 0.5;
        }
    });
    model.add(gltf.scene);

    //包含关键帧动画的模型作为参数创建一个播放器
    const mixer = new THREE.AnimationMixer(gltf.scene);
    //  获取gltf.animations[0]的第一个clip动画对象
    const clip = gltf.animations[0];
    const clipAction = mixer.clipAction(clip); //创建动画clipAction对象
    clipAction.play(); //播放动画


    const gui = new GUI(); //创建GUI对象

    const clock = new THREE.Clock();
    function loop() {
        requestAnimationFrame(loop);
        const frameT = clock.getDelta();
        // 更新播放器相关的时间
        mixer.update(frameT);
    }
    loop();
})
export default model;