function twoSum(numbers: number[], target: number): number[] {
    let i = 0, j = numbers.length - 1;
    while (numbers[i] + numbers[j] !== target) {
        if (target > numbers[i] + numbers[j]) {
            i++;
        } else {
            j--;
        }
    }
    return [i + 1, j + 1];
};