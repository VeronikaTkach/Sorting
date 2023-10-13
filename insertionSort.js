function sorting(arr) {
    for (let index = 0; index < arr.length - 1; index++) {

        if (index == 0) {
            arr[0] = arr[0];
            console.log('0');
        } else if (index == 1) {
            if (arr[0] > arr[1]) {
                let item = arr[0];
                arr[0] = arr[1];
                arr[1] = item;
            }
        } else {
            for (let n = index; n > 1; n--) {
                if ((arr[index]>arr[n-2])&&(arr[index]<arr[n-1])) {
                    let m=n;
                    while (m < index + 1) {
                        let item = arr[n - 1];
                        arr[n - 1] = arr[index];
                        arr[index] = item;
                        m++;
                    }
                }
            }
        }
    }
}
    let foo = sorting([15,2,8,197,0,98,10,25,4,44,32])
    console.log(foo)
