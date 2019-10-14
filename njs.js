


document.getElementById("bt").onclick=function habib() {
  
let a=document.getElementById("inpa").value;
let b=document.getElementById("inpb").value;
let c=document.getElementById("inpc").value;
let d=document.getElementById("inpd").value;
let e=document.getElementById("inpe").value;
let f=document.getElementById("inpf").value;
let g=document.getElementById("inpg").value;
let h=document.getElementById("inph").value;
let i=document.getElementById("inpi").value;

//only one to choose



//one
if(a=="x"){
    cha=2;
  

     ppa=1
    document.getElementById("ima").innerHTML="<img src='pictures/on.jpg'>";
}
if(a==0){
    cha=2;
   

    ppa=1
    document.getElementById("ima").innerHTML="<img src='pictures/tw.jpg'>";
}
if(a=="Choose- A"){
    ppa=3;
}
//oneb
if(b=="x"){
  
    chb=2;
  
    ppb=1
    document.getElementById("imb").innerHTML="<img src='pictures/on.jpg'>";
}
if(b==0){
  
    chb=2;
   
    ppb=1
    document.getElementById("imb").innerHTML="<img src='pictures/tw.jpg'>";
}
if(b=="Choose- B"){
    ppb=3;
}
//onec
if(c=="x"){
   
    chc=2;
   
    ppc=1
    document.getElementById("imc").innerHTML="<img src='pictures/on.jpg'>";
}
if(c==0){
  
    chc=2;
 

    ppc=1
    document.getElementById("imc").innerHTML="<img src='pictures/tw.jpg'>";
}
if(c=="Choose- C"){
    ppc=3;
}
//twoa
if(d=="x"){
   
    chd=2;
  

    ppd=1
    document.getElementById("imd").innerHTML="<img src='pictures/on.jpg'>";
}
if(d==0){
  
    chd=2;
   

    ppd=1
    document.getElementById("imd").innerHTML="<img src='pictures/tw.jpg'>";
}
if(d=="Choose- D"){
    ppd=3;
}

//twob
if(e=="x"){
  
    che=2;
   

    ppe=1
    document.getElementById("ime").innerHTML="<img src='pictures/on.jpg'>";
}
if(e==0){
   
    che=2;
   

    ppe=1
    document.getElementById("ime").innerHTML="<img src='pictures/tw.jpg'>";
}
if(e=="Choose- E"){
    ppe=3;
}
//twoc
if(f=="x"){
   
    chf=2;
   

    ppf=1
    document.getElementById("imf").innerHTML="<img src='pictures/on.jpg'>";
}
if(f==0){
   
    chf=2;
    

    ppf=1
    document.getElementById("imf").innerHTML="<img src='pictures/tw.jpg'>";
}
if(f=="Choose- F"){
    ppf=3;
    
}
//threea
if(g=="x"){
  
    chg=2;
   
    ppg=1
    document.getElementById("img").innerHTML="<img src='pictures/on.jpg'>";
}
if(g==0){
   
    chg=2;
   
    ppg=1
    document.getElementById("img").innerHTML="<img src='pictures/tw.jpg'>";
}
if(g=="Choose- G"){
    ppg=3;
}
//threeb
if(h=="x"){
   
    chh=2;
  

    pph=1
    document.getElementById("imh").innerHTML="<img src='pictures/on.jpg'>";
}
if(h==0){
   
    chh=2;
   

    pph=1
    document.getElementById("imh").innerHTML="<img src='pictures/tw.jpg'>";
}
if(h=="Choose- H"){
    pph=3;
}
//threec
if(i=="x"){
  
    chi=2;

    ppi=1;
    document.getElementById("imi").innerHTML="<img src='pictures/on.jpg'>";
}
if(i==0){
  
    chi=2;

    ppi=1;
    document.getElementById("imi").innerHTML="<img src='pictures/tw.jpg'>";
}
if(i=="Choose- I"){
    ppi=3;
}






//wingame one
let ma=a+b;
let ca=b+c;


if(ma==ca){
    ppa=2;
   

    alert("You are right.")
    alert("You Won The Game...")
    document.getElementById("ima").innerHTML="<img src='pictures/nice.jpg'>"
    document.getElementById("imb").innerHTML="<img src='pictures/nice.jpg'>"
    document.getElementById("imc").innerHTML="<img src='pictures/nice.jpg'>"
}



//wingame two
let mb=d+e;
let cb=e+f;

if(mb==cb){
    ppa=2;
  
    alert("You are right.")
    alert("You Won The Game...")
    document.getElementById("imd").innerHTML="<img src='pictures/nice.jpg'>"
    document.getElementById("ime").innerHTML="<img src='pictures/nice.jpg'>"
    document.getElementById("imf").innerHTML="<img src='pictures/nice.jpg'>"
}

//wingame three
let mc=g+h;
let cc=h+i;

if(mc==cc){
    ppa=2;
   
    alert("You are right.")
    alert("You Won The Game...")
    document.getElementById("img").innerHTML="<img src='pictures/nice.jpg'>"
    document.getElementById("imh").innerHTML="<img src='pictures/nice.jpg'>"
    document.getElementById("imi").innerHTML="<img src='pictures/nice.jpg'>"


}

//wingame four
let md=a+e;
let cd=e+i;

if(md==cd){
    ppa=2;
   
    alert("You are right.")
    alert("You Won The Game...")
    document.getElementById("ima").innerHTML="<img src='pictures/nice.jpg'>"
    document.getElementById("ime").innerHTML="<img src='pictures/nice.jpg'>"
    document.getElementById("imi").innerHTML="<img src='pictures/nice.jpg'>"
    
}


//wingame five
let me=c+e;
let ce=e+g;

if(me==ce){
    ppa=2;
  
    alert("You are right.")
    alert("You Won The Game...")
    document.getElementById("imc").innerHTML="<img src='pictures/nice.jpg'>"
    document.getElementById("ime").innerHTML="<img src='pictures/nice.jpg'>"
    document.getElementById("img").innerHTML="<img src='pictures/nice.jpg'>"
}

//wingame six
let mf=a+d;
let cf=d+g;

if(mf==cf){
    ppa=2;
   
    alert("You are right.")
    alert("You Won The Game...")
    document.getElementById("ima").innerHTML="<img src='pictures/nice.jpg'>"
    document.getElementById("imd").innerHTML="<img src='pictures/nice.jpg'>"
    document.getElementById("img").innerHTML="<img src='pictures/nice.jpg'>"
}

//wingame seven
let mg=b+e;
let cg=e+h;

if(mg==cg){
    ppa=2;
   
    alert("You are right.")
    alert("You Won The Game...")
    document.getElementById("imb").innerHTML="<img src='pictures/nice.jpg'>"
    document.getElementById("ime").innerHTML="<img src='pictures/nice.jpg'>"
    document.getElementById("imh").innerHTML="<img src='pictures/nice.jpg'>"
}

//wingame eight
let mh=c+f;
let ch=f+i;

if(mh==ch){
    ppa=2;
   
    alert("You are right.")
    alert("You Won The Game...")
    document.getElementById("imc").innerHTML="<img src='pictures/nice.jpg'>"
    document.getElementById("imf").innerHTML="<img src='pictures/nice.jpg'>"
    document.getElementById("imi").innerHTML="<img src='pictures/nice.jpg'>"
}
function v(){ let ttb=ppa;
    if(ttb==2){
        document.getElementById("ppp").innerHTML="Hope You Have Enjoyed The Game...";
    }
}

function r(){let tta=ppa+ppb+ppc+ppd+ppe+ppf+ppg+pph+ppi;

    if(tta==9){
        alert("The game has Ended...")
        document.getElementById("ppp").innerHTML="Hope you will play again...";
      }
    }
    function ff(){
        if(ppa==1){
            document.getElementById("ppp").innerHTML="Let Other To Choose Another Number...";
        }
        if(ppb==1){
            document.getElementById("ppp").innerHTML="Let Other To Choose Another Number...";
        }
        if(ppc==1){
            document.getElementById("ppp").innerHTML="Let Other To Choose Another Number...";
        }
        if(ppd==1){
            document.getElementById("ppp").innerHTML="Let Other To Choose Another Number...";
        }
        if(ppe==1){
            document.getElementById("ppp").innerHTML="Let Other To Choose Another Number...";
                    }
        if(ppf==1){
            document.getElementById("ppp").innerHTML="Let Other To Choose Another Number...";
        }
        if(ppg==1){
            document.getElementById("ppp").innerHTML="Let Other To Choose Another Number...";
        }            
        if(pph==1){
            document.getElementById("ppp").innerHTML="Let Other To Choose Another Number...";
        }
        if(ppi==1){
            document.getElementById("ppp").innerHTML="Let Other To Choose Another Number...";
        }
    }
    
function t(){
    let ttc=ppa+ppb+ppc+ppd+ppe+ppf+ppg+pph+ppi;
    if(ttc==27){
        document.getElementById("ppp").innerHTML="Choose Any Number First..."
    }
   
}


ff();
v();
r();
t();


}






