// 核心流程代码
window.onload = function() {
	let cnv = $$('canvas');
	let cxt = cnv.getContext('2d');

	let next_box = $$('next-box');
	let next_cxt = next_box.getContext('2d');
	

	function paintBox(model) {
		var map = model.map;
		var activeBox = model.activeBox.translate(model.row, model.col);

		cxt.clearRect(0, 0, cnv.width, cnv.height);
		next_cxt.clearRect(0, 0, next_box.width, next_box.height);
		let lines = map.lines;
		// 游戏面板中依次绘制每一个非空的格子
		for(let row=0; row<map.height; row++) {
			for(let col=0; col<map.height; col++) {
				var shape_id = lines[row][col];
				if(shape_id !== NoShape) {
					var y = row * Spacing;
					var x = col * Spacing;
					var color = Colors[shape_id];
					cxt.fillStyle = "rgba(255, 255, 255, 0.2)";
					cxt.fillRect(x, y, Spacing, Spacing);
					cxt.fillStyle = color;
					cxt.fillRect(x+1, y+1, Spacing-2, Spacing-2);
				}
			}
		}

		// 绘制当前方块
		for(let i=0; i<4; i++) {
			var y = activeBox[i].row * Spacing;
			var x = activeBox[i].col * Spacing;
			var color = model.activeBox.color;
			cxt.fillStyle = "rgba(255, 255, 255, 0.2)";
			cxt.fillRect(x, y, Spacing, Spacing);
			cxt.fillStyle = color;
			cxt.fillRect(x+1, y+1, Spacing-2, Spacing-2);
		}

		// 绘制下一个方块
		let nextBox = model.nextBox.translate(2, 2); // 在预览区（2，2）处位置
		for(let i=0; i<4; i++) {
			var y = nextBox[i].row * Spacing;
			var x = nextBox[i].col * Spacing;
			var color = model.nextBox.color;
			next_cxt.fillStyle = "rgba(255, 255, 255, 0.2)";
			next_cxt.fillRect(x, y, Spacing, Spacing);
			next_cxt.fillStyle = color;
			next_cxt.fillRect(x+1, y+1, Spacing-2, Spacing-2);
		}
	}

	function start() {
		let model = new GameModel(cnv.width / Spacing, cnv.height / Spacing);
		paintBox(model);

		loop_interval = setInterval(function() {
			model.down();
			paintBox(model);
		}, 100);
	}

	start();
}