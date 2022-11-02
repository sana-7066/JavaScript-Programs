// sort the array of object by price of drinks.
//sort is array method applied on array 
sortDrinkByPrice = (drinks) => drinks.sort((a,b)=>(a.price-b.price)); 

drinks = [
	{name:"coffee",price:50},
	{name:"lassi",price:30}
];

console.log(sortDrinkByPrice(drinks));