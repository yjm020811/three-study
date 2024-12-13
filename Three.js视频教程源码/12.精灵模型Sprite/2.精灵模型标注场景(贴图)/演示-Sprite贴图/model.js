import * as THREE from 'three';


// 创建精灵材质对象SpriteMaterial
const spriteMaterial = new THREE.SpriteMaterial({
  color:0x00ffff,//设置颜色
});
const sprite = new THREE.Sprite(spriteMaterial);


// 控制精灵大小
sprite.scale.set(10, 10, 1);

export default sprite;