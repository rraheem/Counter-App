 let counter = 0


 function add(){
    counter += 1
    document.getElementById("count").innerText = counter 

 }

 function last(){
    
 let str1 = counter + " - "
 
 let message = str1  

 document.getElementById('pe').innerHTML += message 
 }

 function rst(){
   document.getElementById("count").innerHTML = 0
 }



// let's try onclick, print count which will be count + 1
// note ++ is increment i.e + 1
