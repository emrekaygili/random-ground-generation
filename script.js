

var c = document.createElement("canvas");
c.width = window.innerWidth;
c.height = window.innerHeight;
document.body.appendChild(c);
var ctx = c.getContext("2d");

var pts = [];
while(pts.length <254){
    while (pts.includes(val=Math.floor(Math.random() * 255 )));
    pts.push(val);
}

pts.push(pts[0]);

var lerp = (a,b,t) => a + (b-a) * (1-Math.cos(t * Math.PI)) /2;

var noise = x=> {
    x=x * 0.01 % 254;
    return lerp(pts [Math.floor (x)],pts[Math.ceil(x)],x- Math.floor(x));
}

var bgcolor ="#ABC9FF"; // turuncu
var forecolor = "#A19882"; // acik gri
var linecolor = "#EE6983"; // koyu gri
var linewidth = 70;
var offset = -15;
var t = 0;


function draw(){
    t++;

    ctx.fillStyle = bgcolor;
ctx.fillRect(0,0,c.width,c.height);


ctx.fillStyle = forecolor;
ctx.strokeStyle = linecolor;
ctx.linewidth=linewidth;
ctx.beginPath();
ctx.moveTo(offset,c.height - offset);
for(let i = offset; i <c.width - offset; ++i){
    ctx.lineTo(i,(c.height * .8) - noise(i+t) * .4 );
}


ctx.lineTo(c.width - offset, c.height- offset);
ctx.closePath();
ctx.fill();
ctx.stroke();
requestAnimationFrame(draw);
}

draw();


