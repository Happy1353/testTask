const sortDictionary = (busArray: any[]) => {
  var sortedArray = busArray.slice().sort();
  var dictionary: any = {};

  for (let i = 0; i < sortedArray.length; i++) {
    let firstLetter = sortedArray[i].charAt(0);
    if (dictionary[firstLetter]) {
      dictionary[firstLetter].push(sortedArray[i]);
    } else {
      dictionary[firstLetter] = [sortedArray[i]];
    }
  }

  return dictionary;
};
