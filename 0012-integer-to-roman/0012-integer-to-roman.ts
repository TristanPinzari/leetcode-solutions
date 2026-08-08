function intToRoman(num: number): string {
    let res = "";
    const keys = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    while (num > 0) {
        const str = num.toString(); 
        const subtractive = str.startsWith('4') || str.startsWith('9');
        if (subtractive) {
            for (let i = 1; i < keys.length; i += 2) {
                const key = keys[i], value = values[i];
                if (num < value) continue;
                num -= value;
                res += key;
                break;
            }
        } else {
            for (let i = 0; i < keys.length; i += 2) {
                const key = keys[i], value = values[i];
                if (num < value) continue;
                const times = Math.floor(num / value);
                num -= value * times;
                res += key.repeat(times);
                console.log(num, res);
                break; 
            }
        }
    }
    return res;
};