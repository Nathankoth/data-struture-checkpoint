function sumDistinctElements(set1, set2) {
    let distinctElements = [];
    let sum = 0;
  
    for (let i = 0; i < set1.length; i++) {
      if (!distinctElements.includes(set1[i])) {
        distinctElements.push(set1[i]);
        sum += set1[i];
      }
    }
  
    for (let i = 0; i < set2.length; i++) {
      if (!distinctElements.includes(set2[i])) {
        distinctElements.push(set2[i]);
        sum += set2[i];
      }
    }
  
    return sum;
  }
  
  // Example usage:
  let set1 = [3, 1, 7, 9];
  let set2 = [2, 4, 1, 9, 3];
  console.log(sumDistinctElements(set1, set2)); // Output: 13
  


// Initialize an empty array called distinctElements to store the distinct elements.
// Initialize a variable called sum to 0, which will be used to store the sum of the distinct elements.
// Loop through each element of Set 1.
// Check if the element is already present in the distinctElements array.
// If it is not, add the element to the distinctElements array and add it to the sum.
// Loop through each element of Set 2.
// Check if the element is already present in the distinctElements array.
// If it is not, add the element to the distinctElements array and add it to the sum.
// Return the sum as the output.