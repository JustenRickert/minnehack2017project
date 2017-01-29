var circle = new Circle();
var bedroom = new Room('bedroom', 20, 20, 100, 150);
var bathroom = new Room('bathroom', 130, 20, 100, 150);
var livingroom = new Room('livingroom', 20, 180, 100, 150);
var frontdoor = new Room('frontdoor', 130, 180, 50, 75);
Math.random();
var frame = 0;
loop();
function loop() {
    if (frame % 120 === 0) {
        clearScreen();
        Room.drawRooms(bedroom, bathroom, livingroom, frontdoor);
        circle.drawIn(randomIn(bedroom, livingroom, frontdoor, bathroom));
    }
    frame += 1;
    requestAnimationFrame(loop);
}
function randomIn() {
    var rooms = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rooms[_i] = arguments[_i];
    }
    var size = rooms.length;
    var random = Math.floor(Math.random() * size);
    console.log(rooms[random]);
    return rooms[random];
}
