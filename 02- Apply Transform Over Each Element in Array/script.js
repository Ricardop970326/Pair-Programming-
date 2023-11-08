function applyMapping(arr, fn) {
    let transformedArray = [];
    for (let i = 0; i < arr.length; i++) {
      transformedArray[i] = fn(arr[i]);
    }
    return transformedArray;
  }
  
  function square(num) {
    return num * num;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  
  const transformedArray = applyMapping(numbers, square);
  
  console.log(transformedArray); 