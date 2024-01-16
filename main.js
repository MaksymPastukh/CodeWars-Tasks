//Задача 1
//Создаем функию которая принимает в себя массив
function oddOrEven(array) {

    // Создаем перемменую которой присваиваем нуливое значение, к которому мы будем считать целые числа с массива
    // Эта переменная будет использоваться для хранения суммы элементов массива.
    let sumOfElements = 0

    //Используем цикл
    //for-of, который проходит по каждому элементу массива array и добавляет его значение к переменной sumOfElements.
    for (const element of array) {
        sumOfElements += element;
    }

    // Далее выполняем условие
    // Если значение нашей переменной четное тогда выводится  `even`, а иначе `odd`
    if (sumOfElements % 2 === 0) {
        return `even`
    } else {
        return `odd`
    }
}

// console.log(oddOrEven([1, 1, 1]))

//Задача 2
// Создаем функцию, которая принимает в себя массив чисел
function sumTwoSmallestNumbers(numbers) {
    // Используем метод сортировки для нахождения двух наименьших целых чисел
    // Метод sort изменяет исходный массив, сортируя его в порядке, заданном функцией сравнения
    numbers.sort((a, b) => a - b);

    // Возвращаем сумму двух первых (наименьших) элементов массива
    return numbers[0] + numbers[1];
}

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); //13

//Задача 3
// Создаем функцию, которая принимает  в параметрах логическое значение
function booleanToString(b) {
    // Возвращаем значение параметра с методом Boolean.prototype.toString()
    // Метод toString() возвращает строковое представление указанного объекта Boolean.

    return b.toString()
}

// При вызове функции с булевым значением, функция нам вернет это значение в строковом виде!
// console.log(booleanToString(true))


//Задача 4
// Создаем функцию, которая принимает  в параметр (a) массив , а в параметр (х) новое значение
function check(a, x) {
    // Используя метод includes на массиве (а) со значением параметра (х) мы проверяем создежится ли массиве -
    // предоставленное значение (х)
    return a.includes(x)
}

// console.log(check([66,101], 66))

//Задача 5
// Условие
// В параметр функции передается число от 0 до 9, нужно его вернуть в строковом варианте
// Пришло число 1 в консоль вывод "один"


// Создаем функцию которая принимает в себя число и возвращает еще число в строковом виде
// Используем условие SWITCH которым проходимся по числах от 0 до 9 и если условие совпадает то возвращаем с условия
// Строковой вид числа
function switchItUp(number) {
    switch (number) {
        case 1 :
            return 'One';
        case 2 :
            return 'Two';
        case 3 :
            return 'Three';
        case 4 :
            return 'Four';
        case 5 :
            return 'Five';
        case 6 :
            return 'Six';
        case 7 :
            return 'Seven';
        case 8 :
            return 'Eight';
        case 9 :
            return 'Nine';
        case 0 :
            return 'Zero';
    }
}

// console.log(switchItUp(1))

// One


//Задача 6
// Условие
// Нужно написать функцию которая принимает в себя два логичиских аргумента
// Цель функции это вернуть true или false при установке будильника, это зависит от того, работаю ли я и нахожусь
// ли в отпуске

/*
* setAlarm(true, true) -> false // работаю и в отпуске
* setAlarm(false, true) -> false // безработный, но в отпуске
* setAlarm(false, false) -> false // безработный, но не в отпуске
* setAlarm(true, false) -> true // трудоустроен, но не в отпуске
* */

/*
    На основе введенных данных вернуть, true если вам нужно установить будильник,
    и false если вам не нужно устанавливать будильник.
    Из приведенного выше списка комбинаций мы видим, что единственный раз,
    когда вам нужно установить будильник, — это если вы работаете, а не в отпуске.
    Все остальное может вернуться false.
* */
function setAlarm(employed, vacation) {
    return employed && !vacation;
}

// console.log(setAlarm(true, false))

//Задача 7
// Условие
// Нужно написать функцию которая принимает массив строк в качестве аргумента и возвращает
// отсортированный массив, содержащий те же строки, отсортированный от самой короткой к сомой длиной


// Задаем функцию sortByLength, которая принимает массив строк в качестве аргумента
function sortByLength(array) {
    // Используем встроенный метод массивов sort, сравнивая длины строк
    // Функция сравнения (a, b) => a.length - b.length возвращает отрицательное число.
    //  Если длина строки a меньше длины строки b, то возвращается отрицательное число,
    //  что приводит к тому, что a будет идти перед b в отсортированном массиве.
    return array.sort((a, b) => a.length - b.length);
}

// Пример вызова функции с массивом строк ["Beg", "Life", "I", "To"]
// console.log(sortByLength(["Beg", "Life", "I", "To"]));
// Результат: [ 'I', 'To', 'Beg', 'Life' ]


