export const euclideanAlgorithm = (num1, num2) => {
    if (num2 === 0) {
        return num1;
    }
    else {
        return euclideanAlgorithm(num2, num1 % num2);
    }
};