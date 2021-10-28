

let  x=document.getElementById("EE").value;
let  c=Math.ceil(Math.random()*8.9);
let  x1=Math.random();


document.getElementById('EE').innerHTML=c;










function turn1() {
    
    document.getElementById("card1").style.transform="rotate(0deg)";
    document.getElementById("card1").style.transition="1s";
    document.getElementById("card1").style.backgroundColor="white";
    x=1;

    if (x==c){document.getElementById("bod").style.backgroundColor="green";
    c=Math.ceil(Math.random()*8.9);
    x1=Math.random();
    document.getElementById('EE').innerHTML=c;
    document.getElementById("card1").style.transform="rotateY(180deg)";
    document.getElementById("card1").style.backgroundColor="black";
    document.getElementById("card2").style.transform="rotateY(180deg)";
    document.getElementById("card2").style.backgroundColor="black";
    document.getElementById("card3").style.transform="rotateY(180deg)";
    document.getElementById("card3").style.backgroundColor="black";
    document.getElementById("card4").style.transform="rotateY(180deg)";
    document.getElementById("card4").style.backgroundColor="black";
    document.getElementById("card5").style.transform="rotateY(180deg)";
    document.getElementById("card5").style.backgroundColor="black";
    document.getElementById("card6").style.transform="rotateY(180deg)";
    document.getElementById("card6").style.backgroundColor="black";
    document.getElementById("card7").style.transform="rotateY(180deg)";
    document.getElementById("card7").style.backgroundColor="black";
    document.getElementById("card8").style.transform="rotateY(180deg)";
    document.getElementById("card8").style.backgroundColor="black";
    document.getElementById("card9").style.transform="rotateY(180deg)";
    document.getElementById("card9").style.backgroundColor="black";
    displayit();
    resultup();}

   else {document.getElementById("bod").style.backgroundColor="red";
        resultdown();}
   
    
  


}

function turn2() {
    

    document.getElementById("card2").style.transform="rotate(0deg)";
    document.getElementById("card2").style.transition="1s";
    document.getElementById("card2").style.backgroundColor="white";

    x=2;

    if (x==c){document.getElementById("bod").style.backgroundColor="green";
    c=Math.ceil(Math.random()*8.9);
    x1=Math.random();
    document.getElementById('EE').innerHTML=c;
    document.getElementById("card1").style.transform="rotateY(180deg)";
    document.getElementById("card1").style.backgroundColor="black";
    document.getElementById("card2").style.transform="rotateY(180deg)";
    document.getElementById("card2").style.backgroundColor="black";
    document.getElementById("card3").style.transform="rotateY(180deg)";
    document.getElementById("card3").style.backgroundColor="black";
    document.getElementById("card4").style.transform="rotateY(180deg)";
    document.getElementById("card4").style.backgroundColor="black";
    document.getElementById("card5").style.transform="rotateY(180deg)";
    document.getElementById("card5").style.backgroundColor="black";
    document.getElementById("card6").style.transform="rotateY(180deg)";
    document.getElementById("card6").style.backgroundColor="black";
    document.getElementById("card7").style.transform="rotateY(180deg)";
    document.getElementById("card7").style.backgroundColor="black";
    document.getElementById("card8").style.transform="rotateY(180deg)";
    document.getElementById("card8").style.backgroundColor="black";
    document.getElementById("card9").style.transform="rotateY(180deg)";
    document.getElementById("card9").style.backgroundColor="black";
    displayit();
    resultup();}

    else {document.getElementById("bod").style.backgroundColor="red";
    resultdown();}

   
}

function turn3() {
    
    document.getElementById("card3").style.transform="rotate(0deg)";
    document.getElementById("card3").style.transition="1s";
    document.getElementById("card3").style.backgroundColor="white";

    x=3;

    if (x==c){document.getElementById("bod").style.backgroundColor="green";
    c=Math.ceil(Math.random()*8.9);
    x1=Math.random();
    document.getElementById('EE').innerHTML=c;
    document.getElementById("card1").style.transform="rotateY(180deg)";
    document.getElementById("card1").style.backgroundColor="black";
    document.getElementById("card2").style.transform="rotateY(180deg)";
    document.getElementById("card2").style.backgroundColor="black";
    document.getElementById("card3").style.transform="rotateY(180deg)";
    document.getElementById("card3").style.backgroundColor="black";
    document.getElementById("card4").style.transform="rotateY(180deg)";
    document.getElementById("card4").style.backgroundColor="black";
    document.getElementById("card5").style.transform="rotateY(180deg)";
    document.getElementById("card5").style.backgroundColor="black";
    document.getElementById("card6").style.transform="rotateY(180deg)";
    document.getElementById("card6").style.backgroundColor="black";
    document.getElementById("card7").style.transform="rotateY(180deg)";
    document.getElementById("card7").style.backgroundColor="black";
    document.getElementById("card8").style.transform="rotateY(180deg)";
    document.getElementById("card8").style.backgroundColor="black";
    document.getElementById("card9").style.transform="rotateY(180deg)";
    document.getElementById("card9").style.backgroundColor="black";
    displayit();
    resultup();}

    else {document.getElementById("bod").style.backgroundColor="red";
    resultdown();}
 
  
}

