
const wysli=document.querySelector("#przycisk_dalej_logowanie");
wysli.disabled=true;


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
             else
             {
                blad.innerHTML = "";
                odb();
             }
            }
    
    xmlhttp.open("GET","sprawdzanie_user.php?q=" + user,true);
    xmlhttp.send();
    
}

function sprawdzanie_email()
{   var mal=0;
    let poprawnye=true;
    const email=document.querySelector("#logowanie_e").value;
    const blad_e=document.querySelector("#blad_email");
    
    for(var i=0;i<email.length;i++)
    {
        if(email[i]=='@')
            mal=i;
            
    }

    if(mal<=5)
    {
        blad_e.innerHTML="nie poprawny email";
        poprawnye=false;
    }
    else
    {
        blad_e.innerHTML="";
        poprawnye=true;
    }

    if(poprawnye==true)
    {   
        let odp;
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function () {
            odp=JSON.parse(this.response);
            if(odp==email)
                blad_e.innerHTML="podany email istnieje";
            else
            {
                blad_e.innerHTML = "";
                odb();
            }
       }
        xmlhttp.open("GET","sprawdzanie_email.php?q=" + email,true);
        xmlhttp.send();
    }

}

function imie()
{
    const imie=document.querySelector("#logowanie_n").value;
    const blad=document.querySelector("#blad_imie");
    if(imie=="")
        blad.innerHTML="podaj imie";
    else
    {
        blad.innerHTML= "";
        odb();
    }
}

function nazwisko()
{
    const nazwisko=document.querySelector("#logowanie_s").value;
    const blad=document.querySelector("#blad_nazwisko");
    
    if(nazwisko=="")
        blad.innerHTML="podaj imie";
    
    else
    {
        blad.innerHTML= "";
        odb();
    }

}
function odb()
{   
    const imie=document.querySelector("#blad_imie").value;
    const nazwisko=document.querySelector("#blad_nazwisko").value;
    const haslo=document.querySelector("#blad_password").value;
    const powtorz=document.querySelector("#blad_password_powtorz").value;
    const uzytkownik=document.querySelector("#blad_username").value;
    const email=document.querySelector("#blad_email").value;
    
    if(haslo==undefined && powtorz==undefined && uzytkownik==undefined && email==undefined && imie==undefined && nazwisko==undefined )
        wysli.disabled=false
}
