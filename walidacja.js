let pick;
let dataa;
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

function sprawdzanie_czy_uzytkownik_istnieje()
{
    
    let odp;
    const xmlhttp = new XMLHttpRequest();
    const user = document.querySelector("#logowanie_u").value;
    const blad=document.querySelector("#blad_username");
    
    xmlhttp.onload = function () 
    {
            odp=JSON.parse(this.response);
            if(odp==user)
                blad.innerHTML="podana nazwa uzytkownika istnieje";
             else
             {
                blad.innerHTML = "";
                odb()
             }
    }
    
    xmlhttp.open("GET","sprawdzanie_user.php?q=" + user,true);
    xmlhttp.send();
    
}

function sprawdzanie_email()
{   
    var mal=0;
    let poprawnye=true;
    const email=document.querySelector("#logowanie_e").value;
    const blad_e=document.querySelector("#blad_email");
    
    for(var i=0;i<email.length;i++)
    {
        if(email[i]=='@')
            mal=i;
        if(mal<=6)
        {
            blad_e.innerHTML="przed @ powinno być 6 znaków";
            poprawnye=false;
        }
        else
        {
            blad_e.innerHTML="";
            poprawnye=true;
        }
    }

    if(poprawnye==true)
    {   
        let odp;
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function () 
        {
            odp=JSON.parse(this.response);
            if(odp==email)
                blad_e.innerHTML="podany email istnieje";
            else
            {
                blad_e.innerHTML = "";
                odb()
            }
       }
        xmlhttp.open("GET","sprawdzanie_email.php?q=" + email,true);
        xmlhttp.send();
    }
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
    pick=wyb;
}

function data(date)
{
    if(date!="")
    {
        dataa=date;
        odb();
    }
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
    
    

    if(g>=8 && haslo==undefined && powtorz==undefined && uzytkownik==undefined && email==undefined && imie==undefined && nazwisko==undefined &&pick!=""&&dataa!="" )
        wysli.disabled=false;
}
