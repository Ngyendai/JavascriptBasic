// Cú pháp hàm sắp xếp mảng trong JavaScript
arr.sort();
arr.sort(compareFunction);

let a = ["c", "g", "w", "a"];
let b = a.sort();

console.log(a); // ["a", "c", "g", "w"]
console.log(b); // ["a", "c", "g", "w"]

//Sắp xếp mảng number
let a = [9, 100, 45, 33];

console.log(a.sort());
// [100, 33, 45, 9]

//Sử dụng hàm compareNumbers sắp xếp theo thứ tự tăng dần
function compareNumbers(a, b) {
  return a - b;
}

let a = [9, 100, 45, 33];
console.log(a.sort(compareNumbers));
// [9, 33, 45, 100]

//Sắp xếp mảng numbers theo thứ tự giảm dần
let a = [9, 100, 45, 33];

a.sort((a, b) => b - a);
console.log(a);
// [100, 45, 33, 9]

//Array sorting với sắp xếp chọn trực tiếp - Selection Sort
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let idmin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[idmin]) idmin = j;
    }

    // swap
    let t = array[i];
    array[i] = array[idmin];
    array[idmin] = t;
  }
}

//Sắp xếp chèn trực tiếp - Insertion Sort
function insertionSort(array) {
  let pos, x;
  for (let i = 1; i < array.length; i++) {
    pos = i - 1;
    x = array[i];
    while (pos >= 0 && array[pos] > x) {
      array[pos + 1] = array[pos];
      pos--;
    }
    array[pos + 1] = x;
  }
}


//Sắp xếp chèn trực tiếp dựa trên tìm kiếm nhị phân - Binary Insertion Sort
function binaryInsertionSort(array) {
  let l, r, m, x;
  for (let i = 1; i < array.length; i++) {
    l = 0;
    r = i - 1;
    x = array[i];

    while (l <= r) {
      m = Math.floor((l + r) / 2);
      if (array[m] > x) r = m - 1;
      else l = m + 1;
    }

    for (let j = i; j > l; j--) array[j] = array[j - 1];
    array[l] = x;
  }
}


//Sắp xếp đổi chỗ trực tiếp - Interchange Sort
function interChangeSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        let t = array[i];
        array[i] = array[j];
        array[j] = t;
      }
    }
  }
}

//Sắp xếp nổi bọt - Bubble Sort
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = array.length - 1; j > i; j--) {
      if (array[j] < array[j - 1]) {
        let t = array[j];
        array[j] = array[j - 1];
        array[j - 1] = t;
      }
    }
  }
}

//Thuật toán Shaker Sort

function shakerSort(array) {
  let left, right, k;

  left = 0;
  right = array.length - 1;
  k = array.length - 1;

  while (left < right) {
    for (let j = right; j > left; j--) {
      if (array[j] < array[j - 1]) {
        let t = array[j];
        array[j] = array[j - 1];
        array[j - 1] = t;
        k = j;
      }
    }
    left = k;

    for (let j = left; j < right; j++) {
      if (array[j] > array[j + 1]) {
        let t = array[j];
        array[j] = array[j + 1];
        array[j + 1] = t;
        k = j;
      }
    }
    right = k;
  }
}

//Sắp xếp nhanh - Quick Sort
function quickSort(array, left, right) {
  let l = left,
    r = right;
  let m = Math.floor((l + r) / 2);
  let pivot = array[m];

  while (l <= r) {
    while (array[l] < pivot) l++;
    while (array[r] > pivot) r--;
    if (l <= r) {
      let t = array[l];
      array[l] = array[r];
      array[r] = t;
      l++;
      r--;
    }
  }

  if (l < right) quickSort(array, l, right);
  if (r > left) quickSort(array, left, r);
}

//Sắp xếp trộn - Merge Sort
function merge(array, left, m, right) {
  let l = left,
    r = m + 1;
  let tmp = [];

  while (l <= m && r <= right) {
    if (array[l] < array[r]) tmp.push(array[l++]);
    else tmp.push(array[r++]);
  }

  while (l <= m) tmp.push(array[l++]);
  while (r <= right) tmp.push(array[r++]);

  for (let i = 0; i < tmp.length; i++) array[i + left] = tmp[i];
}

function mergeSort(array, left, right) {
  if (left < right) {
    let m = Math.floor((left + right) / 2);
    mergeSort(array, left, m);
    mergeSort(array, m + 1, right);
    merge(array, left, m, right);
  }
}

//Sắp xếp vun đống - Heap Sort
function heapify(array, N, i) {
  let left = 2 * i + 1,
    right = 2 * i + 2,
    largest;

  if (left < N && array[left] > array[i]) largest = left;
  else largest = i;

  if (right < N && array[right] > array[largest]) largest = right;

  if (largest != i) {
    let t = array[i];
    array[i] = array[largest];
    array[largest] = t;
    heapify(array, N, largest);
  }
}

function buildHeap(array) {
  let m = Math.floor(array.length / 2 - 1);
  for (let i = m; i >= 0; i--) heapify(array, array.length, i);
}

function heapSort(array) {
  buildHeap(array);

  for (let i = array.length - 1; i >= 0; i--) {
    let t = array[0];
    array[0] = array[i];
    array[i] = t;

    heapify(array, i, 0);
  }
}