//zaczne sprawdzania loginów i haseł jak formularz rejestracji 
//będzie gotowy, ponieważ nie chce zrobić niepotrzebnych błędów
function sprawdz_haslo()
{  
   const haslo=document.getElementById("logowanie_h").value;
   let duza=0;   

   for(var l=0;l<haslo.length;l++)
   {
       if(haslo[l].charCodeAt() > 64 && haslo[l].charCodeAt() < 91)
           duza++;
   }
   
   alert(duza);
       
    
}