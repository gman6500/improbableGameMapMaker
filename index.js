/**
* Created with Map editor for Improbable game.
* User: gman6500
* Date: 2015-11-06
* Time: 03:56 PM
* To change this template use Tools | Templates.
*/
var canvas= document.getElementById("myCanvas");
var width = 1120
var height = 590
var ctx= canvas.getContext("2d");
var lava=[];
var goal=[];
var blocks=[];
var jumpPow=[];
var mouse={
    x:0,
    y:0,
    shapeStartX:0,
    shapeStartY:0,
    shapeEndX:0,
    shapeEndY:0,
    type:"block"
}
function Block(x,y,width,height){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
}
canvas.addEventListener("mousemove",function(e){
//     console.log(e.x);
//     console.log(e.y);
    mouse.x=e.x-9;
    mouse.y=e.y-9;
//     console.log(mouse.x);
//     console.log(mouse.y);
})
canvas.addEventListener("mousedown",function(e){
//     console.log(e.x);
//     console.log(e.y);
    mouse.shapeStartX=e.x-9;
    mouse.shapeStartY=e.y-9;
    if(mouse.type==="jumpPow"){
        //add a 10 x 10 jump pow here once constructor is done
        var newJump=new Block(mouse.x-5,mouse.y-5,10,10);
        jumpPow.push(newJump)
    }else if(mouse.type==='goal'){
        var newGoal=new Block(mouse.x-5,mouse.y-5,10,10);
        goal.push(newGoal);
    }
})
canvas.addEventListener("mouseup",function(e){
//     console.log(e.x);
//     console.log(e.y);
    mouse.shapeEndX=e.x-9;
    mouse.shapeEndY=e.y-9;
    var shapeWidth,shapeHeight;
    shapeWidth=mouse.shapeEndX-mouse.shapeStartX;
    shapeHeight=mouse.shapeEndY-mouse.shapeStartY;
    if(mouse.type==="block"){
        var newBlock=new Block(mouse.shapeStartX,mouse.shapeStartY,shapeWidth,shapeHeight);
        console.log(newBlock)
        blocks.push(newBlock);
    }else if(mouse.type==="lava"){
        var newLava=new Block(mouse.shapeStartX,mouse.shapeStartY,shapeWidth,shapeHeight);
        lava.push(newLava);
    }
    
})
blocks.push({
    x: 0,
    y: 0,
    width: 15,
    height: height,
    level:"all"
});
blocks.push({
    x: 0,
    y: height - 2,
    width: width,
    height: 50,
    level:"all"
});
blocks.push({
    x: width - 10,
    y: 0,
    width: 50,
    height: height,
    level:"all"
});
blocks.push({
    x: 0,
    y: -10,
    width: width,
    height: 15,
    level:"all"
});
setInterval(function(){
    ctx.fillStyle = "black";
    ctx.beginPath();
    for(i=0;i<blocks.length;i++){
//         console.log("DRAWING")
        ctx.rect(blocks[i].x,blocks[i].y,blocks[i].width,blocks[i].height);
    }
    ctx.fill();
    ctx.fillStyle="red";
    ctx.beginPath();
   for(i=0;i<lava.length;i++){
       ctx.rect(lava[i].x,lava[i].y,lava[i].width,lava[i].height);
   }
   ctx.fill();
   ctx.fillStyle="yellow";
   ctx.beginPath();
   for(i=0;i<jumpPow.length;i++){
       ctx.rect(jumpPow[i].x,jumpPow[i].y,jumpPow[i].width,jumpPow[i].height);
   }
   ctx.fill();
   ctx.fillStyle="green";
   ctx.beginPath();
    for(i=0;i<goal.length;i++){
        ctx.rect(goal[i].x,goal[i].y,goal[i].width,goal[i].height);
    }
    ctx.fill();
//     console.log("UPDATING")
    
},100)
document.addEventListener("load",function(){
//     console.log("LOADED");
    
})
function returnLevel(){
    console.log("returning level")
    alert("SAVING LEVEL")
    var superObject={
        allLava:lava,
        allBlocks:blocks,
        allJumps:jumpPow,
        allGoals:goal
    }
    var str=JSON.stringify(superObject);
    alert("PLEASE COPY AND PASTE THE NEW TEXT AT THE BOTTOM OF THE SCREEN AND SEND IT TO wgrech.sp@mysummitps.org WITH A SCREENSHOT OF THE LEVEL     IT WILL BE TESTED AND IF IT IS GOOD WILL BE INCLUDED IN THE GAME");
    $("#results").append(str);
    console.log("done append")
}