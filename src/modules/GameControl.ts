import Food from "./Food";
import Snake from "./Snake";
import ScorePanel from "./ScorePanel";

// 游戏控制器类
class GameControl {
    // 贪吃蛇食物类
    private _food: Food;
    // 贪吃蛇蛇身体类
    private _snake: Snake;
    // 计分与等级信息面板类
    private _scorePanel: ScorePanel;

    // 当前已经按下的键盘事件名
    private _pressedEventKey: string = "";
    // 是否还活着
    private _isAlived: boolean = true;

    constructor() {
        // 统一实例化管控
        this._food = new Food();
        this._snake = new Snake();
        this._scorePanel = new ScorePanel();
    }

    // 初始化游戏
    public init() {
        // 注册监听 keydown 事件，通过 .bind(this) 方法解决 keyDownHandler 中 this 指向问题
        document.addEventListener("keydown", this.keyDownHandler.bind(this));
        // 开始定时刷新执行
        this.scheduleRefresh();
    }

    private keyDownHandler(event: KeyboardEvent) {
        // 将当前监听到的按键事件名更新赋值
        this._pressedEventKey = event.key;
    }

    // 依据当前按键、游戏等级等状态定速刷新游戏区域屏幕
    private scheduleRefresh() {
        // 1.获取当前屏幕上已绘制的蛇头位置
        let snakeX = this._snake.X;
        let snakeY = this._snake.Y;

        // 2.依据当前按键进行方向响应（兼容 IE 按键 key name）
        switch (this._pressedEventKey) {
            case "ArrowUp":
            case "Up":
                snakeY -= 10;
                break;
            case "ArrowDown":
            case "Down":
                snakeY += 10;
                break;
            case "ArrowLeft":
            case "Left":
                snakeX -= 10;
                break;
            case "ArrowRight":
            case "Right":
                snakeX += 10;
                break;
        }

        // 3.如果吃成功食物则进行相应屏幕 DOM 更新
        if (this.isEatSuccess(snakeX, snakeY)) {
            // 吃到后食物重新随机位置
            this._food.generateRandom();
            // 吃到后分数级等级面板更新
            this._scorePanel.eatSuccessCounter();
            // 吃到后蛇身体长度加一节
            this._snake.addAnNode4Boday();
        }

        try {
            // 4.依据按键方向对蛇最新移动位置进行刷新（无论是否吃到食物蛇总是要依据按键定时移动的）
            this._snake.move(snakeX, snakeY);
        } catch (e) {
            // 5.如果蛇移动因为异常条件抛出异常则认为蛇已死亡游戏结束
            this._isAlived = false;
            // 6.弹出蛇死亡原因弹框，游戏结束
            alert((e as Error).message);
        }
        // 7.如果蛇活着则依据游戏等级设置蛇移动的速度（定时器，避免堆栈溢出）
        this._isAlived && setTimeout(this.scheduleRefresh.bind(this), this.getIntervalByLevel.call(this));
    }

    // 依据游戏等级计算蛇移动速度时间间隔
    private getIntervalByLevel(): number {
        return 400 - (this._scorePanel.level - 1) * 40;
    }

    // 依据蛇和食物的坐标位置判断蛇是否吃上食物
    private isEatSuccess(snakeX: number, snakeY: number) {
        return snakeX === this._food.X && snakeY === this._food.Y;
    }
}

export default GameControl;
