function combinaisons(arr, theNumber) {
  const result = [];
  const possibleCombinaison = [];
  let i = 0;
  let sum = 0;

  do {
    if (sum === theNumber) {
      result.push([...possibleCombinaison]);
    }
    if (sum >= theNumber || i === arr.length) {
      const last = possibleCombinaison.pop();
      sum = sum - last;
      i = arr.indexOf(last) + 1
    }else{
      const number = arr[i];
      possibleCombinaison.push(number);
      sum = sum + number;
      i++;
    }
  
  } while (i < arr.length || possibleCombinaison.length > 0);

  return result;
}


const result = combinaisons([42,1, 3, 7, 8, 10, 11, 20], 42);
console.log(result);