//  binary search algorithm using recursive function to complete.


let arr = [ 12, 23, 35, 53, 77, 101, 200, 4012, 123425];

let left = 0;
let right = arr.length-1 


function findTarget(array, target, left, right) {
    
    let pivot = Math.floor((right + left) / 2 );
    

    console.log(`target: ${target}`)
    console.log(`left: ${left}, pivot: ${pivot} right:${right}`)

    // breaking clauses...
    if (left > right) return console.log('target not in array');
    if (target < array[0]) return console.log('target lower than any values');
    if (target > array[array.length-1]) return console.log('target higher than any values');


    if (target === array[pivot]) return console.log(`target found at pivot. index is ${pivot}`);
    if (target === array[left]) return console.log(`target found at left. index is ${left}`);
    if (target === array[right]) return console.log(`target found at right. index is ${right}`);


    console.log(`spooky recursive function!`);
    if (target < array[pivot]) return findTarget(array, target, left, pivot -1);
    if (target > array[pivot]) return findTarget(array, target, pivot +1 , right);

}

findTarget(arr, 12, left, right )
findTarget(arr, 123425, left, right )
findTarget(arr, 77, left, right )
findTarget(arr, 35, left, right )
findTarget(arr, 200, left, right )
findTarget(arr, 11, left, right )
findTarget(arr, 1, left, right )
findTarget(arr, 1111111, left, right )