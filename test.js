// let count = 0;
// let n =2;
// for (i=0;i<=n;i++){
//    for (j=0;j<n;j++){
//        count = count+1;
      
//    }

// }
// console.log(count)
// let count = 0;
// let n =9000;
// for (i=0;i<=n;i++){
//    for (j=0;j<n;j++){
//     for (k=0;k<n;k++){
//         count = count+1;
//     }
       
//    }
// }
// console.log(count)


// linear search

// var rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// function linearSearch(arr, elToFind) {
//     for (var i=0; i<arr.length; i++) {
//       if (arr[i] == elToFind) {
//         return console.log(i)
//       }
//     } return console.log('not found');
//   }
  
//   linearSearch(rainbow, "green"); // returns 3
//   linearSearch(rainbow, "white"); // return not found


// binary search
// const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// const sortedRainbow = rainbow.sort(); 
// // console.log(sortedArray)
// function binarySearch(sortedArray, elToFind) {
//     let leftIndex = 0;
//     let rightIndex = sortedArray.length - 1;
//     while (leftIndex <= rightIndex) {
//       let midIndex = Math.floor((leftIndex + rightIndex) / 2);
//       if (sortedArray[midIndex] == elToFind) {
//         return console.log(midIndex);
//       } else if (sortedArray[midIndex] < elToFind) {
//         leftIndex = midIndex + 1;
//       } else {
//         rightIndex = midIndex - 1;
//       }
//     } return console.log('not found');
//   }
 
// //   binarySearch(sortedRainbow, "green"); // returns 1
//   binarySearch(sortedRainbow, "white") // returns not found