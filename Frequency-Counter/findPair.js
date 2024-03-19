// Frequency Counter / Multiple Pointer - findPair
// Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.

// findPair([6,1,4,10,2,4], 2) // true
// findPair([8,6,2,4,1,0,2,5,13],1) // true
// findPair([4,-2,3,10],-6) // true
// findPair([6,1,4,10,2,4], 22) // false
// findPair([], 0) // false
// findPair([5,5], 0) // true
// findPair([-4,4], -8) // true
// findPair([-4,4], 8) // true
// findPair([1,3,4,6],-2) // true
// findPair([0,1,3,4,6],-2) // true

function findPair(array,num){
    // basecase senario
    // o(n)
    if(array.length == 0){
        return false;
    }else{
        let i = 0;
        let j = array.length-1;
        let diff = 0;
        while (i <= j){
            if(i == j){
                j= j-1;
                i = 0;
            }
            diff = array[j] - array[i];
            if(Math.abs(diff) == Math.abs(num)){
                console.log("diff",Math.abs(diff));
                return true;
            }else{
                i++;
            }
        }
        if(diff != num){
            return false;
        }
        
        // o(n^2)
        // for (let i = 0; i < array.length; i++){
        //     for(let j = i+1; j < array.length; j++){
        //         const diff = array[j] - array[i]
        //         console.log(diff);
        //         if(Math.abs(diff) == Math.abs(num)){
        //             return true;
        //         }
        //     }
        // }
        // return false;
    }
}