var submit=document.querySelector("#submit");
var reset=document.querySelector("#reset");
var input=document.querySelectorAll("input");
submit.addEventListener("click",function{
	alert("Sucessfully Registered!");
});
reset.addEventListener("click",function(){
input.value.textContent="";
});