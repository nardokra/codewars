
var findInArray = function (array, iterator) {
    var outcome;
    iterator = () => {
        if (array.length < 1) {
            console.log(-1);
            return -1;
        }
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                console.log(`iterator true is ${i}`);
                return i;
            } else {
                outcome = -1;
            }
        }
        console.log(outcome);
        return outcome;
    }

    return iterator();
};

findInArray([], "test"); // -1 if even
findInArray([1, 3, 5, 6, 7], "test"); // 3 if even
findInArray([2, 4, 6, 8], "test"); // 0 if even
findInArray([2, 4, 6, 8], "test"); // -1 never true
findInArray([13, 5, 3, 1, 4, 5], "test"); // 4 trueIfValueEqualsIndex), 4)
findInArray(["one", "two", "three", "four", "five", "six"], "test");
findInArray(["bc", "af", "d", "e"], "test"); // -1 trueIfLengthEqualsIndex), -1)

