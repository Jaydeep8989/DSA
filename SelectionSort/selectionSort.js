/*
Time Complexity 
Best ==> O(n^2)
Average ==> O(n^2)
Worst ==> O(n^2)

Space Complexity ==> O(1)
*/

function selectionSort(arr){

    for(let i = 0; i < arr.length; i++){
        let lowest = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr
}

selectionSort([54,23,5,96,7,23,9]);