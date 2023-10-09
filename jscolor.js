d=document.body.style
a=["red","plum","purple","green","cyan"];

function nor(){
    u=a[Math.round(Math.random()*(a.length-1))]
    d.backgroundColor=u;
    document.getElementById("result").innerHTML=u
    
}

function hex(){
     ash="#"
    
     r=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
     for(var i=0;i<6;i++){
     r1=r[Math.round(Math.random()*(r.length-1))]
 
     ash+=r1
     
     }
     
     d.backgroundColor=ash;
     document.getElementById("result").innerText=ash

}
