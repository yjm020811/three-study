import * as THREE from 'three';


const geometry = new THREE.BoxGeometry(15, 15, 15);
const material = new THREE.MeshLambertMaterial({
    color: 0xff0000
});
const mesh = new THREE.Mesh(geometry, material);

mesh.name = "Box";

const times = [0, 3, 6]; //时间轴上，设置三个时刻0、3、6秒
// times中三个不同时间点，物体分别对应values中的三个xyz坐标
const values = [0, 0, 0, 100, 0, 0, 0, 0, 100];
const posKF = new THREE.KeyframeTrack('Box.position',times,values);
// 从2秒到5秒，物体从红色逐渐变化为蓝色
const colorKF = new THREE.KeyframeTrack('Box.material.color', [2, 5], [1, 0, 0, 0, 0, 1]);

// 动画定义好了
const clip = new THREE.AnimationClip("test",6,[posKF, colorKF]);

// 播放动画

//包含关键帧动画的模型对象作为AnimationMixer的参数创建一个播放器mixer
const mixer = new THREE.AnimationMixer(mesh);
const clipAction = mixer.clipAction(clip); 
//.play()控制动画播放，默认循环播放
clipAction.play();

// 循环执行的函数
const clock = new THREE.Clock();
function loop() {
    requestAnimationFrame(loop);
     //clock.getDelta()方法获得loop()两次执行时间间隔
     const frameT = clock.getDelta();
     // 更新播放器相关的时间
    mixer.update(frameT);
}
loop();


export default mesh;