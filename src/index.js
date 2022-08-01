module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }

    let mass = [];

    matrix.forEach((arr, index) => {

        if (index % 2 != 0) {
            mass.push(...arr.reverse());
        } else {
            mass.push(...arr);
        }
    });

    return mass;
}