function turn4() {
    

    document.getElementById("card4").style.transform="rotate(0deg)";
    document.getElementById("card4").style.transition="1s";
    document.getElementById("card4").style.backgroundColor="white";

    x=4;

    if (x==c){document.getElementById("bod").style.backgroundColor="green";
    c=Math.ceil(Math.random()*8.9);
    x1=Math.random();
    document.getElementById('EE').innerHTML=c;
    document.getElementById("card1").style.transform="rotateY(180deg)";
    document.getElementById("card1").style.backgroundColor="black";
    document.getElementById("card2").style.transform="rotateY(180deg)";
    document.getElementById("card2").style.backgroundColor="black";
    document.getElementById("card3").style.transform="rotateY(180deg)";
    document.getElementById("card3").style.backgroundColor="black";
    document.getElementById("card4").style.transform="rotateY(180deg)";
    document.getElementById("card4").style.backgroundColor="black";
    document.getElementById("card5").style.transform="rotateY(180deg)";
    document.getElementById("card5").style.backgroundColor="black";
    document.getElementById("card6").style.transform="rotateY(180deg)";
    document.getElementById("card6").style.backgroundColor="black";
    document.getElementById("card7").style.transform="rotateY(180deg)";
    document.getElementById("card7").style.backgroundColor="black";
    document.getElementById("card8").style.transform="rotateY(180deg)";
    document.getElementById("card8").style.backgroundColor="black";
    document.getElementById("card9").style.transform="rotateY(180deg)";
    document.getElementById("card9").style.backgroundColor="black";
    displayit();
    resultup();}

    else {document.getElementById("bod").style.backgroundColor="red";
    resultdown();}
}

function turn5() {
    

    document.getElementById("card5").style.transform="rotate(0deg)";
    document.getElementById("card5").style.transition="1s";
    document.getElementById("card5").style.backgroundColor="white";

    x=5;

    if (x==c){document.getElementById("bod").style.backgroundColor="green";
    c=Math.ceil(Math.random()*8.9);
    x1=Math.random();
    document.getElementById('EE').innerHTML=c;
    document.getElementById("card1").style.transform="rotateY(180deg)";
    document.getElementById("card1").style.backgroundColor="black";
    document.getElementById("card2").style.transform="rotateY(180deg)";
    document.getElementById("card2").style.backgroundColor="black";
    document.getElementById("card3").style.transform="rotateY(180deg)";
    document.getElementById("card3").style.backgroundColor="black";
    document.getElementById("card4").style.transform="rotateY(180deg)";
    document.getElementById("card4").style.backgroundColor="black";
    document.getElementById("card5").style.transform="rotateY(180deg)";
    document.getElementById("card5").style.backgroundColor="black";
    document.getElementById("card6").style.transform="rotateY(180deg)";
    document.getElementById("card6").style.backgroundColor="black";
    document.getElementById("card7").style.transform="rotateY(180deg)";
    document.getElementById("card7").style.backgroundColor="black";
    document.getElementById("card8").style.transform="rotateY(180deg)";
    document.getElementById("card8").style.backgroundColor="black";
    document.getElementById("card9").style.transform="rotateY(180deg)";
    document.getElementById("card9").style.backgroundColor="black";
    displayit();
    resultup();}

    else {document.getElementById("bod").style.backgroundColor="red";
    resultdown();}
    
}