//Задача 8
// Условие
// Каждый день аренды автомобиля стоит 40 долларов.
// Если вы арендуете автомобиль на 7 и более дней, вы получите скидку 50 долларов США.
// Альтернативно, если вы арендуете автомобиль на 3 или более дней, вы получите скидку 20 долларов США.
//
// Напишите код, который выдает общую сумму за разные дни(d).
// Определение функции rentalCarConst, которая принимает количество дней (d) в качестве аргумента
function rentalCarConst(d) {
    // Константа, представляющая стоимость аренды автомобиля за один день
    const day = 40;

    // Условие: Если количество дней (d) больше или равно 3 и меньше 7, применяется скидка 20 долларов
    if (d >= 3 && d < 7) {
        // Возвращается стоимость аренды с учетом скидки 20 долларов
        return d * day - 20;
    }
    // Дополнительное условие: Если количество дней (d) больше или равно 7, применяется более большая скидка 50 долларов
    else if (d >= 7) {
        // Возвращается стоимость аренды с учетом более большой скидки 50 долларов
        return d * day - 50;
    }

    // Если ни одно из условий не выполняется, возвращается стандартная стоимость аренды без скидок
    return d * day;
}

// Пример вызова функции с аргументом 4 и вывод результата в консоль
// console.log(rentalCarConst(4));  // Результат: 140


//Задача 9
// Условие
//Напишите функцию, которая возвращает минимальное и максимальное число данного списка/массива.

const arr = [1, 2, 3, 4, 5];

// Определяем функцию minMax, которая принимает массив в качестве аргумента
function minMax(arr) {
    // Используем spread-оператор и методы Math.max и Math.min для нахождения максимального и минимального значения в массиве
    return [Math.max(...arr), Math.min(...arr)];
    //return [Math.max(...arr), Math.min(...arr)];
    // Возвращается массив, содержащий максимальное и минимальное значения из массива arr.
    // Это достигается с использованием spread-оператора (...)
    // для распаковки элементов массива в аргументы методов Math.max и Math.min.
}

// Вызываем функцию minMax с массивом arr и выводим результат в консоль
// console.log(minMax(arr)); // [ 5, 1 ]


//Задача 10
// Условие
// Напишите функцию, которая принимает список строк и возвращает каждую строку, перед которой стоит правильный номер.
// Нумерация начинается с 1. Формат n: string: . Обратите внимание на двоеточие и пробел между ними.
const number = function (array) {
    //Создаем пустой массив
    let test = [];
    //Проверяем ввходящий в функцию массив на длину, если длина равна 0
    if (array.length === 0) {
        // Возвращаем пустой массив
        return []
    } else {
        // Иначе, проходимся по всему массиву
        for (let i = 0; i < array.length; i++) {
            // И при каждой итерации добавляем индекс в массив с порядковым номером начиная с 1  и элименты массива под каждый номер
            test.push((i + 1) + ': ' + array[i]);
        }
    }
    return test
}

// console.log(number(['a', 'b', 'c'])) // [ '1: a', '2: b', '3: c' ]


//Задача 11
// Условие
// В этой игре герой движется слева направо. Игрок бросает кубик и дважды перемещает количество мест, указанное на кубике.
// Первый параметр — это стартовая позиция игрока слева.
// Второй параметр — это значение, которое игрок получил при броске кубика.
// Он должен переместить это значение дважды вправо..
function move(position, roll) {
    const test = roll * 2;
    if (position === 0) {
        return test
    } else {
        return position + test
    }
}

// console.log(move(2, 5)) // 12


//Задача 12
// Условие
//Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.
// Например:
//
// Учитывая [34, 15, 88, 2] ваше решение, вернется 2
// Учитывая [34, -345, -1, 100] ваше решение, вернется -345

function findSmallestInt(args) {
    // Возвращаем метод для поиска минимального значения ( в аргумантах spread опретатом разворачиваем массив)
    return Math.min(...args)
}

// console.log(findSmallestInt([78,56,232,12,-8])) // -8
//
//
// let array = [
//     'Тем не менее, ее действие имеет последствия',
//     'Тем не менее,  её действие имеет последствия',
//     'Тем не менее, еЁ действие имеет последствия',
//     'Тем не менее,  Её  действие имеет последствия',
//     'Тем не менее, ЕЕ действие имеет последствия',
//     'Тем не менее, ЕЁ  действие имеет последствия',
// ]
//
// array.forEach(item => {
//     let result = item.replace(/\s+[еЕ][еЕёЁ]\s+/g, ' его ')
//     console.log(result)
// })

let array = [
    '21.04.1964',
    '05.03.1976',
    '02.01.1981',
    '00.11.1997',
    '18.08.2001',
]

array.forEach(item => {
    let result = /[0-3][0-9]\.[0-1][0-9]\.[1-2][0-9]{3}/.test(item)
    // console.log('Date ' + item + (result ? ' true' : ' false'))
})