//refresh button part...

document.getElementById("btb").onclick=function(){

    document.getElementById("inpa").value="Choose- A";
    document.getElementById("inpb").value="Choose- B";
    document.getElementById("inpc").value="Choose- C";
    document.getElementById("inpd").value="Choose- D";
    document.getElementById("inpe").value="Choose- E";
    document.getElementById("inpf").value="Choose- F";
    document.getElementById("inpg").value="Choose- G";
    document.getElementById("inph").value="Choose- H";
    document.getElementById("inpi").value="Choose- I";
    
    document.getElementById("ima").innerHTML= "<img src='pictures/what.jpg'>";
    document.getElementById("imb").innerHTML= "<img src='pictures/what.jpg'>";
    document.getElementById("imc").innerHTML= "<img src='pictures/what.jpg'>";
    document.getElementById("imd").innerHTML= "<img src='pictures/what.jpg'>";
    document.getElementById("ime").innerHTML= "<img src='pictures/what.jpg'>";
    document.getElementById("imf").innerHTML= "<img src='pictures/what.jpg'>";
    document.getElementById("img").innerHTML= "<img src='pictures/what.jpg'>";
    document.getElementById("imh").innerHTML= "<img src='pictures/what.jpg'>";
    document.getElementById("imi").innerHTML= "<img src='pictures/what.jpg'>";
    
    
    document.getElementById("ppp").innerHTML="";
    
    
    }
