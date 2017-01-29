/*-*-mode:typescript-*-*/
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
// clears the screen, obvii
function clearScreen() {
    ctx.clearRect(0, 0, 640, 640);
    // ctx.width, ctx.height);
}
var Circle = (function () {
    function Circle() {
        this.radius = 15;
        this.color = "red";
    }
    Circle.prototype.draw = function () {
        // Draw the Circle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.closePath();
        // color in the circle
        ctx.fillStyle = this.color;
        ctx.fill();
    };
    Circle.prototype.changePos = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Circle.prototype.drawIn = function (room) {
        this.changePos(room.x + room.width / 2, room.y + room.height / 2);
        this.draw();
    };
    return Circle;
}());
var Room = (function () {
    function Room(name, x, y, width, height) {
        this.name = name;
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
    }
    Room.prototype.draw = function () {
        // console.log('drawing', this);
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        ctx.closePath();
        ctx.fillText(this.name, this.x + 3, this.y + 10);
    };
    Room.drawRooms = function () {
        var rooms = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rooms[_i] = arguments[_i];
        }
        rooms.forEach(function (e) { return e.draw(); });
    };
    return Room;
}());
