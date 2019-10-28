// 核心流程代码
window.onload = function() {
	let cnv = $$('canvas');
	let cxt = cnv.getContext('2d');

	// 渲染背景
	// utils.drawBackground();

	// 定义一个用来存放方块的数组
	let boxes = [];
	// 定义一个“当前活动”的方块
	let activeBox = createBox();
	// 定义方块在y轴的下落速度
	let vy = 10;

	// 生成随机方块
	function createBox(){
		let x = Math.random() * cnv.width;
		let y = 0;
		let width = Math.random() * 40 + 10;	// min: 10, max: 50
		let height = Math.random() * 40 + 10;
		let color = utils.getRandomColor();
		let box = new Box(x, y, width, height, color);

		boxes.push(box);
		return box;
	}

	(function frame() {
		window.requestAnimationFrame(frame);
		cxt.clearRect(0, 0, cnv.width, cnv.height);

		activeBox.y += vy;

		// 底部边界检测, 如果到达底部，则创建新方块
		if(activeBox.y > cnv.height - activeBox.height) {
			activeBox.y = cnv.height - activeBox.height;
			activeBox = createBox();
		}

		// 与其他方块的碰撞检测
		boxes.forEach((box) => {
			// 如果box不是activeBox且当前box与activeBox碰撞了，则创建新方块
			if(activeBox != box && utils.checkRect(activeBox, box)) {
				activeBox.y = box.y - activeBox.height;
				activeBox = createBox();
			}

			box.fill(cxt);
		})
	})();

}