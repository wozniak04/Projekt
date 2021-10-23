let x=0;
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
function specjalisci()
{ 
    
    if(x<1){
      x+=0.01;
      setTimeout(specjalisci,1);
      
    }
    else if(x>=1){
      alert();
       x=0;
    }
}