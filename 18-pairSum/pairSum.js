function pairSum(nums, target) {
  let equalsTarget = false;
  let sum = 0;

 
  if(nums.length <= 1)
  {
    throw "Please enter an array of atleast 2 numbers";
  }
  for(var i = 0; i < nums.length; i++)
  {
      for(var j = 0; j < nums.length; j++)
      {
          sum = nums[i] + nums[j];
          if(sum == target)
          {
            equalsTarget = true;
          }
      }
  }
  return equalsTarget;
}

// Do not edit this line;
module.exports = pairSum;