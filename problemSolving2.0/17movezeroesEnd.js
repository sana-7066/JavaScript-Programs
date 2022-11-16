const moveZeroes = nums => {
    const length = nums.length;
    let index = 0;
  
    for (let i = 0; i < length; i++) {//[2,0,7,0,5] i=0,inedx=0//i=1//i=2 index=1[2,7,0]index=2//i=3//i=4 index=2[2,7,5]
      if (nums[i] !== 0)
       {
        nums[index] = nums[i];
        if (index !== i)
        {
          nums[i] = 0;
        }
        index++;
      }
      console.log(nums +" "+ i)
    }
  
    return nums;
  };

  console.log(moveZeroes([2,0,7,0,5]))
  console.log(moveZeroes([0,6,0,3,7,0,2,0,1,0,0,0]))