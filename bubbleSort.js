function sorting(arr){
    for (stage=0; stage<arr.length-1; stage++){
        for (index=0; index<arr.length-1; index++){
            if (arr[index]>arr[index+1]){
                let item = arr[index];
                arr.splice(index, 1);
                arr.splice(index+1, 0, item)
            }
        }
    }
    return arr
}

let foo = sorting([15,2,8,197,0,98,10,25,4,44,32])
console.log(foo)
