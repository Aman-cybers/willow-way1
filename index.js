var profilep=document.querySelector("#profilep");

profilep.addEventListener("click",function(){
	window.open("profile.html","_blank")
});


let carts=document.querySelectorAll("#btn-add");
let products=[
{
	name:'wheat',
	price:'50',
	inCart:0
},
{
	name:'apple',
	price:'150',
	inCart:0
},
{
	name:'Rice',
	price:'70',
	inCart:0
},{
	name:'coffee',
	price:'120',
	inCart:0
}

	

];

for(let i=0;i<carts.length;i++){
	carts[i].addEventListener("click",() =>{
		cartNumbers(products);
		totalCost(products[i]);
	});
}

function onLoadCartNumbers(){
	let productNumbers=localStorage.getItem('cartNumbers');
	if(productNumbers){
		document.querySelector("#cnum").textContent= productNumbers;

	}

}

function cartNumbers(products){
	let productNumbers=localStorage.getItem('cartNumbers');
	productNumbers= parseInt(productNumbers);

	if(productNumbers){
			localStorage.setItem('cartNumbers', productNumbers + 1);
			document.querySelector("#cnum").textContent= productNumbers+1;


	}else{
			localStorage.setItem('cartNumbers', 1);
			document.querySelector("#cnum").textContent= 1;
	}
  		setItems(products);
}

function setItems(products){
	
	let cartItems=localStorage.getItem("productsInCart");
	cartItems=JSON.parse(cartItems);
	if(cartItems!=null){

		if(cartItems[products.name]==undefined){
			cartItems={
				...cartItems,
				[product.name]:product
			}
		}
		cartItems[products.name].inCart+=1;
	}else{
		products.inCart=1;
		cartItems={
			[products.name]:products
		}
	}
	localStorage.setItem("productsInCart" ,JSON.stringify
		(cartItems));

}

function totalCost(products){
	let cartCost=localStorage.getItem("totalCost");
	cartCost=parseInt(cartCost);

	if(cartCost!=null){
		localStorage.setItem("totalCost",cartCost+products.price);

	}else{
		localStorage.setItem("totalCost",products.price);

	}

}

var cart=document.querySelector("#cart");
cart.addEventListener("click",function(){
	window.open("cart.html","_blank")
});

function displayCart(){
	let cartItems=localStorage.getItem("productsInCart");
	cartItems=JSON.parse(cartItems);
	let productContainer=document.querySelector("#table-container");
	if(cartItems && productContainer){
		productContainer.innerHTML='';
		Object.values(cartItems).map(item =>{
			productContainer.innerHTML+=`
			<div class="product">
			<i class="fas fa-times-circle"></i>
			<span>${item.name}</span>
			</div>
			<div class="price">
			</div>

			`
		});
	}

}
onLoadCartNumbers();
displayCart();