// 游戏容器Map

/**
 * 由m行Line组成的格子阵
 */
function Map(w, h) {
  // 游戏区域的长度和宽度
  this.width = w;
  this.height = h;
  // 生成height个line对象，每个line宽度为width
  this.lines = [];
  for(let i=0; i<h; i++) {
    this.lines[i] = this.newLine();
  }
}

/**
 * 由n个格子组成的一行， 初始时每个元素存储0，表示此格子处无方块
 */
Map.prototype.newLine = function() {
  var shapes = [];
  for(let j=0; j<this.width; j++) {
    shapes[j] = NoShape;
  }

  return shapes;
}

/** 
 * 判断一行是否全部被占用(满行))，如果有一个格子为NoShape则返回false
 */
Map.prototype.isFullLine = function(row) {
  var line = this.lines[row];
  for(let col=0; col<this.width; col++) {
    if(line[col] === NoShape) {
      return false;
    }
  }

  return true;
}

/**
 * 判断方块形状中的4个点是否发生以下碰撞情况
 * 1. col<0 || col > this.width, 超出左右边界
 * 2. row==this.height, 说明形状已经到底部 底部边界检测
 * 3. 任何一点的shape_id不为NoShape，则发生碰撞
 * 
 * 如果发生碰撞则放弃当前动作
 */
Map.prototype.isCollide = function(shape) {
  for(var i=0; i<4; i++) {
    var row = shape[i].row;
    var col = shape[i].col;
    
    if((col<0 || col == this.width) || (row == this.height) || (this.lines[row][col] !== 0)) {
      return true;
    }
  }
  return false;
}

/**
 * 如果物体在下落过程中发生碰撞，则将物件形状加入到lines格子阵中
 */
Map.prototype.addShape = function(shape_id, shape) {
  for(let i=0; i<4; i++) {
    var row = shape[i].row;
    var col = shape[i].col;

    // 设置格子颜色
    this.lines[row][col] = shape_id;
  }

  // 添加新格子形状后，逐行检查是否满行，满行则消除
  let pop_score = 0;
  for(let row=0; row<this.height; row++) {
    if(this.isFullLine(row)) {
      // 绘制消除效果
      // onClearRow();
      // 将满行删除
      this.lines.splice(row, 1);
      score += 10;
      pop_score += 10;
      // 第一行添加新的行
      this.lines.unshift(this.newLine());
    }
  }

  if(pop_score > 0) {
    $$('score').innerHTML = score;
    $$('pop-score').innerHTML = pop_score;
    $$('pop-score-wrap').className = 'pop-score-wrap pop-score-show';

    setTimeout(() => {
      $$('pop-score-wrap').className = 'pop-score-wrap';
    }, 2000);
  }
}