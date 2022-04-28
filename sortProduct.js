function productSort(arr) {
  const productPairs = arr.map((num, ind) => [num, num * (ind + 1)]);
  //   console.log(productsPairs);
  const result = [];
  let smallest = Number.MIN_SAFE_INTEGER;
  let smallInd = null;
  for (let i = 0; i < productPairs.length; i++) {
    let nextSmallest = Number.MAX_SAFE_INTEGER;
    productPairs.forEach((pair, ind) => {
      //   console.log(ind);
      if (pair[1] < nextSmallest && pair[1] > smallest) {
        nextSmallest = pair[1];
        smallInd = ind;
      }
    });
    // console.log(smallInd);
    result.push(productPairs[smallInd][0]);
    smallest = nextSmallest;
  }
  return result;
}

function productSort2(arr) {
  const productPairs = arr.map((num, ind) => {
    return {
      number: num,
      product: num * (ind + 1),
    };
  });
  console.log(productPairs);
  result = productPairs
    .sort((a, b) => a.product - b.product)
    .map((pair) => pair.number);

  return result;
}

console.log(productSort2([23, 2, 3, 4, 5]));
