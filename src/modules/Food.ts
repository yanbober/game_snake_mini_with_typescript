// 贪吃蛇食物类
class Food {
    // HTML 食物标签
    private _element: HTMLElement;

    constructor() {
        // 从 index.html 中获取食物标签实例
        this._element = document.getElementById("food")!;
    }

    // 获取食物在 x 轴位置，子绝父相，食物absolute position于游戏屏幕区域
    get X() {
        return this._element.offsetLeft;
    }

    // 获取食物在 y 轴位置，子绝父相，食物absolute position于游戏屏幕区域
    get Y() {
        return this._element.offsetTop;
    }

    // 随机在游戏屏幕区域内生成一个食物
    public generateRandom() {
        // 由于游戏屏幕为300px正方形，食物为10px正方形
        // 故食物随机移动范围为0px～290px，每次移动offset为一格（10px）
        let left = Math.round(Math.random() * 29) * 10;
        let top = Math.round(Math.random() * 29) * 10;

        this._element.style.left = left + "px";
        this._element.style.top = top + "px";
    }
}

export default Food;
