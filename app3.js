// Rover Object Goes Here
// ======================
//Ths is a mat's rover program that will
//will calculate locatioin, receive directions, receive string
//input that will be translated into directions.
//It would be able to dectect when the rover is at the edge
//In addition to multple rovers and multiple obstacles .

//Create 10 x2 array, create a rover object property that have 2 values current value
//and previous value, the current value will be evaluated by the switch statement
//You also have to have an array of previous places.
// ======================


var rover="right";
var direction_1="N";
var direction_val= [0,0];
var rover_1={direct_movement:direction_1,
            direct_val:direction_val,
            traveling:direction_val,
            travelLog:direction_val };





function take_a_direction(rover){

switch (rover){
case "left":
turnLeft(rover);
break
case "right":
turnRight(rover);
break;
case "forward":
moveForward(rover);
break;
case "backward":
moveBackward(rover);
}
}



function string_iterate(string_value){

  for (var i = 1; i <= string_value.length; i++){
      string_value[i];
      switch (string_value[i]){
        case 'l':
        turnLeft(rover);
        break;
        case 'r':
        turnRight(rover);
        break;
        case 'f':
        moveForward(rover);
        break;
        case 'b':
        moveBackward(rover);
        break;
        default:
        console.log("Add a recognized movement.")
      }


  }

}
rover_1.traveling=[0,0];
rover_1.travelLog=[0,0];
rover_1.direct_movement="face_north";
function turning(rover){
switch (rover_1.direct_movement){
case 'face_north':

if (rover==='left'){console.log("Now facing East");rover_1.direct_movement='face_east';}
else if(rover==='right'){console.log("Now facing West");rover_1.direct_movement='face_west';}
else if(rover==='forward'){console.log("Now facing North");rover_1.direct_movement='face_north';}
else if(rover==='backward'){console.log("Now facing South");rover_1.direct_movement='face_south';}
break;
case 'face_south':
if (rover==='left'){console.log("Now facing West");rover_1.direct_movement='face_west';}
else if(rover==='right'){console.log("Now facing East");rover_1.direct_movement='face_east';}
else if(rover==='forward'){console.log("Now facing South");rover_1.direct_movement='face_south';}
else if(rover==='backward'){console.log("Now facing North");rover_1.direct_movement='face_north';}
break;
case 'face_east':
if (rover==='left'){console.log("Now facing South");rover_1.direct_movement='face_south';}
else if(rover==='right'){console.log("Now facing North");rover_1.direct_movement='face_north';}
else if(rover==='forward'){console.log("Now facing East");rover_1.direct_movement='face_east';}
else if(rover==='backward'){console.log("Now facing West");rover_1.direct_movement='face_west';}
break;
case 'face_west':
if (rover==='left'){console.log("Now facing North");rover_1.direct_movement='face_north';}
else if(rover==='right'){console.log("Now facing South");rover_1.direct_movement='face_south';}
else if(rover==='forward'){console.log("Now facing West");rover_1.direct_movement='face_west';}
else if(rover==='backward'){console.log("Now facing East");rover_1.direct_movement='face_east';}
}
}


function directional_movement(direct_movement){
switch(direct_movement){

case 'face_north':
 rover_1.direct_val[1]--;
 console.log("The position of the object is:", rover_1.direct_val[1]);
 break;
case 'face_south':
 rover_1.direct_val[1]++;
  console.log("The position of the object is:",rover_1.direct_val[1]);
 break;
case 'face_east':
 rover_1.direct_val[0]--;
console.log("The position of the object is:", rover_1.direct_val[0]);
 break;
case 'face_west':
  rover_1.direct_val[0]++;
  console.log("The position of the object is:", direction_val[0]);
}
rover_1.traveling=[rover_1.direct_val[0], rover_1.direct_val[1]];
rover_1.travelLog.push(rover_1.traveling);

if (rover_1.direct_val[0]<0){
  rover_1.direct_val[0]++;
}
if (rover_1.direct_val[1]<0){
  rover_1.direct_val[1]++;
}
if (rover_1.direct_val[0]>10){
  rover_1.direct_val[0]--;
}
if (rover_1.direct_val[1]>10){
  rover_1.direct_val[1]--;
}
}

function print_travel_log(){

for (var i =0; i < rover_1.travelLog.length;i++){

  console.log("The rover has been:", "Coord(", rover_1.travelLog[i], rover_1.travelLog[i+1],")")
}

}

function turnLeft(rover){
console.log("turnLeft was called!");
turning(rover);
directional_movement(rover_1.direct_movement);
}

function turnRight(rover){
  console.log("turnRight was called!");
  turning(rover);
directional_movement(rover_1.direct_movement);
}

function moveForward(rover){
  console.log("moveForward was called")
  turning(rover);
  directional_movement(rover_1.direct_movement);
}
function moveBackward(rover){
  console.log("moveForward was called")
  turning(rover);
  directional_movement(rover_1.direct_movement);
}
var i=9;
function retuning (i){
  console.log(i);
}
