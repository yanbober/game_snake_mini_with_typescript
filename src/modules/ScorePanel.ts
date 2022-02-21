// 计分与等级信息面板类
class ScorePanel {
    // 当前分数
    private _score: number = 0;
    // 当前等级
    private _level: number = 1;
    // 游戏最大等级
    private _maxLevel: number;

    // HTML 当前分数标签
    private _scoreEl: HTMLElement;
    // HTML 当前等级标签
    private _levelEl: HTMLElement;

    constructor(maxLevel: number = 10) {
        // 默认游戏最大等级 10 级
        this._maxLevel = maxLevel;
        // 从 index.html 中获取标签实例
        this._scoreEl = document.getElementById("score")!;
        this._levelEl = document.getElementById("level")!;
    }

    public get level() {
        return this._level;
    }

    // 分数进行 +1，同时满足条件情况下等级 +1
    public eatSuccessCounter() {
        this._score++;
        this._scoreEl.innerHTML = this._score + "";
        if (this._score % 10 === 0) {
            // 每得 10 分升一个等级
            this.changeLevelUp();
        }
    }

    // 小于最大等级的情况下更新游戏等级
    private changeLevelUp() {
        if (this.level < this._maxLevel) {
            this._levelEl.innerHTML = ++this._level + "";
        }
    }
}

export default ScorePanel;
