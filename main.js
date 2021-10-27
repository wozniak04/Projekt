let czas;
let as;
let wyb=true;
const plec=document.querySelector("#plec").innerHTML;
var l=plec.length;
l--;
const plecc=plec[l];

function wybor1()
{
  wyb=true;
}

function wybor()
{
  wyb=false;
}

function specjalisci()
{ 
  if(wyb==true)
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
}

function stop()
{
    as.load();
    clearTimeout(czas);
}

function towary()
{ 
  if(wyb==true)
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
}

function nasz()
{ 
  if(wyb==true)
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
}

function onas()
{ 
  if(wyb==true)
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
}

function sinu()
{ 
  if(wyb==true)
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
}

function calcu()
{ 
  if(wyb==true)
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
}

function grip()
{ 
  if(wyb==true)
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
}

function envil()
{
  if(wyb==true)
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
}

function voltar()
{ 
  if(wyb==true)
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
}

function fer()
{ 
  if(wyb==true)
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
}

function enterol()
{
  if(wyb==true)
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
}

function otri()
{
  if(wyb==true)
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
}

function molek()
{
  if(wyb==true)
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
}

function arge()
{ 
  if(wyb==true)
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
}

function yuwe()
{
  if(wyb==true)
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
}

function octa()
{
  if(wyb==true)
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
}

function ustawienia()
{ 
  if(wyb==true)
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
}

function pacha()
{
  if(wyb==true)
  {
    if(plecc=='m')
    {
    czas=setTimeout(() => {
      as=new Audio("asystent/meski/paszki.mp3");
      as.play();
    }, 1000);
    }

    if(plecc=='k')
    {
      czas=setTimeout(() => {
        as=new Audio("asystent/zenski/paszki.mp3");
        as.play();
      }, 1000);
    }
  }
}

function wozini()
{
  if(wyb==true)
  {
    if(plecc=='m')
    {
    czas=setTimeout(() => {
      as=new Audio("asystent/meski/wozniak.mp3");
      as.play();
    }, 1000);
    }

    if(plecc=='k')
    {
      czas=setTimeout(() => {
        as=new Audio("asystent/zenski/wozniak.mp3");
        as.play();
      }, 1000);
    }
  }
}

function gut()
{
  if(wyb==true)
  {
    if(plecc=='m')
    {
    czas=setTimeout(() => {
      as=new Audio("asystent/meski/guth.mp3");
      as.play();
    }, 1000);
    }

    if(plecc=='k')
    {
      czas=setTimeout(() => {
        as=new Audio("asystent/zenski/guth.mp3");
        as.play();
      }, 1000);
    }
  }
}

function bolglowy()
{
  const odp=document.querySelector("#odpe");
  odp.innerHTML=" na ból głowy polecamy Sinupret lub Gripex Hot";
}

function wapn()
{
  const odp=document.querySelector("#odpe");
  odp.innerHTML=" na nie dobór wapnia mamy Molekin D3 lub  Gripex Hot";
}

function przezie()
{
  const odp=document.querySelector("#odpe");
  odp.innerHTML="na przeziębienie zaradzą Gripex Hot i Fervex";
}

function katar()
{
  const odp=document.querySelector("#odpe");
  odp.innerHTML="katar skutecznie zwalczą Gripex Hot lub Envil katar";
}

function zatoki()
{
  const odp=document.querySelector("#odpe");
  odp.innerHTML="na chore zatoki zaradzi emvil katar";
}

function obrzeki()
{
  const odp=document.querySelector("#odpe");
  odp.innerHTML="na obrzęki pomoże Voltaren max";
}

function biegunka()
{
  const odp=document.querySelector("#odpe");
  odp.innerHTML="na biegunke pomoże Enterol";
}

function bolgardla()
{
  const odp=document.querySelector("#odpe");
  odp.innerHTML="na ból gardła polecamy gripex Hot i Argentin-T";
}

function termo()
{
  const odp=document.querySelector("#odpe");
  odp.innerHTML="niestety obecnie posiadamy tylko termometr yuwell";
}

function przetarcia()
{
  const odp=document.querySelector("#odpe");
  odp.innerHTML="na przetarcia bardzo dobry jest octanisept";
}