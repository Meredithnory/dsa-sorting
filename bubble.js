function bubbleSort(arr) {
    for (j = 0; j <= arr.length; j++) {
        for (i = 0; i <= arr.length; i++) {
            const firstNum = arr[i];
            const secondNum = arr[i + 1];

            if (firstNum > secondNum) {
                arr[i] = secondNum;
                arr[i + 1] = firstNum;
            }
        }
    }

    return arr;
}

module.exports = bubbleSort;
