function findSmallest(arr){
    const arrLenght = arr.length;
    let smallest = arr[0];
    let smallestInd = 0;
    for (let i=0; i<arrLenght; i++) {
        if (arr[i] <= smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex
}

function selectionSort(arr){
    const arrLength = arr.length;
    let newArr = [];
    for (i=0; i<arrLength; i++){
        let smallestIndex = findSmallest(arr);
        newArr.push(+arr.splice(smallestIndex, 1).join());
    }
    return newArr
}

console.log(selectionSort([5, 3, 6, 2, 10]))