
### 俄罗斯方块游戏
2019.11.20

##### 支持功能：
1. 允许在方块在下落期间进行左移（A键）、右移（D键）、加速下落（S键）；
2. 允许玩家控制游戏的开始与暂停（可通过点击按钮/空格键来控制）；
3. 允许玩家通过enter键改变下落方块的形状，当变形后的方块超出游戏区域，则阻止这次变形；
4. 显示玩家分数（消除一行得10分）与下一个将要下落的方块的形状；


##### 项目目录说明：
index.html&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;基础页面

css/index.css&emsp;&emsp;&emsp;&emsp;页面样式

js/box.js&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&ensp;方块类，包含方块的生成、变形、映射到游戏容器的方法  
js/map.js&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;游戏容器类，包含游戏地图二维数组的生成、游戏状态的记录（每一格地图的占用情况）  
js/gameModel.js&emsp;&emsp;&ensp;游戏逻辑类，包含方块的生成和运动操作，及这些操作在游戏容器中的映射显示  
js/index.js&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&ensp;游戏流程代码，包含核心流程：游戏的启动、下落循环、以及监听获取用户的操作  
js/utils.js&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;公共方法、公共变量  
