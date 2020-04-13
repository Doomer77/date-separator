// function splitDate (date) {
//   let parts = (date + '').split('.'),
//   main = parts[0],
//   len = main.length,
//   output = '',
//   i = len - 1;
 

//   while(i >= 0) {
//     output = main.charAt(i) + output;
//     if ((len - i) % 2 === 0 && i > 0) {
//         output = '/' + output;
//     }
//     --i;
//   }
//   return output;

// }
// console.log(splitDate(1233));

let splitDate = (date) => {
  let dateToString = date.toString();
  let partsString = (dateToString + '').split('.');
  let main = partsString[0];
  let lengthString = main.length;
  let result = ''; 
  let i = lengthString - 1; 
  
  while (i >= 0) {
    result = main.charAt(i) + result;
  

  if ((lengthString - i) % 2 === 0 && i > 0) {
    result = '/' + result;
  }
  --i;
  }
  return result;
}

console.log(splitDate(1234));

const conversionExpdate = (expdate) => {
    const year = expdate.toString().slice(0, 2);
    const month  = expdate.toString().slice(2, 4);
    return `${year}/${month}`;
}

console.log(conversionExpdate(0704));


