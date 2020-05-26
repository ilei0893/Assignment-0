class MySolution {
  
  countDownSum(num) {
    if(num == 1){       //If number is 1, don't call 
      return 1;
    }
    return num + this.countDownSum(num-1);
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;