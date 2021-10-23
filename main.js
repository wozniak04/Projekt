let czas;
let as;
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
function specjalisci()
{ 
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/nasi.mp3");
    as.play();
  }, 1000);

}

function setings()
{
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/ustawienia.mp3");
    as.play();
  }, 1000);
  

}
function stop()
{
    as.load();
    clearTimeout(czas);
}

function leki()
{
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/leki.mp3");
    as.play();
  }, 1000);

}

function towary()
{
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/towary.mp3");
    as.play();
  }, 1000);

}

function nasz()
{
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/sklepy.mp3");
    as.play();
  }, 1000);

}

function onas()
{
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/nas.mp3");
    as.play();
  }, 1000);

}

function szuk()
{
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/szukaj.mp3");
    as.play();
  }, 1000);

}