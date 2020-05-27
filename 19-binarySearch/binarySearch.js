class MySolution {
  constructor() {
    this.flag = false;
  }
  binarySearch(nums, target) {

    let start = 0;              //Start Point
    let end = nums.length - 1;    //End Point

    while (start <= end) {

      let mid = Math.floor((start + end) / 2);

      if (nums[mid] === target) {             //If mid equals target, then return true.
        return true;
      } else if (nums[mid] < target) {        //Else if mid number is less than target, use right sub array
        start = mid + 1;
      }
      else {                                  //Else use left sub array
        end = mid - 1;
      }
    }
    return false;
  }

}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;