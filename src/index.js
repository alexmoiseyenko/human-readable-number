module.exports = function toReadable (number) {
    const numbersArray = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };

    let num = number.toString().split('');
    let res = '';
    if (number < 10) {
        return numbersArray[number];
    } else if (number < 100) {
        if (number % 10 === 0) {
            return (`${numbersArray[(number - num[1])]}`);
        } else {
            if (number < 21) {
                return (`${numbersArray[number]}`);
            } else {
                return (`${numbersArray[(number - num[1])]} ${numbersArray[num[1]]}`);
            }
        }
    } else {
        res += `${numbersArray[num[0]]} hundred`;
        if (number % 100 === 0) {
            return res;
        }
        if ((number % 100) < 21) {
            res += ` ${numbersArray[(number % 100)]}`;
            return res;
        } else {
            res += ` ${numbersArray[(number % 100) - num[2]]}`;
        }
        if (Number(num[2]) !== 0) {
            res += ` ${numbersArray[num[2]]}`;
        }

        return res;
    }
}
