export const towersOfHanoi = (disk, x, y) => {
    if (disk > 1) {
        towersOfHanoi(disk - 1, x, 6 - x - y);
    }

    console.log("원반[" + disk + "] 이동: " + x + "에서 " + y + "로");

    if (disk > 1) {
        towersOfHanoi(disk - 1, 6 - x - y, y);
    }
};