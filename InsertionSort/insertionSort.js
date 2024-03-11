function insertionSort(arr){
    for (let i = 1; i < arr.length; i++){
        let cuurentValue = arr[i];
        let j;
        for(j = i-1; j >= 0 && arr[j] > cuurentValue; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = cuurentValue;
    }
    return arr;
}

insertionSort([54,23,5,96,7,23,9]);