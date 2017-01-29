/*-*-mode:typescript-*-*/

let circle: Circle = new Circle();
let bedroom: Room = new Room('bedroom', 20, 20, 100, 150);
let bathroom: Room = new Room('bathroom', 130, 20, 100, 150);
let livingroom: Room = new Room('livingroom', 20, 180, 100, 150);
let frontdoor: Room = new Room('frontdoor', 130, 180, 50, 75);

var currentRoom: string = 'coding_spo';
var frame: number = 0;

clearScreen();
Room.drawRooms(bedroom, bathroom, livingroom, frontdoor);
circle.drawIn(getRoomByName(currentRoom));

loop();

function getRoomByName(name: string): Room {
    return {
        'coding_spo': bedroom,
        'back': bathroom,
        'stage': livingroom,
        'sleeping_area': frontdoor,
    }[name]
}

function checkRoomAndRedraw(): void {
    if (currentRoom)
        drawNewScene();
}

function drawNewScene(): void {
    console.log(currentRoom, getRoomByName(currentRoom));
    clearScreen()
    Room.drawRooms(bedroom, bathroom, livingroom, frontdoor);
    let room = getRoomByName(currentRoom);
    circle.drawIn(room);
}

function loop() {
    if (frame % 300 === 0) {
        callAjax('/room');
        callAjax('/sched')
        checkRoomAndRedraw();
    }

    frame += 1;
    requestAnimationFrame(loop);
}

function callAjax(url): void {
    var xmlhttp = new XMLHttpRequest();
    var response: string;
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status === 200) {
            currentRoom = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", url);
    xmlhttp.send();
}

function randomIn(...rooms: Room[]): Room {
    let size = rooms.length;
    let random = Math.floor(Math.random() * size);
    return rooms[random];
}
