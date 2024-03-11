/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(T) {
    const romanMap = new Map();
    romanMap.set('I', 1);
    romanMap.set('V', 5);
    romanMap.set('X', 10);
    romanMap.set('L', 50);
    romanMap.set('C', 100);
    romanMap.set('D', 500);
    romanMap.set('M', 1000);
    const n = T.length;
    let num = romanMap.get(T[n- 1]);
    for (let i = n - 2; i >= 0; i--) {
        if (romanMap.get(T[i]) >= romanMap.get(T[i + 1])) {
            num += romanMap.get(T[i]);
        } else {
            num -= romanMap.get(T[i]);
        }
    }
    return num;
};

let T = "III"
console.log(romanToInt(T));
