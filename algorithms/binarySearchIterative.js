// iterative approach to solving binary search and ordered list...



let arr = [ 12, 23, 35, 53, 77, 101, 200, 4012, 123425];


function binaryIterative(array, target) {

    let j = array.length -1 

    // edge case catches...
    if(target < array[0]) return console.log('target too small for this array');
    if(target > array[j]) return console.log('target too large for this array');


    // loop starts in beginning and end. works to middle to find target.
    for(let i = 0; i <= j; i++){
       if(array[i] === target) return console.log(`target is at index ${i}`);
       if(array[j] === target) return console.log(`target is at index ${j}`);
       --j
    }

    
    return;
}


binaryIterative(arr, 53)

module.exports = binaryIterative;