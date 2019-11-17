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

var score = 0;