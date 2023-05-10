function isArmstrongNumber (num: number) {
    let strNum = num.toString();
    let n = strNum.length
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += Math.pow(parseInt(strNum[i]), n);
    } 
    return sum === num;
    
}

console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(9));
console.log(isArmstrongNumber(222));