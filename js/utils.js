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
	[ [0,0], [1,0], [0,1], [1,1] ],	// 正方形
	[ [-1,-1], [0,-1], [0,0], [0,1] ],
	[ [1,-1], [0,-1], [0,0], [0,1] ]
];
// 各种方块形状的颜色
const Colors = ["black", "fuchsia", "#cff", "red", "orange", "aqua", "green", "yellow"];

var loop_interval = null;

var score = 0;

var model = null;

var cnv = $$('canvas');
var cxt = cnv.getContext('2d');

var next_box = $$('next-box');
var next_cxt = next_box.getContext('2d');

var paintBox = function(model) {
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