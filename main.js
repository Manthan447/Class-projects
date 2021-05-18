var Canvas= document.getElementById("project_canvas")
var ctx= Canvas.getContext("2d")
function Rectangle(){
ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth= 3;
ctx.rect(230, 143, 450, 200)
ctx.stroke();
}
Rectangle()
function circle(){
    ctx.beginPath();
    ctx.strokeStyle= "blue";
    ctx.lineWidth= 3;
    ctx.arc(325, 225,  50, 0, 2*Math.PI)
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle= "black";
    ctx.lineWidth= 3;
    ctx.arc(450, 225,  50, 0, 2*Math.PI)
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle= "red";
    ctx.lineWidth= 3;
    ctx.arc(575, 225,  50, 0, 2*Math.PI)
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle= "yellow";
    ctx.lineWidth= 3;
    ctx.arc(385 , 285,  50, 0, 2*Math.PI)
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle= "green";
    ctx.lineWidth= 3;
    ctx.arc(515, 285,  50, 0, 2*Math.PI)
    ctx.stroke();
}
    circle()