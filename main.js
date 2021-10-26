let czas;
let as;
const plec=document.querySelector("#plec").innerHTML;
var l=plec.length;
l--;
const plecc=plec[l];

function cos(){
alert("cos");

}

function specjalisci()
{ 
  if(plecc=='m')
  {
    czas=setTimeout(() => {
      as=new Audio("asystent/meski/nasi.mp3");
      as.play();
    }, 1000);
  }

  if(plecc=='k')
  {
    czas=setTimeout(() => {
      as=new Audio("asystent/zenski/nasi.mp3");
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

  if(plecc=='k')
  {
    czas=setTimeout(() => {
      as=new Audio("asystent/zenski/towary.mp3");
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
  if(plecc=='k')
  {
    czas=setTimeout(() => {
      as=new Audio("asystent/zenski/sklepy.mp3");
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
  if(plecc=='k')
  {
    czas=setTimeout(() => {
      as=new Audio("asystent/zenski/nas.mp3");
      as.play();
    }, 1000);
  }
}

function sinu()
{ 
  if(plecc=='m')
  {
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/sinupret.mp3");
    as.play();
  }, 1000);
  }
  
  if(plecc=='k')
  {
    czas=setTimeout(() => {
      as=new Audio("asystent/zenski/sinupret.mp3");
      as.play();
    }, 1000);
  }
}
function calcu()
{ 
  if(plecc=='m')
  {
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/calcium.mp3");
    as.play();
  }, 1000);
  } 

  if(plecc=='k')
  {
    czas=setTimeout(() => {
      as=new Audio("asystent/zenski/calcium.mp3");
      as.play();
    }, 1000);
  }
}

function grip()
{ 
  if(plecc=='m')
  {
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/gripex.mp3");
    as.play();
  }, 1000);
  } 
  
  if(plecc=='k')
  {
    czas=setTimeout(() => {
      as=new Audio("asystent/zenski/gripex.mp3");
      as.play();
    }, 1000);
  }
}

function envil()
{
  if(plecc=='m')
  {
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/envil.mp3");
    as.play();
  }, 1000);
  }

  if(plecc=='k')
  {
    czas=setTimeout(() => {
      as=new Audio("asystent/zenski/envil.mp3");
      as.play();
    }, 1000);
  }
}

function voltar()
{ 
  if(plecc=='m')
  {
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/voltaren.mp3");
    as.play();
  }, 1000);
  }

  if(plecc=='k')
  {
    czas=setTimeout(() => {
      as=new Audio("asystent/zenski/voltaren.mp3");
      as.play();
    }, 1000);
  }
}

function fer()
{ 
  if(plecc=='m')
  {
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/fervex.mp3");
    as.play();
  }, 1000);
  }

  if(plecc=='k')
  {
    czas=setTimeout(() => {
      as=new Audio("asystent/zenski/fervex.mp3");
      as.play();
    }, 1000);
  }
}

function enterol()
{
  if(plecc=='m')
  {
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/enetrol.mp3");
    as.play();
  }, 1000);
  }

  if(plecc=='k')
  {
    czas=setTimeout(() => {
      as=new Audio("asystent/zenski/enterol.mp3");
      as.play();
    }, 1000);
  }
}

function otri()
{
  if(plecc=='m')
  {
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/otrivin.mp3");
    as.play();
  }, 1000);
  }

  if(plecc=='k')
  {
    czas=setTimeout(() => {
      as=new Audio("asystent/zenski/otrivin.mp3");
      as.play();
    }, 1000);
  }
}

function molek()
{
  if(plecc=='m')
  {
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/molekind3.mp3");
    as.play();
  }, 1000);
  }

  if(plecc=='k')
  {
    czas=setTimeout(() => {
      as=new Audio("asystent/zenski/molekind3.mp3");
      as.play();
    }, 1000);
  }
}

function arge()
{
  if(plecc=='m')
  {
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/argentint.mp3");
    as.play();
  }, 1000);
  }

  if(plecc=='k')
  {
    czas=setTimeout(() => {
      as=new Audio("asystent/zenski/argentint.mp3");
      as.play();
    }, 1000);
  }
}

function yuwe()
{
  if(plecc=='m')
  {
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/termometr.mp3");
    as.play();
  }, 1000);
  }

  if(plecc=='k')
  {
    czas=setTimeout(() => {
      as=new Audio("asystent/zenski/terrmometr.mp3");
      as.play();
    }, 1000);
  }
}

function octa()
{
  if(plecc=='m')
  {
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/octanisept.mp3");
    as.play();
  }, 1000);
  }

  if(plecc=='k')
  {
    czas=setTimeout(() => {
      as=new Audio("asystent/zenski/octanisept.mp3");
      as.play();
    }, 1000);
  }
}

function ustawienia()
{ 
  if(plecc=='m')
  {
  czas=setTimeout(() => {
    as=new Audio("asystent/meski/ustawienia.mp3");
    as.play();
  }, 1000);
  }

  if(plecc=='k')
  {
    czas=setTimeout(() => {
      as=new Audio("asystent/zenski/ustawienia.mp3");
      as.play();
    }, 1000);
  }
}