// 通用方法
const $$ = function(id) {
	return document.getElementById(id);
}

// 渲染格子背景
const drawBackground = function() {
	let cnv = $$('canvas');
	let cxt = cnv.getContext('2d');

	// 设置背景颜色
	cxt.fillStyle = "#68bfe8";
	cxt.fillRect(0, 0, 300, 600);

	// 绘画网格
	for(let i=30; i<cnv.height; i+=30) {
		cxt.beginPath();
		cxt.moveTo(0, i);
		cxt.lineTo(cnv.width, i);
		cxt.strokeStyle = '#c3e0e4';
		cxt.stroke();
		cxt.closePath();
	}

	for(let j=30; j<cnv.height; j+=30) {
		cxt.beginPath();
		cxt.moveTo(j, 0);
		cxt.lineTo(j, cnv.height);
		cxt.strokeStyle = '#c3e0e4';
		cxt.stroke();
		cxt.closePath();
	}


}