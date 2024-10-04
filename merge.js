function merge(arr1, arr2) {
    newArray = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArray.push(arr1[i]);
            i++;
        } else if (arr1[i] > arr2[j]) {
            newArray.push(arr2[j]);
            j++;
        } else {
            newArray.push(arr1[i], arr2[j]);
            i++;
            j++;
        }
    }
    while (i === arr1.length && j < arr2.length) {
        newArray.push(arr2[j]);
        j++;
    }
    while (j === arr2.length && i < arr1.length) {
        newArray.push(arr1[i]);
        i++;
    }
    return newArray;
}

function mergeSort(arr) {
    if (arr.length === 0 || arr.length === 1) {
        return arr;
    }
    const sliceIndex = Math.floor(arr.length / 2);

    const arr1 = arr.slice(0, sliceIndex);
    const arr2 = arr.slice(sliceIndex);

    const sortedArr1 = mergeSort(arr1);
    const sortedArr2 = mergeSort(arr2);

    return merge(sortedArr1, sortedArr2);
}

module.exports = { merge, mergeSort };
