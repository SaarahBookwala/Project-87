var canvas=new fabric.Canvas('myCanvas');
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
var player_object="";
function player_update(){
    fabric.Image.fromURL("Iron man Tony Stark.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
canvas.add(block_image_object);
    });
}
if(keyPressed=='38'){
    up();
    console.log("up");

}
if(keyPressed=='40'){
    down();
    console.log("down");
}
if(keyPressed=='37'){
    left();
    console.log("left");
}
if(keyPressed=='39'){
    right();
    console.log("right");
}
if(keyPressed=='72'){
    new_image('hulk.jpg');
    console.log("h");
}
if(keyPressed=='73'){
    new_image('Iron man Tony Stark.png');
    console.log("i");
}
if(keyPressed=='83'){
    new_image('Spider man.png');
    console.log("l");
}
if(keyPressed=='84'){
    new_image('Thor.jfif');
    console.log("t");
}
if(keyPressed=='67'){
    new_image('CA.jfif');
    console.log("c");
}
if(keyPressed=='89'){
    new_image('yellow_wall.png');
   console.log("y");
 }
 if(keyPressed=='68'){
     new_image('dark_green.png');
     console.log("d");
 }
 
}