document.getElementById("sbtA").onclick=function(){

document.getElementById("ooa").innerHTML="Not available!";
document.getElementById("oza").innerHTML="0"
document.getElementById("oob").innerHTML="Not available!"
document.getElementById("ozb").innerHTML="0"
document.getElementById("ooc").innerHTML="Not available!"
document.getElementById("ozc").innerHTML="0"
document.getElementById("ood").innerHTML="Not available!"
document.getElementById("ozd").innerHTML="0"
document.getElementById("ooe").innerHTML="Not available!"
document.getElementById("oze").innerHTML="0"
document.getElementById("oof").innerHTML="Not available!"
document.getElementById("ozf").innerHTML="0"
document.getElementById("oog").innerHTML="Not available!"
document.getElementById("ozg").innerHTML="0"
document.getElementById("ooh").innerHTML="Not available!"
document.getElementById("ozh").innerHTML="0"
document.getElementById("ooi").innerHTML="Not available!"
document.getElementById("ozi").innerHTML="0"
document.getElementById("cheA").innerHTML='<input type="radio" name="age" checked>';



    }

document.getElementById("sbtB").onclick=function(){

document.getElementById("oza").innerHTML="Not available!"
document.getElementById("ooa").innerHTML="x"
document.getElementById("ozb").innerHTML="Not available!"
document.getElementById("oob").innerHTML="x"
document.getElementById("ozc").innerHTML="Not available!"
document.getElementById("ooc").innerHTML="x"
document.getElementById("ozd").innerHTML="Not available!"
document.getElementById("ood").innerHTML="x"
document.getElementById("oze").innerHTML="Not available!"
document.getElementById("ooe").innerHTML="x"
document.getElementById("ozf").innerHTML="Not available!"
document.getElementById("oof").innerHTML="x"
document.getElementById("ozg").innerHTML="Not available!"
document.getElementById("oog").innerHTML="x"
document.getElementById("ozh").innerHTML="Not available!"
document.getElementById("ooh").innerHTML="x"
document.getElementById("ozi").innerHTML="Not available!"
document.getElementById("ooi").innerHTML="x"


document.getElementById("cheB").innerHTML='<input type="radio" name="age" checked>';

   

}
















































































