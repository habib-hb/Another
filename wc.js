
document.getElementById("bt").onclick=function(){
   
    var inp=document.getElementById("select").value;
    var fal=false;
    var plus=1;
    var one="<img src='pictures/one.jpg' height='200' width='200'>"
    var two="<img src='pictures/two.jpg' height='200' width='200'>"
    var three="<img src='pictures/three.jpg' height='200' width='200'>"

    while(fal==false){

        var go=Math.random();
        go=go*3;
        go=Math.floor(go);
       if(inp==go){
           fal=true;
           alert("Right the number is "+go+" it took me "+plus+" guesses...");
           if(go==0){
               document.getElementById("div").innerHTML=one;
           }
           if(go==1){
               document.getElementById("div").innerHTML=two;
           }
           if(go==2){
               document.getElementById("div").innerHTML=three;
           }
       }
       else{
           plus++;
       }





    }







}




























































