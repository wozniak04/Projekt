let czas;
let as;
let wyb=true;
let zd_as=document.querySelector("#zdj_odp");
const plec=document.querySelector("#plec").innerHTML;

var l=plec.length;
l--;
const plecc=plec[l];

if(plecc=='m')
  zd_as.src="zdjecia/men.png";
else
  zd_as.src="zdjecia/kobita.png";

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
  odp.innerHTML="Na ból głowy polecamy <a href='#sinupret'>Sinupret</a> lub <a href='#calcium'>Gripex Hot</a>";
}

function wapn()
{
  const odp=document.querySelector("#odpe");
  odp.innerHTML="Na nie dobór wapnia mamy <a href='#otrivin'>Molekin D3</a> lub <a href='#calcium'>Gripex Hot</a>";
}

function przezie()
{
  const odp=document.querySelector("#odpe");
  odp.innerHTML="Na przeziębienie zaradzą <a href='#calcium'>Gripex Hot</a> i <a href='#voltaren'>Fervex";
}

function katar()
{
  const odp=document.querySelector("#odpe");
  odp.innerHTML="Katar skutecznie zwalczą <a href='#calcium'>Gripex Hot</a> lub <a href='#gripex'>Envil katar</a>";
}

function zatoki()
{
  const odp=document.querySelector("#odpe");
  odp.innerHTML="Na chore zatoki zaradzi <a href='#gripex'>envil katar</a>";
}

function obrzeki()
{
  const odp=document.querySelector("#odpe");
  odp.innerHTML="Na obrzęki pomoże <a href='#envil'> Voltaren max </a>";
}

function biegunka()
{
  const odp=document.querySelector("#odpe");
  odp.innerHTML="Na biegunke pomoże <a href='#fervex'> Enterol</a>";
}

function bolgardla()
{
  const odp=document.querySelector("#odpe");
  odp.innerHTML="Na ból gardła polecamy <a href='#calcium'> gripex Hot</a> i <a href='#molekin'>Argentin-T</a>";
}

function termo()
{
  const odp=document.querySelector("#odpe");
  odp.innerHTML="Niestety obecnie posiadamy tylko termometr <a href='#argentint'> yuwell </a>";
}

function przetarcia()
{
  const odp=document.querySelector("#odpe");
  odp.innerHTML="Na przetarcia bardzo dobry jest <a href='#octanisept'>octanisept</a>";
}