var select=document.querySelector("#select");
var farmer=document.querySelector("#farmer");
var buyer=document.querySelector("#buyer");

farmer.addEventListener("click",function(){
select.textContent="Farmer";
});

buyer.addEventListener("click",function(){
select.textContent="Buyer";
});


