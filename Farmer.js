var select=document.querySelector("#select");
var farmer=document.querySelector("#farmer");
var buyer=document.querySelector("#buyer");
var loginfb=document.querySelector("#loginfb");

farmer.addEventListener("click",function(){
select.textContent="Farmer";
loginfb.addEventListener("click",function(){
window.open("farmerpage.html","_blank")
});


});

buyer.addEventListener("click",function(){
select.textContent="Buyer";
loginfb.addEventListener("click",function(){
window.open("index.html","_blank")
});
});