function turn6() {
    

    document.getElementById("card6").style.transform="rotate(0deg)";
    document.getElementById("card6").style.transition="1s";
    document.getElementById("card6").style.backgroundColor="white";

    x=6;

    if (x==c){document.getElementById("bod").style.backgroundColor="green";
    c=Math.ceil(Math.random()*8.9);
    x1=Math.random();
    document.getElementById('EE').innerHTML=c;
    document.getElementById("card1").style.transform="rotateY(180deg)";
    document.getElementById("card1").style.backgroundColor="black";
    document.getElementById("card2").style.transform="rotateY(180deg)";
    document.getElementById("card2").style.backgroundColor="black";
    document.getElementById("card3").style.transform="rotateY(180deg)";
    document.getElementById("card3").style.backgroundColor="black";
    document.getElementById("card4").style.transform="rotateY(180deg)";
    document.getElementById("card4").style.backgroundColor="black";
    document.getElementById("card5").style.transform="rotateY(180deg)";
    document.getElementById("card5").style.backgroundColor="black";
    document.getElementById("card6").style.transform="rotateY(180deg)";
    document.getElementById("card6").style.backgroundColor="black";
    document.getElementById("card7").style.transform="rotateY(180deg)";
    document.getElementById("card7").style.backgroundColor="black";
    document.getElementById("card8").style.transform="rotateY(180deg)";
    document.getElementById("card8").style.backgroundColor="black";
    document.getElementById("card9").style.transform="rotateY(180deg)";
    document.getElementById("card9").style.backgroundColor="black";
    displayit();
    resultup();}
    else {document.getElementById("bod").style.backgroundColor="red";
    resultdown();}
    
}

function turn7() {
    

    document.getElementById("card7").style.transform="rotate(0deg)";
    document.getElementById("card7").style.transition="1s";
    document.getElementById("card7").style.backgroundColor="white";

    x=7;

    if (x==c){document.getElementById("bod").style.backgroundColor="green";
    c=Math.ceil(Math.random()*8.9);
    x1=Math.random();
    document.getElementById('EE').innerHTML=c;
    document.getElementById("card1").style.transform="rotateY(180deg)";
    document.getElementById("card1").style.backgroundColor="black";
    document.getElementById("card2").style.transform="rotateY(180deg)";
    document.getElementById("card2").style.backgroundColor="black";
    document.getElementById("card3").style.transform="rotateY(180deg)";
    document.getElementById("card3").style.backgroundColor="black";
    document.getElementById("card4").style.transform="rotateY(180deg)";
    document.getElementById("card4").style.backgroundColor="black";
    document.getElementById("card5").style.transform="rotateY(180deg)";
    document.getElementById("card5").style.backgroundColor="black";
    document.getElementById("card6").style.transform="rotateY(180deg)";
    document.getElementById("card6").style.backgroundColor="black";
    document.getElementById("card7").style.transform="rotateY(180deg)";
    document.getElementById("card7").style.backgroundColor="black";
    document.getElementById("card8").style.transform="rotateY(180deg)";
    document.getElementById("card8").style.backgroundColor="black";
    document.getElementById("card9").style.transform="rotateY(180deg)";
    document.getElementById("card9").style.backgroundColor="black";
    displayit();
    resultup();}
    else {document.getElementById("bod").style.backgroundColor="red";
    resultdown();}
  
}

function turn8() {
    

    document.getElementById("card8").style.transform="rotate(0deg)";
    document.getElementById("card8").style.transition="1s";
    document.getElementById("card8").style.backgroundColor="white";

    x=8;

    if (x==c){document.getElementById("bod").style.backgroundColor="green";
    c=Math.ceil(Math.random()*8.9);
    x1=Math.random();
    document.getElementById('EE').innerHTML=c;
    document.getElementById("card1").style.transform="rotateY(180deg)";
    document.getElementById("card1").style.backgroundColor="black";
    document.getElementById("card2").style.transform="rotateY(180deg)";
    document.getElementById("card2").style.backgroundColor="black";
    document.getElementById("card3").style.transform="rotateY(180deg)";
    document.getElementById("card3").style.backgroundColor="black";
    document.getElementById("card4").style.transform="rotateY(180deg)";
    document.getElementById("card4").style.backgroundColor="black";
    document.getElementById("card5").style.transform="rotateY(180deg)";
    document.getElementById("card5").style.backgroundColor="black";
    document.getElementById("card6").style.transform="rotateY(180deg)";
    document.getElementById("card6").style.backgroundColor="black";
    document.getElementById("card7").style.transform="rotateY(180deg)";
    document.getElementById("card7").style.backgroundColor="black";
    document.getElementById("card8").style.transform="rotateY(180deg)";
    document.getElementById("card8").style.backgroundColor="black";
    document.getElementById("card9").style.transform="rotateY(180deg)";
    document.getElementById("card9").style.backgroundColor="black";
    displayit();
    resultup();}

    else {document.getElementById("bod").style.backgroundColor="red";
    resultdown();}
}

