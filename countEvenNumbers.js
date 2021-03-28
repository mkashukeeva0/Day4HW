/* -------------------------------------------------------------------------- */
/*                           task: countEvenNumbers                           */
/* -------------------------------------------------------------------------- */
// Да се дефинира функция countEvenNumbers, която връща броя четни числа в
// подаденият й масив от числа.

// примерно извикване:
// let evenCount = countEvenNumbers( [1,4,2,3,5] );
// console.log( evenCount );
// 2
// let evenCount = countEvenNumbers( [1,4,2,3,5] );
// console.log( evenCount );
let evenCount = countEvenNumbers( [1,4,2,3,5] );
function countEvenNumbers(arr) {
    let evenCount = 0;
    for (let i = 0; i < arr.length; i++) {

      if(arr[i]%2===0){
      
       console.log( `The number is even`);
      }else {
          console.log(`The number is odd`);
      }
    }
  
    return evenCount;
  }
  

 
//   console.log( evenCount );
  
