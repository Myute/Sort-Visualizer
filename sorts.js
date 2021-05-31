function test() {
    var a = defArray();
    a = shuffleArray(a);
    return a;
}

function createArray(n) {
    var myArr = [];

    // create traiangle array of n length
    for (var i = 1; i <= n; i++) {
        myArr.push(i);
    }

    return myArr;
}

function defArray() {
    return createArray(50);
}

function shuffleArray(a) {
    var idx = a.length
    var rIdx;

    while (0 !== idx) {
        rIdx = Math.floor(Math.random() * idx);
        idx--;
        [a[idx], a[rIdx]] = [a[rIdx], a[idx]];
    }

    return a;
}

function swap(arr, a, b) {
    var tmp = arr[a]
    arr[a] = arr[b]
    arr[b] = tmp
}

function bubblesort(a) {
    var i, j;

}

function selectionsort(a) {

}

function insertionsort(a) {

}

function quicksort(a) {

}

function mergesort(a) {

}

function heapsort(a) {

}

function radixsort(a) {

}