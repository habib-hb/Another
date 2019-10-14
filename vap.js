var one="<i>i am a student</i>"
var two=[30+40+78,40+76]
var three=["<span>Habib</span> "+"<i>student</i>"]

two.push(40+90)
two[3]=30+30;

document.getElementById("a").onclick=function(){document.getElementById("a").innerHTML=one}


document.getElementById("b").onclick=function(){document.getElementById("b").innerHTML=two}


alert("the page has been loaded...")



document.getElementById("c").onclick=function(){document.getElementById("c").innerHTML=three}



document.getElementById("but").onclick=function(){

var habib;

habib=document.getElementById("i").value;

document.getElementById("paste").innerHTML=habib;
}


document.getElementById("bt").onclick=function(){

var a;
var b;
a="habib";
b=document.getElementById("input").value;

if(a==b){
    alert("The boss....");
}

else{
    alert("wrong!!!!");
}

}

document.getElementById("ipb").onclick=function(){
var mome;
var hab;
mome="Momena";


if(document.getElementById("ipa").value==mome){
    alert("You are right");document.getElementById("pp").innerHTML="<img src='images/amazing.jpg' height='200' width='200'><p style='color:green'>Done...The title has matched.</p>";
}
else{
    alert("Wrong!!! The number was "+mome);document.getElementById("pp").innerHTML="<img src='pictures/eight.jpg' height='200' width='200'> <p style='color:red'>Unmatched!!!</p>";
}
}


document.getElementById("pb").onclick=function(){
var pass="habib";

if(document.getElementById("pass").value==pass){
    alert("Welcome...")
}
else{
    alert("The password is wrong!!! Try again...")
}
}





























































































