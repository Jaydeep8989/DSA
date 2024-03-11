function pivot(arr, start = 0, end = arr.length-1){

    function swap(arr, i, j){
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    var pivot = arr[start];
    var swapIndex = start;

    for(let i = start+1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIndex++;
            swap(arr,swapIndex,i);
        }
    }
    swap(arr,start,swapIndex);
    return swapIndex;
}


function quickSort(arr, left = 0, right = arr.length-1){
    // work till my left is lessthan right means go inside condition till my one single element.
    if(left < right){
        //Took a pivot index;
        let pivotIndex = pivot (arr,left,right);

        // left side subArray
        quickSort(arr,left, pivotIndex-1);
        
        // Right side sub Array
        quickSort(arr,pivotIndex+1, right);
    }
    return arr;
}

quickSort([54,23,5,96,7,23,9]);