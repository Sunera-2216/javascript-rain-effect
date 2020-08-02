class WaterDrop {
    constructor(xPosition, yPosition, dropSpeed, dropWidth, dropHeight){
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.dropSpeed = dropSpeed;
        this.dropWidth = dropWidth;
        this.dropHeight = dropHeight;
        this.element;
    }

    show(){
        this.element = document.createElement("div");
        this.element.className += "rain-drop";
        this.element.style.top = this.yPosition + "px";
        this.element.style.left = this.xPosition + "px";
        this.element.style.width = this.dropWidth + "px";
        this.element.style.height = this.dropHeight + "px";

        let oneDrop = document.getElementById("drops-section");
        oneDrop.appendChild(this.element);
    }

    fall(){
        const makeRain = () => {
            this.yPosition = this.yPosition + this.dropSpeed;
            this.element.style.top = this.yPosition + "px";

            if (this.yPosition < window.innerHeight){
                requestAnimationFrame(makeRain);
            }else {
                this.yPosition = -10;
                requestAnimationFrame(makeRain);
            }
        }
        requestAnimationFrame(makeRain);
    }
}