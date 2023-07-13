let image =  document.querySelector(".slidshow-images");
let translate = 0;
setInterval(() => {
    if(translate >= 0 && translate < 400){
        translate+=100
    }
    else{
        translate = 0
    }
    image.style.transition= "0.5s";
    image.style.transform= `translateX(${-translate}%)`
}, 2000);
function right(){
    if(translate < 400){
        translate+=100
        image.style.transition= "0.2s";
        image.style.transform= `translateX(${-translate}%)`
    }
}
function left(){
    if(translate < 400){
        translate-=100
        image.style.transition= "0.2s";
        image.style.transform= `translateX(${-translate}%)`
    }
}
/*-------------------products--------------*/
let rightbtn =  document.querySelector("boe-button-right")
let leftbtn =  document.querySelector("boe-button-left")

function rbtn(){
    best_of_electronics2.style.transform="translateX(-30%)"
    rightbtn.style.display="none"
}
function lftn(){
    best_of_electronics2.style.transform="translateX(1%)"
    rightbtn.style.display="none"
}