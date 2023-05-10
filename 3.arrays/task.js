function compareArrays(arr1, arr2) {
  if (arr1.length === arr2.length) {
      return arr1.every((Element, Index) => (arr1[Element] === arr2[Element], arr1[Index] === arr2[Index]));
    }  else {return false}
}


function getUsersNamesInAgeRange(users, gender) {
  let result = users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, item, index, user) => {
    acc += item;
    if (index === user.length -1) {
      return acc / user.length;
    }
    return acc
  }, 0);
   return result;
}