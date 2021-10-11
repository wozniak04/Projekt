document.querySelector("#przycisk_dalej_logowanie").disabled=true;

let blad_haslo=false;
let blad_powtorz=false;


function sprawdz_haslo()
{  
   const haslo=document.getElementById("logowanie_h").value;

   let duza=0;   

   for(var l=0;l<haslo.length;l++)
   {
       if(haslo[l].charCodeAt() > 64 && haslo[l].charCodeAt() < 91)
           duza++;
   }
   if(duza<1)
   {
        document.querySelector("#blad_password").innerHTML="Hasło powinno zawierać chociaż 1 dużą litere"
        blad_haslo=true;
   }
    else if(duza>=1)
    {
        document.querySelector("#blad_password").innerHTML="";
        blad_haslo=false;
    }  
    
}

function porownanie()
{   
    if(blad_haslo == false)
    {
        const haslo1=document.querySelector("#logowanie_h").value;
        const haslo2=document.querySelector("#logowanie_h1").value;
        
        if(haslo1 != haslo2)
        {
            document.querySelector("#blad_password_powtorz").innerHTML="podane hasło są różne";
            blad_powtorz=true;
        }
        if(haslo1 == haslo2)
        {
            document.querySelector("#blad_password_powtorz").innerHTML="";
            blad_powtorz=false;
        }
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

if(blad_haslo==false || blad_powtorz==false)
    document.querySelector("#przycisk_dalej_logowanie").disabled=false;
