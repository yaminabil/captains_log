exports.DateStringFix= (string) =>{ // 02/04/2022 
if(string.length === 10 ) {
    return (string);
} else {
    let arr = string.split("/");
    let result ="";
  for (let i=0 ; i < arr.length ; i++) {
      if (arr[i].length === 1) {
         arr[i]="0"+arr[i];
      }
      
  }
  let variable = arr[0];
  arr[0]=arr[1];
  arr[1]=variable;
 

   return arr.reverse().join("-") 
}
}




// console.log (DateStringFix("2/14/2022"));