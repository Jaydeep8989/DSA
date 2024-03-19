// Maximum profit from the given array: return the maximum difference from the array. 

function ProfitShare(array){
    
    // Assume maximum Difference is 0.
    let maxDiff = 0;
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            // calculate the diff between two number
            const diff = array[j] - array[i]
            // if difference is greaterthan the max diff then assign diff to maxDiff.
            if(diff > maxDiff) {
                maxDiff = diff;
            }
        }
    }
    // maxDiff is 0 or lessthan 0 then return -1 else return the maxDiff.
    if(maxDiff <= 0) return -1;
    else return maxDiff;
}

ProfitShare([10,20,1,4,6,33,21,99,65]);