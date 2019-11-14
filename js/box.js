/**
 * 构建生成各种形状的方块
 */
function Box() {
	this.shape = [];
	this.color = '';
}

// 每一格的间距，即每一个小方块的尺寸
Space = 20;

// 各种方块形状的编号，0代表没有形状
NoShape = 0;
// 各种方块形状的数据描述
Shapes = [
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
Colors = ["black", "fuchsia", "#cff", "red", "orange", "aqua", "green", "yellow"];

// 产生一个新的方块形状
Box.prototype.create = function() {
	// 随机选择一个形状方块
	this.shape_id = Math.floor(Math.random() * 7) + 1; //生成1~7的数
	this.shape = Shapes[this.shape_id]; // 存储方块的形状
	this.color = Colors[this.shape_id]; // 存储方块的颜色
}

// 将方块自身的坐标系转换为屏幕Map的坐标系
// 参数（row, col）为当前形状方块原点（（0,0）表示的小方块）在Map中的位置
// row 表示Map中第几行
// col 表示Map中第几列
// 所以逻辑上应该是小方块坐标x轴对应参数col，y轴对应参数row
Box.prototype.map = function(row, col) {
	var mapBox = [];
	for(let i=0; i<4; i++) {
		var temp = [];
		temp.row = this.shape[i][1] + row;
		temp.col = this.shape[i][0] + col;
		mapBox.push(temp);
	}

	return mapBox;
}