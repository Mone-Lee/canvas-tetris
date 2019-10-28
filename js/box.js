/**
 * 构建生成随机方块
 * @param {[type]} x      方块x坐标
 * @param {[type]} y      方块y坐标
 * @param {[type]} width  方块宽度
 * @param {[type]} height 方块高度
 * @param {[type]} color  方块颜色
 */
function Box(x, y, width, height, color) {
	this.x = x || 0;
	this.y = y || 0;
	this.width =  width || 80;
	this.height = height || 40;
	this.color = color || '#68bfe8';

	// x和y速度
	this.vx = 0;
	this.vy = 0;
}

Box.prototype = {
	// 绘制“描边”矩形
	stroke: function(cxt) {
		cxt.save();
		cxt.strokeStyle = this.color;
		cxt.beginPath();
		cxt.rect(this.x, this.y, this.width, this.height);
		cxt.closePath();
		cxt.stroke();
		cxt.restore();
	},

	// 绘制“填充”矩形
	fill: function(cxt) {
		cxt.save();
		cxt.fillStyle = this.color;
		cxt.beginPath();
		cxt.rect(this.x, this.y, this.width, this.height);
		cxt.closePath()
		cxt.fill();
		cxt.restore();
	}
}