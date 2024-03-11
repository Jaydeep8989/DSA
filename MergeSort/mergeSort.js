/*
Time Complexity 
Best ==> O(n log n)
Average ==> O(n log n)
Worst ==> O(n log n)

Space Complexity ==> O(n)
*/

function merger(arr, arr2){
    let result = [];
    let i = 0;
    let j = 0;
    
    while (i < arr.length && j < arr2.length){
        if(arr2[j] > arr[i]){
            result.push(arr[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++;
        } 
    }
    
    while (i < arr.length){
        result.push(arr[i]);
        i++;
    }
    while (j < arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result;
}


function mergerSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergerSort(arr.slice(0,mid));
    let right = mergerSort(arr.slice(mid));
    return merger(left, right);
}


console.log(mergerSort([25,56,48,85,96,36,20]));