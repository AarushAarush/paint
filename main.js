canvas = document.getElementById("MyCanvas");
ctx = canvas.getContext("2d");
Colour = "white";
Radius = 10;
var mouseevent = "empty";
var lastx = "";
var lasty = "";
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(a) {
    Colour = document.getElementById("Colour").value;
    Radius = document.getElementById("Radius").value;
    mouseevent = "mouseDown";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(a) {
    mouseevent = "mouseLeave";

}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(a) {
    mouseevent = "mouseUp";

}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(a) {
    currentx = a.clientX - canvas.offsetLeft;
    currenty = a.clientY - canvas.offsetTop;
    if (mouseevent = "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = Colour;
        ctx.lineWidth = 10;
        console.log("lastx = " + lastx + "lasty = " + lasty);
        ctx.arc(currentx,currenty,Radius,0,2*Math.PI);
        ctx.stroke();

    }
    lastx = currentx;
    lasty = currenty;
    
}
function Clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}