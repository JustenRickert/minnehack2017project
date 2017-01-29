let circle: Circle = new Circle();
let bedroom: Room = new Room('bedroom', 20, 20, 100, 150);
let bathroom: Room = new Room('bathroom', 130, 20, 100, 150);
let livingroom: Room = new Room('livingroom', 20, 180, 100, 150);
let frontdoor: Room = new Room('frontdoor', 130, 180, 50, 75);

clearScreen();
Room.drawRooms(bedroom, bathroom, livingroom, frontdoor);
circle.drawIn(randomIn(bedroom, livingroom, frontdoor, bathroom));

Math.random();
var frame: number = 0;
callAjax('/test');
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

function callAjax(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status === 200) {
            console.log('what?')
            console.log(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function randomIn(...rooms: Room[]) {
    let size = rooms.length;
    let random = Math.floor(Math.random() * size);
    console.log(rooms[random]);
    return rooms[random];
}
