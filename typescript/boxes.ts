/*-*-mode:typescript-*-*/
var canvas: any = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

// clears the screen, obvii
function clearScreen() {
    ctx.clearRect(0, 0, 640, 640);
    // ctx.width, ctx.height);
}

class Circle {
    x: number;
    y: number;
    radius: number = 15;
    color: string = "red";

    draw(): void {
        // Draw the Circle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.closePath();
        // color in the circle
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    changePos(x, y): void {
        this.x = x;
        this.y = y;
    }

    drawIn(room: Room): void {
        this.changePos(
            room.x + room.width / 2,
            room.y + room.height / 2)
        this.draw();
    }
}

class Room {
    height: number;
    width: number;
    x: number;
    y: number;
    name: string;

    constructor(name: string, x: number, y: number, width: number, height: number) {
        this.name = name;
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
    }

    draw(): void {
        // console.log('drawing', this);
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        ctx.closePath();

        ctx.fillstyle = "black"
        ctx.fillText(this.name, this.x + 3, this.y + 10);
    }

    static drawRooms(...rooms: Room[]) {
        rooms.forEach((e: Room) => e.draw())
    }
}

