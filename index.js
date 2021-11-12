import {boyerMoore} from './study-code/search/boyer-moore.js';

const str = 'ABCXDEZCABACABAC';

boyerMoore(str, 'ABAC');
boyerMoore(str, 'CCC');