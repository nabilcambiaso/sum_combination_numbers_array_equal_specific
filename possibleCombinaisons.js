function parseIntArray(arr) {
  const result = [];
  for (const elem of arr) {
    if (Array.isArray(elem)) {
      result.push(parseIntArray(elem));
    } else {
      result.push(parseInt(elem));
    }
  }
  return result;
}

function addIncrementalDuplicates(arr) {
  const map = new Map();
  const result = [];

  for (const elem of arr) {
    const count = map.get(elem) || 0;
    map.set(elem, count + 1);

    if (count > 0) {
      result.push(`${elem}.${count}`);
    } else {
      result.push(elem);
    }
  }

  return result;
}

function combinaisons(arr, theNumber) {
  arr = addIncrementalDuplicates(arr);
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
      sum = sum - parseInt(last);
      i = arr.indexOf(last) + 1
    }else{
      const number = arr[i];
      possibleCombinaison.push(number);
      sum = sum + parseInt(number);
      i++;
    }
  
  } while (i < arr.length || possibleCombinaison.length > 0);

  return parseIntArray(result);
}

const result = combinaisons([42,1,1,1,1,1,1,1,1, 40, 1, 3, 8, 10, 11, 20], 42);
console.log(result);