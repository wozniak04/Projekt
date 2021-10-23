let font = 20;

function fontplus(){
    let x = document.getElementsByClassName("font");
    font += 1;
    for (let i = 0; i < x.length; i++) {
      x[i].style.fontSize = font+"px" ;
    }
}
function fontminus(){
    let x = document.getElementsByClassName("font");
    font -= 1;
    for (let i = 0; i < x.length; i++) {
        x[i].style.fontSize = font+"px";
    }    
}
