const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const defaultDropCount = 100;

function makeRain(count) {
    let elements = document.getElementById("drops-section");

    while (elements.hasChildNodes()){
        elements.removeChild(elements.lastChild);
    }

    for (let i = 0; i < count; i++){
        let randomX = Math.floor(Math.random() * (windowWidth));
        let randomY = Math.floor(Math.random() * (windowHeight));
        let dropSpeed = Math.floor(Math.random() * (25 - 5)) + 5;
        let dropWidth = Math.floor(Math.random() * (dropSpeed/5 - 1)) + 1;
        let dropHeight = Math.floor(Math.random() * (dropSpeed*2 - 3)) + 3;

        let waterDropObject = new WaterDrop(randomX, randomY, dropSpeed, dropWidth, dropHeight);

        waterDropObject.show();
        waterDropObject.fall();
    }
}

function showDropCount(count) {
    let selectedDropCount = defaultDropCount;
    selectedDropCount.nodeValue = count;
}

function changeDropCount(count) {
    showDropCount(count);
    makeRain(count);
}

showDropCount(defaultDropCount);
makeRain(defaultDropCount);