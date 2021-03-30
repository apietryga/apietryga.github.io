var player;
var przeszkody = [];
var myScore;
function startGame(){
    gamePlane.start();
    player = new compontent(10, 60, "player.png", 150, 240,"player");
    myScore = new compontent("30px","Consolas","black",480,30,"text")
}
function restartGame() {
    document.querySelector(".gameInfo").style.display = "none";
    gamePlane.clear();
    player = {};
    przeszkody = [];
    myScore = {};
    document.querySelector("canvas").innerHTML = "";
    startGame();
}
var gamePlane={
    canvas: document.createElement("canvas"),
    start: function(){
        this.canvas.width = 640;
        this.canvas.height = 300;
        this.frameNo = 0;
        this.context= this.canvas.getContext("2d");
        this.interval = setInterval (updategamePlane, 10);
        document.querySelector(".game").appendChild(this.canvas);
        window.addEventListener("keydown", function(e){
            gamePlane.key = e.keyCode;
        })
    },
    clear: function() {
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    },
    stop: function(){
        clearInterval(this.interval);
        var gameInfo = document.querySelector(".gameInfo");
        gameInfo.innerHTML = "<button onclick='restartGame()'>AGAIN!</button>";
        gameInfo.style.display = "flex";
    }
}
function compontent(width, height, color, x, y, type){
    this.type = type;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedY = 0;
    this.jumpScale = 2;
    this.jumpH = 100;
    this.jumping = false;
    this.newPos = function(){
        bottom = gamePlane.canvas.height - this.height;
        if(this.y <= bottom - this.jumpH){
            this.speedY = player.jumpScale;
        }
        if(this.y >= bottom && this.speedY == player.jumpScale){
            this.speedY = 0;
            this.jumping = false;
        }
        this.y += this.speedY;
    }
    this.cyle = 0;
    this.update = function(){
        c = gamePlane.context;
        if(this.type == "player"){
            var img = document.createElement("img");
            img.src = "img/"+color;
            var singleW = img.width/10;
            c.drawImage(img,
                this.cyle * singleW, 0, singleW, img.height,
                this.x-15, this.y, singleW, this.height);
            if(everyInterval(5) && this.jumping == false){
                this.cyle = (this.cyle + 1) % 8;
            }
        }else if(this.type == "przeszkody"){
            var img = document.createElement("img");
            img.src = "img/"+color;
            c.drawImage(img,
                0, 0, img.width, img.height,
                this.x-7.5, this.y, img.width, this.height);

        }else if(this.type == "text"){
            c.font = this.width + " " + this.height;
            c.fillStyle = color;
            c.fillText(this.text, this.x, this.y);
        }
    }
    this.crashWith = function(other){
        var crash = true;
        var myleft = this.x;
        var myright = this.x + this.width;
        var mytop = this.y;
        var mybottom = this.y + this.height;
        var otherleft = other.x;
        var otherright = other.x + other.width;
        var othertop = other.y;
        var otherbottom = other.y + other.height;
        if(myright < otherleft ||
            mybottom < othertop||
            myleft > otherright||
            mytop > otherbottom
        ){
            crash = false;
        }
        return crash;
    }
}
function everyInterval(n){
    if((gamePlane.frameNo/n) % 1 == 0){return true;}
    return false;
}
function updategamePlane(){
    gamePlane.clear(); 
    gamePlane.frameNo++;
    var x,y;
    for(i = 0; i < przeszkody.length; i++){
        if(player.crashWith(przeszkody[i])){
            gamePlane.stop();
        }
    }
    if(gamePlane.frameNo == 1 || everyInterval(200)){
        x = gamePlane.canvas.width;
        minHeight = 30;
        maxHeight = 65;
        height = Math.random()*(maxHeight-minHeight)+minHeight;
        y = gamePlane.canvas.height - height;
        przeszkody.push(new compontent(10,height,"przeszkoda.png",x,y,"przeszkody"));
    }
    for(i = 0; i < przeszkody.length; i++){
        przeszkody[i].x = przeszkody[i].x-2;
        przeszkody[i].update();
    }
    if(gamePlane.key && gamePlane.key == 38 && player.jumping == false){
        gamePlane.key = false;
        player.speedY = -player.jumpScale;
        player.jumping = true;
        player.cyle = 9;
    }
    myScore.text = "SCORE:"+Math.floor(gamePlane.frameNo/100);
    myScore.update(); 
    player.newPos();
    player.update(); 
    console.log("loop")
}