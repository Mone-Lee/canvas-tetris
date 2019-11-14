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