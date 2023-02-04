module.exports = function toReadable(number) {
    let tadam = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
    };

    let numLength = number.toString().length;
    let dozens = Math.floor(number / 10) * 10;
    let units = Math.floor(number / 100);
    let lastSymbol = number % 10;
    let x = number - Math.floor(number / 100) * 100;
    let secondNum = Number(String(number).at(1)) * 10;
    //от 0 до 20
    if (number >= 0 && number < 20) {
        return tadam[number];
    } //целые десятки
    else if (numLength === 2 && String(number).at(-1) === "0") {
        return tadam[dozens];
    } //от 21 до 99
    else if (numLength === 2) {
        return tadam[dozens] + " " + tadam[lastSymbol];
    } //сотни с двумя нулями(200 300)
    else if (
        numLength === 3 &&
        String(number).at(-1) === "0" &&
        String(number).at(-2) === "0"
    ) {
        return tadam[units] + " hundred";
    } //сотни с одним нулем(230 540 780)
    else if (numLength === 3 && String(number).at(-1) === "0") {
        return tadam[units] + " " + "hundred " + tadam[secondNum];
    } //сотенные единицы(203 307)
    else if (numLength === 3 && String(number).at(-2) === "0") {
        return tadam[units] + " hundred " + tadam[lastSymbol];
    } //сотенные десятки(514 817)
    else if (numLength === 3 && String(number).at(-2) === "1") {
        return tadam[units] + " hundred " + tadam[x];
    } //остальные сотни
    else if (numLength === 3 && String(number).at(-1) != "0") {
        return (
            tadam[units] +
            " " +
            "hundred " +
            tadam[secondNum] +
            " " +
            tadam[lastSymbol]
        );
    }
};
