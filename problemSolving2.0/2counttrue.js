function countTrue(arr) {
	// if(arr.length > 0)
	// 	{
	// 		let count = 0;
	// 		//const newArr = [];
	// 		const newArr = arr.filter((currElem)=>{
	// 			return currElem === true;
	// 		})
	// 		return newArr.length
	// 	}
	// else 
	// 	return 0;
    //------------------------------Method 2---------------------
    return arr.filter(Boolean).length
}

console.log(countTrue([true,false,true,true,false,true]))
console.log(countTrue([true,false,true,true]))
console.log(countTrue([]))