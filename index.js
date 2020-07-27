var btnadd=document.querySelector("#btn-add");
var table=document.querySelector("table");
var cardtitle=document.querySelector(".card-title").value;
btnadd.addEventListener("click",function(){
var row=table.insertRow(0);
var cell0=row.insertCell(0);
var cell1=row.insertCell(1);
var cell2=row.insertCell(2);

cell0.innerHTML=(cardtitle);
cell1.innerHTML="hello";
});