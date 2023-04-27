// Define the dot_product procedure
function dot_product(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
      ps += v1[i] * v2[i];
    }
    return ps;
  }
  
  // Define the orthogonal function
  function is_orthogonal(v1, v2) {
    return dot_product(v1, v2) === 0;
  }
  
  // Initialize the vectors
  let vectors = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Loop through each pair of vectors and determine if they are orthogonal
  for (let i = 0; i < vectors.length; i++) {
    for (let j = i + 1; j < vectors.length; j++) {
      let v1 = vectors[i];
      let v2 = vectors[j];
      console.log("v1:", v1);
      console.log("v2:", v2);
      if (is_orthogonal(v1, v2)) {
        console.log("v1 and v2 are orthogonal");
      } else {
        console.log("v1 and v2 are not orthogonal");
      }
    }
  }
  