 function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  // for (let i = 0; i < arr.length; i += 1) {
  //   if (arr[i] > max) {
  //     max = arr[i];
  //   }
    
  //   if (arr[i] < min) {
  //     min = arr[i];
  //   }

  //   sum += arr[i];
  // }

  if (Math.max(...arr) > max) {
    max = Math.max(...arr);
  }
    
  if (Math.min(...arr) < min) {
    min = Math.min(...arr);
  }

  sum = arr.reduce((accumulator, currentValue) => (accumulator + currentValue),sum);

  avg = (sum / arr.length).toFixed(2);
  
  return { min: min, max: max, avg: Number(avg) };
}

function summElementsWorker(...arr) {
  if (arr == 0) {
    return 0;
  }

  let sum = arr.reduce((accumulator, currentValue) => (accumulator + currentValue),0);

  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;

  if (arr == 0) {
    return 0;
  }

  if (Math.max(...arr) > max) {
    max = Math.max(...arr);
  }
    
  if (Math.min(...arr) < min) {
    min = Math.min(...arr);
  }

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (arr == 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } 
    else {
      sumOddElement += arr[i]; 
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr == 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    } 
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i += 1) {
    func(...arrOfArr[i]);
    const resultFunc = [];
    resultFunc.push(func(...arrOfArr[i]));
    

    if (Number(resultFunc) > maxWorkerResult) {
      maxWorkerResult = resultFunc;
      
    }
  }
  
  console.log(Number(maxWorkerResult));
  return Number(maxWorkerResult);
}