const arrayFunction: any = (arr: any[]) => {
  let flatArr: any = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArr = flatArr.concat(arrayFunction(arr[i]));
    } else {
      flatArr.push(arr[i]);
    }
  }

  return flatArr;
};
