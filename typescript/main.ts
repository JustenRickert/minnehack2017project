let circle: Circle = new Circle();
let bedroom: Room = new Room('bedroom', 20, 20, 100, 150);
let bathroom: Room = new Room('bathroom', 130, 20, 100, 150);
let livingroom: Room = new Room('livingroom', 20, 180, 100, 150);
let frontdoor: Room = new Room('frontdoor', 130, 180, 50, 75);

Math.random();
var frame: number = 0;
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

function loadAJAX() {
    var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = () => {
    //     if ()
    // }
}

function randomIn(...rooms: Room[]) {
    let size = rooms.length;
    let random = Math.floor(Math.random() * size);
    console.log(rooms[random]);
    return rooms[random];
}
