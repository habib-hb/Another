

var d=0;
var m="";
var r=Math.random();
r=r*4;
r=Math.floor(r);
var e=["Habib","Abid","Momena"];
var p=Math.random();
p=p*4;
p=Math.floor(p);
for(var i=0;i<=10;i=i+2){
  
    d=d+2;
    m=m+"<p>"+d+r+"- "+e[2]+"</p>";
    
document.getElementById("par").innerHTML=m;

}


    document.getElementById("bt").onclick=function(){
        if(p==0){
           alert("Habib...")
        }
        if(p==1){
           alert("Abid...")
        }
        if(p==2){
           alert("Momena...")
        }
        if(p==3){
           alert("Zero...")
        }
        
    }

  
   
document.getElementById("btb").onclick=function(){
    var inp="";
    inp=document.getElementById("inp").value;
    var y=Math.random();
    y=y*4;
    y=Math.floor(y);  
    var pic="<img src='pictures/two.jpg' height='200' width='200'>"
    var picb="<img src='pictures/two.jpg' height='200' width='200'>"
    var picc="<img src='pictures/two.jpg' height='200' width='200'>"
    var picd="<img src='pictures/two.jpg' height='200' width='200'>"

if(inp==y){
    alert("The number is right...");
    document.getElementById("pic").innerHTML=pic;
}
else{
    alert("Wrong...The number was "+y)
}

}      
        
 

        
        



























































































































