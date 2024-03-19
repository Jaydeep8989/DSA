// Frequency Counter - findAllDuplicates
// Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.

// findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
// findAllDuplicates([4, 3, 2, 1, 0]) // []
// findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
// Time Complexity - O(n)


function findAllDuplicates(array){
    // add whatever parameters you deem necessary - good luck!
    let result = {};
    let duplicates = [];
    for (let i = 0; i < array.length; i++){
        let number = array[i]
        if(!result[number]){
            result[number] = 1;
        }else{
            result[number]++;
            duplicates.push(number);
        }
    }
    
    // USing inbuilt filter method
    // const duplicates = array.filter((item, index) => array.indexOf(item) !== index);
    
    return duplicates;
}
