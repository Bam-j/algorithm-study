import {linearSearch} from './study-code/search/linear-search.js';
import {sentinelMethodLinearSearch} from './study-code/search/sentinel-method-linear-search.js';

const arr = [32, 44, 5, 4, 7, 13, 17, 30, 25, 51];

linearSearch(arr, 30);
sentinelMethodLinearSearch(arr, 10, 6);