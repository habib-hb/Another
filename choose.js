document.getElementById("bt").onclick=function(){
var inp=document.getElementById("inp").value;
var inpb=document.getElementById("inpb").value;
var inpc=document.getElementById("inpc").value;
var inpd=document.getElementById("inpd").value;
var dd;
if(inpd==inp){
    dd=0;
    
}

if(inpd==inpb){
    dd=1;
   
}
if(inpd==inpc){
    dd=2;
    
}

var gg=1;
var fal=false;
while(fal==false){
    var ran=Math.random();
    ran=ran*3;
    ran=Math.floor(ran);
    var ggb;
    if(ran==0){
        ggb=inp;
    }
    if(ran==1){
        ggb=inpb;
    }
    if(ran==2){
        ggb=inpc;
    }
    if(ran==dd){
        fal=true;
        alert("You are right the text is "+ggb+" it took "+gg+" guesses.")
    }
    else{
        gg++;
    }
}























}


































































































