// 通用方法
const $$ = function(id) {
	return document.getElementById(id);
}

// 每一格的间距，即每一个小方块的尺寸
const Spacing = 20;

// 各种方块形状的编号，0代表没有形状
const NoShape = 0;
// 各种方块形状的数据描述
const Shapes = [
	[ [0,0], [0,0], [0,0], [0,0] ],
	[ [0,-1], [0,0], [1,0], [1,1] ],
	[ [0,-1], [0,0], [-1,0], [-1,0] ],
	[ [0,-1], [0,0], [0,1], [0,2] ],
	[ [-1,0], [0,0], [1,0], [0,1] ],
	[ [0,0], [1,0], [0,1], [1,1] ],
	[ [-1,-1], [0,-1], [0,0], [0,1] ],
	[ [1,-1], [0,-1], [0,0], [0,1] ]
];
// 各种方块形状的颜色
const Colors = ["black", "fuchsia", "#cff", "red", "orange", "aqua", "green", "yellow"];

var loop_interval = null;

// // 渲染格子背景
// window.utils.drawBackground = function() {
// 	let cnv = $$('canvas');
// 	let cxt = cnv.getContext('2d');

// 	// 设置背景颜色
// 	cxt.fillStyle = "#c0c0c0";
// 	cxt.fillRect(0, 0, 300, 600);

// 	// 绘画网格
// 	for(let i=30; i<cnv.height; i+=30) {
// 		cxt.beginPath();
// 		cxt.moveTo(0, i);
// 		cxt.lineTo(cnv.width, i);
// 		cxt.strokeStyle = '#f2f2f2';
// 		cxt.stroke();
// 		cxt.closePath();
// 	}

// 	for(let j=30; j<cnv.height; j+=30) {
// 		cxt.beginPath();
// 		cxt.moveTo(j, 0);
// 		cxt.lineTo(j, cnv.height);
// 		cxt.strokeStyle = '#f2f2f2';
// 		cxt.stroke();
// 		cxt.closePath();
// 	}

// }

// //获取随机颜色值
// window.utils.getRandomColor = function(){
//   return '#' +
//   (function (color) {
//       return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)])
//       && (color.length == 6) ? color : arguments.callee(color);
//   })('');
// }


// //碰撞检测（外接矩形判定法）
// window.utils.checkRect = function(rectA, rectB) {
// 	return !(rectA.x + rectA.width < rectB.x ||
// 					 rectA.y + rectA.height < rectB.y ||
// 					 rectB.x + rectB.width < rectA.x ||
// 					 rectB.y + rectB.height < rectA.y);
// }










