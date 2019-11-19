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
			// blank
			case 32:
				pause();
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
			if(!waiting) {
				model.down();
			}
		}, 700);

		$$('start-btn').style.display = 'none';
		$$('restart-btn').style.display = 'inline-block';
	}

	function restart() {
		clearInterval(loop_interval);
		score = 0;
		waiting = false;
		start();
	}

	function pause() {
		waiting = !waiting;
		if(waiting) {
			$$('pause-btn').innerHTML = 'continue';
		}else {
			$$('pause-btn').innerHTML = 'pause';
		}
	}

	$$('start-btn').onclick = start;
	$$('restart-btn').onclick = restart;
	$$('pause-btn').onclick = pause;
}