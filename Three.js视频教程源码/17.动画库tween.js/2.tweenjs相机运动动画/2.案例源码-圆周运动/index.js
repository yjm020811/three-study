import * as THREE from 'three';
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';
import TWEEN from '@tweenjs/tween.js';
import model from './model.js'; //模型对象

//场景
const scene = new THREE.Scene();
scene.add(model); //模型对象添加到场景中


//辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);


//光源设置
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(100, 60, 50);
scene.add(directionalLight);
const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);


//相机
const width = window.innerWidth;
const height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
camera.position.set(202, 123, 125);
camera.lookAt(0, 0, 0);


const R = 100; //相机圆周运动的半径
new TWEEN.Tween({angle:0})
.to({angle: Math.PI*2}, 16000)
.onUpdate(function(obj){
    camera.position.x = R * Math.cos(obj.angle);
    camera.position.z = R * Math.sin(obj.angle);
    camera.lookAt(0, 0, 0);
})
.start()


// WebGL渲染器设置
const renderer = new THREE.WebGLRenderer({
    antialias: true, //开启优化锯齿
});
renderer.setPixelRatio(window.devicePixelRatio); //防止输出模糊
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
//解决加载gltf格式模型颜色偏差问题
renderer.outputEncoding = THREE.sRGBEncoding;


// 渲染循环
function render() {
    TWEEN.update();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();


const controls = new OrbitControls(camera, renderer.domElement);

// 画布跟随窗口变化
window.onresize = function () {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
};

