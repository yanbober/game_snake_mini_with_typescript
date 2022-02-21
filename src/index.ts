// 由于 webpack 的 entry 是 index.ts，故 less 此处导入
import './style/index.less'
import GameControl from './modules/GameControl';

// 实例化游戏控制器
const gameControl = new GameControl();
// 初始化游戏
gameControl.init();