//Задача 13
// Условие
//В массиве целых чисел найдите то, которое встречается нечетное количество раз.
// Всегда будет только одно целое число, которое появляется нечетное количество раз.
function findOdd(A) {
    //A.reduce((a, b) => a ^ b) - Эта часть кода использует метод reduce для применения функции XOR
    // ко всем элементам массива A.
    // Последовательно применяя XOR ко всем элементам массива, мы получаем результат XOR всех элементов.
    return A.reduce((a, b) => a ^ b)
    //Функция reduce принимает два аргумента: a (аккумулятор) и b (текущий элемент массива).
    //a ^ b выполняет операцию XOR между аккумулятором и текущим элементом.
    // Результат выполнения reduce - это элемент, который встречается нечетное количество раз в массиве.
}

// console.log(findOdd([1, 2, 2, 3, 3, 3, 5, 3, 3, 3, 2, 2, 1]))// 5


//Задача 14
// Условие
// Как уже видно из названия, он работает в основном как Фибоначчи,
// но суммируя последние 3 (вместо 2) чисел последовательности для генерации следующего.
// Итак, если мы хотим начать нашу последовательность Трибоначчи с [1, 1, 1]начального ввода
// у нас будет такая последовательность:[1, 1 ,1, 3, 5, 9, 17, 31, ...]
function tribonacci(signature, n) {
    // Создается переменая в которуб инициализируется подмасивом из массива(с аргумента) с начальными значениями.
    // Длина массива равна n
    let result = signature.slice(0, n)
    // Запускается цыкл, который выполняется, пока длина массива result меньше значения n
    while (result.length < n) {
        // В каждой итерации цикла к result добаваляется следующие значение Трибоначчи
        // Которое равно суме последних трех элиментов массива  result. result.slice(-3) возвращает подмассив из
        // последних трех элиментов и reduce используется для их суммирования
        result[result.length] = result.slice(-3).reduce((acc, val) =>  acc + val, 0)
    }


    return result
    // После выполнения цикла функция возвращает массив result, содержащий первые n элементов последовательности Трибоначчи.
}

console.log(tribonacci([1, 1, 1], 10))

// result инициализируется значением [1, 1, 1] (первые три элемента signature).
// Пока длина result меньше 10:
// Итерация 1: result = [1, 1, 1, 3] (сумма последних трех элементов).
// Итерация 2: result = [1, 1, 1, 3, 5] (сумма последних трех элементов).
// И так далее, пока длина не станет равной 10.
// В конце, функция возвращает [1, 1, 1, 3, 5, 9, 17, 31, 57, 105].




//Задача 15
// Условие
// Нужно записать число в расширеной форме
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
function expandedForm(num) {
    // Создаем пустой массив
    let subNumArr = []
    // Переводим получаемый массив в строку
    let numStr = num.toString()
    // Запускаем цикл по каждой цифре в строковом представлении числа.
    for(let i = 0; i < numStr.length; i++) {
        // Вычесляется количество нулей, которые будут добавлены к текущий цифре.
        // Это количество равно разнице между длиной строки числа и текущим индексом
        let zeroCount = numStr.length - i - 1;
        // Иницилизируется переменая х, которая будет использоваться для отслеживания добавленных нулей
        let x = 0;
        // Создается переменая "subNum" которая начинается с текущей цифры
        let subNum = numStr[i]

        // Проверяем не является ли текущая цифра нулем. Если не является то:
        if (numStr[i] !== '0') {
            // Запускается цикл, который добавляет нули к текущей цифре в соответствии с zeroCount.
            while (x < zeroCount) {
                subNum = subNum + '0';
                x++
            }
            // subNumArr.push(subNum): Добавляется получившаяся подстрока в массив subNumArr.
            // Если цифра была 0, то подстрока не добавляется (потому что в развернутой форме 0 не добавляется).
            subNumArr.push(subNum)
        }
    }

    //Возвращается результат в виде строки, в которой подстроки из массива объединены с использованием знака "+".
    return subNumArr.join(' + ')
}


console.log(expandedForm(2351100))


//Задача 16
// Условие
// Нужно возвращать true, если первый переданый аргумент (строка) заканчивается
// вторым аргументом(так же строкой)


function solution(str, ending) {
    // Возвращаем строку с методом endsWith(который принимает второй аргумент), данный метод
    // Позволяет определить, заканчивается ли строка символами указанами во втором аргументе. Возвращая true или false
    return str.endsWith(ending)
}


console.log(solution('abcdes', 'es')) // true



//Задача 17
// Условие
// Создайте функцию, которая отвечает на вопрос «Вы играете на банджо?».
// Если ваше имя начинается с буквы «R» или строчной «r», вы играете на банджо!
//
// Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:
// name + " plays banjo"
// name + " does not play banjo"
// Указанные имена всегда являются допустимыми строками.
function areYouPlayingBanjo(name) {
    // Проверяем, если первая буква строки равна R i r маленькой тогда условие верное и возвразаем true
    // Если в строке приходит имя которое не равно нашому условию тогда мы мы возвразаем false
    if(name[0] === 'R' || name[0] === 'r') {
        return `${name} plays banjo`
            ;
    }
    return `${name} does not play banjo`;
}


console.log(areYouPlayingBanjo('ARef'))