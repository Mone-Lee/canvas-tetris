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
		clearInterval(loop_interval);
		cxt.clearRect(0, 0, cnv.width, cnv.height);
		next_cxt.clearRect(0, 0, next_box.width, next_box.height);

		model = new GameModel(cnv.width / Spacing, cnv.height / Spacing);
		paintBox(model);

		loop_interval = setInterval(function() {
			model.down();
		}, 700);

		$$('start-btn').className = 'ctrl-btn restart-btn';
		$$('start-btn').innerHTML = 'restart';
	}

	// start();
	$$('start-btn').onclick = start;
}