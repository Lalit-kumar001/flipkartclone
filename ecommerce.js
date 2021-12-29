let image1=document.getElementById('image1');
let image2=document.getElementById('image2');
let image3=document.getElementById('image3');

image2.style.display="none";
image3.style.display="none";

setInterval(fading,6000);
function first(){
    image3.style.display="none";
    image1.style.display="block";
}


function show(){
    image2.style.display="none";
    image3.style.display="block";
    // first();
    setTimeout(first,2000);
}
function fading(){

    image1.style.display="none";
    // image3.style.display="none";
    image2.style.display="block";
    setTimeout(show,2000);
}



