alert("The Game is Begun...")

document.getElementById("bt").onclick=function(){
var inp;
inp=document.getElementById("inp").value;
 var d;
 var t=Math.random();
 t=t*3;
 t=Math.floor(t);
 if(inp=="momena"){
     d=0; 
     }
 if(inp=="abid"){
     d=1; 
 }
 if(inp=="habib"){
     d=2;
 }
if(t==0){
    document.getElementById("pic").innerHTML="<img src='pictures/one.jpg' height='200' width='200'>"
}
if(t==1){
    document.getElementById("pic").innerHTML="<img src='pictures/two.jpg' height='200' width='200'>"
}
if(t==2){
    document.getElementById("pic").innerHTML="<img src='pictures/three.jpg' height='200' width='200'>"
}

if(t==d){
  
    document.getElementById("par").innerHTML="<i style='color:yellowgreen'>Awesome!!!</i>"

    alert("You are right...!!!");
}

if(t!=d){
    if(t==0){
    t="Momena...";
} 
if(t==1){
    t="Abid...";
}
if(t==2){
    t="Habib...";
}
    document.getElementById("par").innerHTML="Not done yet!!! The title was "+t; 
 
}



}

var j=""; 
var g=0;
for(var i=0;i<=10;i=i+2){
    
    g=g+4;
j=j+"<p>"+g+".</p>";


document.getElementById("parb").innerHTML=j;
}

                                                                                                                                                                                  



















































































