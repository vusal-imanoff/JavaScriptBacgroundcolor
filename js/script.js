let time=new Date().getHours();
let div= document.getElementById('first');
if(time>18 && time<22){
   div.style.backgroundColor="grey";
}
else if(time>22 && time<6){
    div.style.backgroundColor="black"
}
else{
    div.style.backgroundColor="yellow"
}
