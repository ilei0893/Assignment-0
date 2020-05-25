function sumOfMinimumAndMaximum(nums) {
  var sum = 0, min = nums[0], max = nums[0];
  for(var i = 0; i < nums.length; i++)
  {
    if(nums[i + 1] < min)
    {
      min = nums[i + 1];
    }
    if(nums[i + 1] > max)
    {
      max = nums[i + 1];
    }
  }
  sum = min + max;
  return sum;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;