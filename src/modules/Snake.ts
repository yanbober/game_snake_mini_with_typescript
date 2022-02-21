// 贪吃蛇蛇身体类
class Snake {
    // 蛇整体 DOM
    private _element: HTMLElement;
    // 蛇头 DOM
    private _head: HTMLElement;
    // 蛇所有身体节点 DOMs
    private _bodies: HTMLCollection;

    constructor() {
        // 从 html 获取元素
        this._element = document.getElementById("snake")!;
        this._head = document.querySelector("#snake > div")!;
        this._bodies = this._element.getElementsByTagName("div")!;
    }

    // 获取蛇头在游戏屏幕区域 x 位置
    public get X() {
        return this._head.offsetLeft;
    }

    // 获取蛇头在游戏屏幕区域 y 位置
    public get Y() {
        return this._head.offsetTop;
    }

    // 依据当前最新蛇头位置移动蛇整体
    public move(headX: number, headY: number) {
        // 1.如果位置没变则不进行任何逻辑
        if (headX === this.X && headY === this.Y) {
            return;
        }
        // 2.校验蛇头是否撞墙抛出异常
        this.preCheckBoundsThrow(headX, headY);
        // 3.修正蛇可以双头移动问题（即尾巴变头，头变尾巴问题）
        [headX, headY] = this.fixDoubleHeadMove(headX, headY);
        // 4.真正移动蛇每一节的位置
        this.moveAllNodes(headX, headY);
        // 5.移动后检查蛇头是否装上蛇自己的身体，如果装上则抛出异常
        this.lastCheckHeadBodyCrossedThrow();
    }

    // 给蛇身体追加一节
    public addAnNode4Boday() {
        this._element.insertAdjacentHTML("beforeend", "<div></div>");
    }

    // 移动蛇的所有身体节点（因为蛇一直向前走，故身体节点移动规律为后一个节成为前一节即可）
    private moveAllNodes(headX: number, headY: number) {
        // 1.先蛇头后边身体位置设置为前一个身体的位置（整体前移一个）
        for (let i = this._bodies.length - 1; i > 0; i--) {
            let elePrev = (this._bodies[i - 1] as HTMLElement);
            let x = elePrev.offsetLeft;
            let y = elePrev.offsetTop;

            let ele = (this._bodies[i] as HTMLElement);
            ele.style.left = x + "px";
            ele.style.top = y + "px";
        }
        // 2.接着移动蛇头位置
        this._head.style.left = headX + "px";
        this._head.style.top = headY + "px";
    }

    // 检查蛇头是否装上蛇自己的身体，如果装上则抛出异常
    private lastCheckHeadBodyCrossedThrow() {
        for (let i = 1; i < this._bodies.length; i++) {
            let bd = (this._bodies[i] as HTMLBodyElement);
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error("蛇头装上身体啦，游戏结束！")
            }
        }
    }

    // 校验蛇头是否越界游戏安全区域，越界则为撞墙异常
    private preCheckBoundsThrow(snakeHeadx: number, snakeHeady: number) {
        if (snakeHeadx < 0 || snakeHeadx > 290 || snakeHeady < 0 || snakeHeady > 290) {
            throw new Error("蛇撞墙啦，游戏结束！");
        }
    }

    // 修正移动方向，如果发现蛇因为快速按键上下或左右则修正响应为正常方向，防止变为双向蛇（头可尾，尾可头）
    private fixDoubleHeadMove(headX: number, headY: number): [number, number] {
        let tupleHeadXY: [number, number] = [headX, headY];
        // 在此方向移动才需要修正，没动说明蛇是此方向的垂直方向移动，故此方向无需修正
        if (this.X != headX) {
            // 修改x时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然
            if (this._bodies[1] && (this._bodies[1] as HTMLElement).offsetLeft === headX) {
                // 如果发生了掉头，让蛇向反方向继续移动
                if (headX > this.X) {
                    // 如果新值value大于旧值X，则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
                    tupleHeadXY[0] = this.X - 10;
                } else {
                    // 向左走
                    tupleHeadXY[0] = this.X + 10;
                }
            }
        }
        // 在此方向移动才需要修正，没动说明蛇是此方向的垂直方向移动，故此方向无需修正
        if (this.Y != headY) {
            // 修改y时，是在修改垂直坐标，蛇在上下移动，蛇在向上移动时，不能向下掉头，反之亦然
            if (this._bodies[1] && (this._bodies[1] as HTMLElement).offsetTop === headY) {
                if (headY > this.Y) {
                    tupleHeadXY[1] = this.Y - 10;
                } else {
                    tupleHeadXY[1] = this.Y + 10;
                }
            }
        }
        return tupleHeadXY;
    }
}

export default Snake;
