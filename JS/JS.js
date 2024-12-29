


function calc(){
 var n1=Number(document.getElementById("n1").value)
 var n2=Number(document.getElementById("n2").value)
 var select=document.getElementById("select").value
 var awnser=0
 if (select=="add"){
    awnser=n1+n2
 }
 if (select=="subtract"){
   awnser=n1-n2
 }
 if (select=="divide"){
   awnser=n1/n2
 }
 if (select=="multiply"){
   awnser=n1*n2
 }
 document.getElementById("result").innerHTML=awnser
}