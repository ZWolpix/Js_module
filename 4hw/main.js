// Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе;
// и 0 – если числа равны.
function comparison(a = 2, b = 1) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}

// Написать функцию, которая вычисляет факториал переданного ей числа.
function factorial(a = 0) {
    let result = 1;
    for (let i = 1; i < a + 1; i++) {
        result *= i;
    }

    return result;
}

// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
function makeNumber(h, t, u) {
    return h * 100 + t * 10 + u;
}

// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, 
// то она вычисляет площадь квадрата.
function getArea(a = 1, b) {
    if (b === undefined) {
        return a * a;
    } else {
        return a * b;
    }
}

// Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, 
// равное сумме всех своих собственных делителей.
function isPerfectNum(num = 1) {
    let result = 1;
    for (let i = 2; i <= Math.trunc(num / 2); i++) {
        if (num % i == 0) {
            result += i;
        }
    }

    return result === num ? "This number is perfect" : "This number isn't perfect";
}

// Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, 
// которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.
function getPerfectNumber(startRange, endRange) {
    for (let i = startRange; i <= endRange; i++) {
        if (isPerfectNum(i) == "This number is perfect") {
            console.log(i)
        }
    }
    return true;
}

// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
let time = new Date();

function setTime(hours = time.getHours(), minutes = time.getMinutes(), seconds = time.getSeconds()) {
    time.setHours(hours);
    hours = time.getHours();

    time.setMinutes(minutes);
    minutes = time.getMinutes;

    time.setSeconds(seconds);
    seconds = time.getSeconds;

    if (hours < 10) {
        hours = `0${hours}`;
    }

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    if (seconds < 10) {
        seconds = `0${seconds}`
    }

    return `${hours}:${minutes}:${seconds}`;
}

// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
function getSeconds(hours = time.getHours(), minutes = time.getMinutes(), seconds = time.getSeconds()) {
    return hours * 3600 + minutes * 60 + seconds;
}

// Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
function getTime(seconds = 0) {
    let hours = 0
    while(seconds - 3600 > 0) {
        seconds -= 3600;
        hours++;
    }

    let minutes = 0;
    while (seconds - 60 > 0) {
        seconds -= 60;
        minutes++;
    }

    return setTime(hours, minutes, seconds);
}

// Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, 
// и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: 
// сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

function diffOfTime(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
    let sec1 = getSeconds(hours1, minutes1, seconds1);
    let sec2 = getSeconds(hours2, minutes2, seconds2);

    let diff = Math.abs(sec1 - sec2);

    return  getTime(diff);
}

// Фібоначчі. Спочатку я забула про те що його треба зробити рекурсією, потім зробила fibRec і вирішила почитати проце в інтернеті.
//  Поганий варіант. Прочитала про хороші, розібралась в fibonacсiRec і написала самостійно.

function fibonacсiLoop(n) {
    let first = 0;
    let second = 1;
    let nNumber;

    for(let i = 2; i < n; i++) {
        nNumber = first + second;
        first = second;
        second = nNumber;
    }

    return nNumber;
}

function fibonacсiRec(n) {
    if (n == 0) {
        return [0, 1];
    } else {
        [prev, next] = fibonacсiRec(n - 1);
        return [next, prev + next];
    }
}

function fibRec(n) {
    return n <= 1 ? n : fibRec(n - 1) + fibRec(n + 2);
}

// Масив навпаки
function backwardsArr(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

function backwardsArr2(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

function backwardsArr3(arr) {
    for (let i = 0; i <= Math.trunc(arr.length / 2); i++) {
        temp = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = arr[i];
        arr[i] = temp;
    }   
    return arr;
}

let arr = [0, 1, 2, 3, 4, 5, 6];
backwardsArr(arr);
console.log(backwardsArr2(arr));
console.log(backwardsArr3(arr))
