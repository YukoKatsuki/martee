
canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d"); 
roverwidth = 100; roverheight = 90;
 backgroundImage = "mars.jpg";
 roverImage = "rover.png"; roverX = 10; roverY = 10;


function add() {
    backgroungImgTag = new Image(); 
    backgroungImgTag.onload = uploadBackground;
    backgroungImgTag.src = backgroundImage;

    roverImgTag = new Image();
    roverImgTag.onload = uploadRover;
    roverImgTag.src = roverImage;
}


function uploadBackground()  {
    ctx.drawImage(backgroungImgTag, 0, 0, canvas.width, canvas.height);
}
 

function uploadRover() {
    ctx.drawImage(roverImgTag, roverX, roverY, roverwidth, roverheight);
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{

    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
            console.log("cima");
        }

        if(keyPressed == '40')
        {
            down();
            console.log("baixo");

        }       
        
        if(keyPressed == '37')
        {
            left();
            console.log("esquerda");
        }       
        
        if(keyPressed == '39')
        {
            right();
            console.log("direita");
        }

}

function up()
{
if(roverY >= 0)
 {
   roverY = roverY - 10;
   console.log("quando a seta para cima é pressionada, x = " + roverX + " : y = " +roverY);
    uploadBackground();
    uploadRover();
 }
}

function down()
{
if(roverY =500)
 {
   roverY = roverY + 10;
   console.log("quando a seta para baixo é pressionada, x = " + roverX + " : y = " +roverY);
    uploadBackground();
    uploadRover();
 }
}


function left()
{
if(roverX >= 0)
 {
   roverX = roverX - 10;
   console.log("quando a seta para esquerda é pressionada, x = " + roverX + " : y = " +roverY);
    uploadBackground();
    uploadRover();
 }
}


function right()
{
if(roverX <= 700)
 {
   roverX = roverX + 10;
   console.log("quando a seta para direita é pressionada, x = " + roverX + " : y = " +roverY);
    uploadBackground();
    uploadRover();
 }
}