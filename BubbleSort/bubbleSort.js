/*
Time Complexity 
Best ==> O(n)
Average ==> O(n^2)
Worst ==> O(n^2)

Space Complexity ==> O(1)
*/

function bubbleSort(arr){
    for(let i = arr.length; i > 0; i--){
        for(let j=0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
bubbleSort([54,23,5,96,7,23,9]);