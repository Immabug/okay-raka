
function volume(){
    var sound = document.getElementById("sound");
    sound.volume = 0.3;
}
volume();



function Noo(){
    const no = document.getElementById(`no`);
    const replace = document.querySelector(`.replacer`);
    let i = 0;
    i+= 2;
    let replacer = (i * 2);
   
   no.style.display ="none";
   no.style.display ="block";
   no.style.position = "absolute";
   no.style.top  =`${replacer}em`;
   if(replacer == 12) {
    no.style.left  =`${replacer}em`;
    alert(`dapat lage okay ka`);
    
   }
   else if(replacer == 16) {
    replacer = replacer - i;
    no.style.top  =`${replacer}em`;
    alert(`gahig ulo`);
   }
   
   else if(replacer >= 22) {
    no.style.top  =`${replacer}em`;
    console.log(replacer);
    location.reload();
   }
}


