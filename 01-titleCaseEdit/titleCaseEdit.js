function titleCaseEdit(title) {
  var splitStr = title.toLowerCase().split(' ');      //sets splitStr to lower case and split it by whitespace.
  console.log(splitStr);
  for(var i = 0; i < splitStr.length; i++)  
  {
      splitStr[i]= splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);    //Make char at index 0 and appends rest of the string
  }
  return splitStr.join(' ');
}
    
// Do not edit this line;
module.exports = titleCaseEdit;