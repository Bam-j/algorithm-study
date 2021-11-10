import {binarySearch} from './study-code/search/binary-search.js';

const arr = [3, 9, 11, 15, 16, 21, 22,  26, 29];

console.log("검색 키: 26");
binarySearch(arr, 26);

console.log("검색 키: 4");
binarySearch(arr, 4);