

const wysli=document.querySelector("#przycisk_dalej_logowanie");
wysli.disabled=true;
var g=0;


function sprawdz_haslo()
{  
   const haslo=document.getElementById("logowanie_h").value;

   if(haslo.length<7)
   {
       document.querySelector("#blad_password").innerHTML="hasło powinno mieć conajmniej osiem znaków";
       
   }
   else
   {
       document.querySelector("#blad_password").innerHTML="";
       
       odb();
   }
    
}

function porownanie()
{   
        const haslo1=document.querySelector("#logowanie_h").value;
        const haslo2=document.querySelector("#logowanie_h1").value;
        
        if(haslo1 != haslo2)
        {
            document.querySelector("#blad_password_powtorz").innerHTML="podane hasło są różne";
            
        }
        if(haslo1 == haslo2)
        {   
            document.querySelector("#blad_password_powtorz").innerHTML="";
            odb();
        }
}

function czysc1()
{
    document.querySelector("#logowanie_h").value="";
}

function czysc2()
{
    document.querySelector("#logowanie_h1").value="";
}

function imie()
{
    const blad=document.querySelector("#blad_imie");
    const imiee=document.querySelector("#logowanie_n").value;
    if(imiee=="")
        blad.innerHTML="podaj imie";
    else
    {
        blad.innerHTML="";
        odb();
    }
}

 function nazwisko()
 {
    const blad=document.querySelector("#blad_nazwisko");
    const nazwiskoo=document.querySelector("#logowanie_s").value;
    
    if(nazwiskoo=="")
        
        blad.innerHTML="podaj nazwisko";
    
    else
    {
        blad.innerHTML="";
        odb();
    }
 }


function wybor(wyb)
{
    odb()
}

function data(date)
{
    if(date!="")
        odb();

}

function odb()
{   
    g++;
    const imie=document.querySelector("#blad_imie").value;
    const nazwisko=document.querySelector("#blad_nazwisko").value;
    const haslo=document.querySelector("#blad_password").value;
    const powtorz=document.querySelector("#blad_password_powtorz").value;
    const uzytkownik=document.querySelector("#blad_username").value;
    const email=document.querySelector("#blad_email").value;
    const wyb1=document.querySelector("#kobieta_box").value;
    const wyb2=document.querySelector("#mezczyzna_box").value;
    const dat=document.querySelector("#logowanie_d").value;

    if(g>=8 && haslo==undefined && powtorz==undefined && uzytkownik==undefined && email==undefined && imie==undefined && nazwisko==undefined &&(wyb1=="Kobieta"||wyb2=="Mezczyzna")&&dat!="" )
        wysli.disabled=false;
}
