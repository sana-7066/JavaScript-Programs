const bird = {
    size: 'small',
  };
  
  const mouse = {
    name: 'Mickey',
    small: true,
  };
//   console.log(mouse.bird.size);
//   o/p
// get Error 
// mousedoesnot have bird property so mouse.bird => undefined and we are trying to access property of undefined 
  console.log(mouse[bird.size])
  //o/p
  //true
  //mouse[bird.size]: First it evaluates bird.size, which is "small". mouse["small"] return true
  console.log(mouse[bird["size"]]);
  //o/p
  //true