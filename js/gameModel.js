/**
 * 游戏逻辑类，实现游戏控制
 */
function GameModel(w, h) {
  this.map = new Map(w, h);
  this.activeBox = new Box();
  this.activeBox.create();
  // 当前方块所在位置，顶端中央
  this.row = 1; 
  this.col = Math.floor(this.map.width / 2);

  // 下一个俄罗斯方块
  this.nextBox = new Box();
  this.nextBox.create();

  // paintBox();
}

/**
 * 创建新的俄罗斯方块
 * 先复制下一个形状的俄罗斯方块
 */
GameModel.prototype.createNewBox = function() {
  this.activeBox = this.nextBox;
  this.row = 1;
  this.col = Math.floor(this.map.width / 2);
  this.nextBox = new Box();
  this.nextBox.create();
  $$('pop-score-wrap').className = 'pop-score-wrap';
}

/**
 * 下落
 */
GameModel.prototype.down = function() {
  var old = this.activeBox.translate(this.row, this.col);
  this.row++;
  var temp = this.activeBox.translate(this.row, this.col);

  // 发生碰撞则放弃下落
  if(this.map.isCollide(temp)) {
    this.row--;

    if(this.row === 1) {
      // 游戏结束
      alert('游戏结束');
      clearInterval(loop_interval);
      return;
    }

    // 无法下落则将当前俄罗斯方块加入到Map中
    this.map.addShape(this.activeBox.shape_id, old);
    this.createNewBox();

    return false;
  }else {
    return true;
  }
}

/* 向左移动 */
GameModel.prototype.left = function() {
  this.col--;
  var temp = this.activeBox.translate(this.row, this.col);

  if(this.map.isCollide(temp)) {
    this.col++;
    return false;
  }else {
    return true;
  }
}

/* 向左移动 */
GameModel.prototype.right = function() {
  this.col++;
  var temp = this.activeBox.translate(this.row, this.col);

  if(this.map.isCollide(temp)) {
    this.col--;
    return false;
  }else {
    return true;
  }
}