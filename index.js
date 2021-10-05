const headerTwo = document.querySelector('h2')

console.log("h2 log",headerTwo);

headerTwo.style.textAlign = "center";
headerTwo.style.textTransform = "Uppercase";
headerTwo.addEventListener("click", function(){
    document.body.style.backgroundColor = "red";
  });
  
  headerTwo.addEventListener('mouseover', function(){
      headerTwo.style.color = "orange";
      headerTwo.style.width= " 200px";
    
  });

  headerTwo.addEventListener('mouseleave', function(){
    headerTwo.style.color = "yellow";   
   });

  