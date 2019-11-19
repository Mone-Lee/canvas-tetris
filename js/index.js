// 核心流程代码
window.onload = function() {
	function move(which) {
		switch(which) {
			// a
			case 97:
				model.left();
				break;
			// s
			case 115:
				model.down();
				break;
			// d
			case 100:
				model.right();
				break;
			// enter
			case 13:
				model.rotate();
				break;
		}
	}

	document.onkeypress = function(evt) {
		evt.preventDefault();
		move(evt.which);
	}

	function start() {
		model = new GameModel(cnv.width / Spacing, cnv.height / Spacing);
		paintBox(model);

		loop_interval = setInterval(function() {
			model.down();
		}, 700);
	}

	start();
}