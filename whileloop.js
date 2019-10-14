

document.getElementById("guess").onclick=function(){

var myNumber=document.getElementById("myNumber").value;

var gotIt=false;

var numberOfGuesses=1;

while(gotIt==false){
var guess=Math.random();
guess=guess*6;
guess=Math.floor(guess);
if(guess==myNumber){
gotIt=true;
alert("Got it! It was a "+ guess+". it took me "+numberOfGuesses +" guesses.");

}
else{
    numberOfGuesses++;
    
}







}

}























