function turn9() {
    

    document.getElementById("card9").style.transform="rotate(0deg)";
    document.getElementById("card9").style.transition="1s";
    document.getElementById("card9").style.backgroundColor="white";

    x=9;

    if (x==c){document.getElementById("bod").style.backgroundColor="green";
    c=Math.ceil(Math.random()*8.9);
    x1=Math.random();
    document.getElementById('EE').innerHTML=c;
    document.getElementById("card1").style.transform="rotateY(180deg)";
    document.getElementById("card1").style.backgroundColor="black";
    document.getElementById("card2").style.transform="rotateY(180deg)";
    document.getElementById("card2").style.backgroundColor="black";
    document.getElementById("card3").style.transform="rotateY(180deg)";
    document.getElementById("card3").style.backgroundColor="black";
    document.getElementById("card4").style.transform="rotateY(180deg)";
    document.getElementById("card4").style.backgroundColor="black";
    document.getElementById("card5").style.transform="rotateY(180deg)";
    document.getElementById("card5").style.backgroundColor="black";
    document.getElementById("card6").style.transform="rotateY(180deg)";
    document.getElementById("card6").style.backgroundColor="black";
    document.getElementById("card7").style.transform="rotateY(180deg)";
    document.getElementById("card7").style.backgroundColor="black";
    document.getElementById("card8").style.transform="rotateY(180deg)";
    document.getElementById("card8").style.backgroundColor="black";
    document.getElementById("card9").style.transform="rotateY(180deg)";
    document.getElementById("card9").style.backgroundColor="black";
    displayit();
    resultup();}

    else {document.getElementById("bod").style.backgroundColor="red";
    resultdown();}


}



function displayit(){


if (x1<0.2){
document.getElementById("card1").style.left="5mm";
document.getElementById("card2").style.left="45mm";
document.getElementById("card3").style.left="85mm";
document.getElementById("card4").style.left="125mm";
document.getElementById("card5").style.left="165mm";
document.getElementById("card6").style.left="205mm";
document.getElementById("card7").style.left="245mm";
document.getElementById("card8").style.left="285mm";
document.getElementById("card9").style.left="325mm";}

else if (x1<0.4){
document.getElementById("card4").style.left="5mm";
document.getElementById("card6").style.left="45mm";
document.getElementById("card3").style.left="85mm";
document.getElementById("card1").style.left="125mm";
document.getElementById("card8").style.left="165mm";
document.getElementById("card2").style.left="205mm";
document.getElementById("card9").style.left="245mm";
document.getElementById("card5").style.left="285mm";
document.getElementById("card7").style.left="325mm";}

else if (x1<0.6){
document.getElementById("card9").style.left="5mm";
document.getElementById("card7").style.left="45mm";
document.getElementById("card2").style.left="85mm";
document.getElementById("card8").style.left="125mm";
document.getElementById("card1").style.left="165mm";
document.getElementById("card4").style.left="205mm";
document.getElementById("card5").style.left="245mm";
document.getElementById("card3").style.left="285mm";
document.getElementById("card6").style.left="325mm";}

else if (x1<0.8){
document.getElementById("card2").style.left="5mm";
document.getElementById("card5").style.left="45mm";
document.getElementById("card7").style.left="85mm";
document.getElementById("card3").style.left="125mm";
document.getElementById("card9").style.left="165mm";
document.getElementById("card1").style.left="205mm";
document.getElementById("card6").style.left="245mm";
document.getElementById("card8").style.left="285mm";
document.getElementById("card4").style.left="325mm";}

else if (x1<1){
document.getElementById("card4").style.left="5mm";
document.getElementById("card6").style.left="45mm";
document.getElementById("card2").style.left="85mm";
document.getElementById("card5").style.left="125mm";
document.getElementById("card1").style.left="165mm";
document.getElementById("card8").style.left="205mm";
document.getElementById("card9").style.left="245mm";
document.getElementById("card3").style.left="285mm";
document.getElementById("card7").style.left="325mm";}



}

displayit();


let u=0;
function resultup(){
    u+=5;
    document.getElementById("score").innerHTML=u;
}

function resultdown(){
    u-=1;
    document.getElementById("score").innerHTML=u;
}




