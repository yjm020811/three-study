import * as THREE from 'three';
import {
    GLTFLoader
} from 'three/addons/loaders/GLTFLoader.js';


const loader = new GLTFLoader();
const model = new THREE.Group();
loader.load("../士兵.glb", function (gltf) {
    console.log('控制台查看gltf对象结构', gltf);
    model.add(gltf.scene);


    const mixer = new THREE.AnimationMixer(gltf.scene);
    // gltf.animations[0] Idle  休息
    // gltf.animations[1] Run   跑步
    // gltf.animations[2] TPose T形静止展开
    // gltf.animations[3] Walk  走路
    const clipAction = mixer.clipAction(gltf.animations[3]);
    clipAction.play(); //播放动画


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