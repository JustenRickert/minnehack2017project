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
        console.log(room);
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
        ctx.fillstyle = "black";
        ctx.fillText(this.name, this.x + 3, this.y + 10);
    };
    Room.drawRooms = function () {
        var rooms = [];
        for (var _i = 0; _i < arguments.length; _i++) {
<<<<<<< HEAD
            rooms[_i] = arguments[_i];
=======
            rooms[_i - 0] = arguments[_i];
>>>>>>> 167ed7555cea85b391d0f5ed9e43902e2b9e3e6f
        }
        rooms.forEach(function (e) { return e.draw(); });
    };
    return Room;
}());
/*-*-mode:typescript-*-*/
var circle = new Circle();
var bedroom = new Room('bedroom', 20, 20, 100, 150);
var bathroom = new Room('bathroom', 130, 20, 100, 150);
var livingroom = new Room('livingroom', 20, 180, 100, 150);
var frontdoor = new Room('frontdoor', 130, 180, 50, 75);
var currentRoom = 'coding_spo';
var frame = 0;
clearScreen();
Room.drawRooms(bedroom, bathroom, livingroom, frontdoor);
circle.drawIn(getRoomByName(currentRoom));
loop();
function getRoomByName(name) {
    return {
        'coding_spo': bedroom,
        'back': bathroom,
        'stage': livingroom
    }[name];
}
function checkRoomAndRedraw() {
    if (currentRoom)
        drawNewScene();
}
function drawNewScene() {
    console.log(currentRoom, getRoomByName(currentRoom));
    clearScreen();
    Room.drawRooms(bedroom, bathroom, livingroom, frontdoor);
    circle.drawIn(getRoomByName(currentRoom));
}
function loop() {
    if (frame % 300 === 0) {
        callAjax('/room');
        checkRoomAndRedraw();
    }
    frame += 1;
    requestAnimationFrame(loop);
}
function callAjax(url) {
    var xmlhttp = new XMLHttpRequest();
    var response;
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status === 200) {
            currentRoom = xmlhttp.responseText;
        }
    };
    xmlhttp.open("GET", url);
    xmlhttp.send();
}
function randomIn() {
    var rooms = [];
    for (var _i = 0; _i < arguments.length; _i++) {
<<<<<<< HEAD
        rooms[_i] = arguments[_i];
=======
        rooms[_i - 0] = arguments[_i];
>>>>>>> 167ed7555cea85b391d0f5ed9e43902e2b9e3e6f
    }
    var size = rooms.length;
    var random = Math.floor(Math.random() * size);
    return rooms[random];
}
