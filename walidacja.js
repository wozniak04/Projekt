//document.querySelector("#przycisk_dalej_logowanie").disabled=true;

let blad_haslo=false;
let blad_powtorz=false;


function sprawdz_haslo()
{  
   const haslo=document.getElementById("logowanie_h").value;

   if(haslo.length<7)
   {
       document.querySelector("#blad_password").innerHTML="hasło powinno mieć conajmniej osiem znaków";
       blad_haslo=true;
   }
   else
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

function sprawdzanie_czy_uzytkownik_istnieje()
{
    
    let odp;
    const xmlhttp = new XMLHttpRequest();
    const user = document.querySelector("#logowanie_u").value;
    const blad=document.querySelector("#blad_username");
    
    xmlhttp.onload = function () {
            odp=JSON.parse(this.response);
            if(odp==user)
                blad.innerHTML="podana nazwa uzytkownika istnieje";
            
            
                
    }
   
    xmlhttp.open("GET","sprawdzanie_user.php?q=" + user, true);
    xmlhttp.send();
    
}
//if(blad_haslo==false || blad_powtorz==false)
    //document.querySelector("#przycisk_dalej_logowanie").disabled=false;