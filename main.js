let czas;
let as;
const plec=document.querySelector("#plec").innerHTML;
var l=plec.length;
l--;
const plecc=plec[l];



function specjalisci()
{ 
  if(plecc=='m')
  {
    czas=setTimeout(() => {
      as=new Audio("asystent/meski/nasi.mp3");
      as.play();
    }, 1000);
  }
}

function setings()
{ 
  if(plecc=='m')
  {
    czas=setTimeout(() => {
      as=new Audio("asystent/meski/ustawienia.mp3");
      as.play();
    }, 1000);
  }
}
function stop()
{
    as.load();
    clearTimeout(czas);
}

function towary()
{ 
  if(plecc=='m')
  {
    czas=setTimeout(() => {
      as=new Audio("asystent/meski/towary.mp3");
      as.play();
    }, 1000);
  }
}

function nasz()
{ 
  if(plecc=='m')
  {
    czas=setTimeout(() => {
      as=new Audio("asystent/meski/sklepy.mp3");
      as.play();
    }, 1000);
  }
}

function onas()
{ 
  if(plecc=='m')
  {
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/nas.mp3");
    as.play();
  }, 1000);
  }
}

function sinu()
{
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/sinupret.mp3");
    as.play();
  }, 1000);

}
function calcu()
{
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/calcium.mp3");
    as.play();
  }, 1000);
}

function grip()
{
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/gripex.mp3");
    as.play();
  }, 1000);
}

function envil()
{
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/envil.mp3");
    as.play();
  }, 1000);
}

function voltar()
{
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/voltaren.mp3");
    as.play();
  }, 1000);
}

function fer()
{
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/fervex.mp3");
    as.play();
  }, 1000);
}

function enterol()
{
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/enetrol.mp3");
    as.play();
  }, 1000);
}

function otri()
{
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/otrivin.mp3");
    as.play();
  }, 1000);
}

function molek()
{
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/molekind3.mp3");
    as.play();
  }, 1000);
}

function arge()
{
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/argentint.mp3");
    as.play();
  }, 1000);
}

function yuwe()
{
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/termometr.mp3");
    as.play();
  }, 1000);
}

function octa()
{
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/octanisept.mp3");
    as.play();
  }, 1000);
}

function ustawienia()
{
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/ustawienia.mp3");
    as.play();
  }, 1000);
}