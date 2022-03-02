export function stringSort(array: string[]): string[] {

  for(let i = 0; i < array.length - 1; i++){
    const splitedI = array[i].split('');

    for(let j= i + 1; j < array.length; j++){
      const splitedJ = array[j].split('');

      if(splitedI > splitedJ){
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }

  return array;
}


/*
  strings.forEach(item => {
    let inserted = false
    for (let i = 0; i < arr.length; i++) {



      const currArrItem = arr[i]
      if (item < currArrItem && currArrItem !== item) {
        inserted = true
        arr.unshift(currArrItem)
        break
      }


    }
    console.log(item)

    if (inserted === false) {
      arr.push(item)
    }

  })


  console.log(arr)
 */
