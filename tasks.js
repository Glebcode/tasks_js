// javascript
// getStats([3, 37, 45, 80, 1, 50, 36, 75, 77, 26]) --> {
//     max: 80,
//     min: 1,
//     avg: 42.4
// }
// getStats([86, 30, 70, 19, 68, 75, 10, 49, 26, 37]) --> {
//     max: 86,
//     min: 10,
//     avg: 47
// }
// console.log(getStats([]), { max: null, min: null, avg: null });
// console.log(getStats([0]), { max: 0, min: 0, avg: 0 });
// console.log(getStats([5]), { max: 5, min: 5, avg: 5 });
// console.log(
//             getStats([33, -18, -12, 37, 14, 41, 26, -4, -19, -26, -38, -15, -11, 1, 1, 42, -13, -32, -27, 42, -47, -50, -30, -19, 3, 37, 38, 6, 26, -40, 3, 10, -32, 38, -18, 44, 22, 19, -7, -7, 33, 25, 36, 38, -40, -35, -1, 30, 41, -16]),
//             { max: 44, min: -50, avg: 2.58 })

// console.log(
//             getStats([7, -3, 36, 21, -21, 18, 7, -3, 24, 25, 17, -16, 49, 17, 6, 33, 16, 19, -47, 50]),
//             { max: 50, min: -47, avg: 12.75 })


// let getStats = [7, -3, 36, 21, -21, 18, 7, -3, 24, 25, 17, -16, 49, 17, 6, 33, 16, 19, -47, 50];
// for (let i = 0; i < getStats.length; i++) {
//     if(getStats[i] < getStats[0]){
//         getStats[0] = getStats[i];
//         console.log(getStats[0]);
//     }
// }
// console.log("min = " + getStats[0]);

// for (let i = 0; i < getStats.length; i++) {
//     if(getStats[i] > getStats[0]){
//         getStats[0] = getStats[i];
//         console.log(getStats[0]);
//     }
// }
// console.log("max = " + getStats[0]);

// let b = 0;
// for (let i = 0; i < getStats.length; i++) {
//     b += getStats[i];
//     console.log(b);
// }
// let a = b/getStats.length;
// console.log("avr = " + a);


/////////////////////////////////////////////////////////////////



// ### Задача 6
// Дан массив. Нужно удалить из него все дубликаты значений, сохранив исходный порядок элементов.

// Примеры:

// filterUnique([10, 22, 14, 10, 28, 10, 14, 62, 32]) --> [10, 22, 14, 28, 62, 32];
// filterUnique([3, 14, 15, 92, 6, 5, 35]) --> [3, 14, 15, 92, 6, 5, 35];
// filterUnique([8, 2, 2, 3, 8, 2, 2, 3]) --> [8, 2, 3];

// console.log(unique([]), []);
// console.log(unique([5]), [5]);
// console.log(unique([8, 2, 2, 3, 8, 2, 2, 3]), [8, 2, 3]);
// console.log(unique(["A", 5, "obj", "true", "arr", "obj", "a", 5, "obj"]), ["A", 5, "obj", "true", "arr", "a"]);

// let filterUnique = [8, 2, 2, 3, 8, 2, 2, 3];
// for(let i = 1; i < filterUnique.length; i++){
//     for (let j = 2; j < filterUnique.length; j++)
//    if( filterUnique[i] = filterUnique[j]){
//        filterUnique.splice(j, 1)
//    }
// }
//    console.log(filterUnique);




///////////////////////////////////////////////////////////////////////


// Дана строка с текстом и число - максимально разрешенная длина текста.
// Если длина строки больше разрешенной, то нужно заменить конец строки на троеточие таким образом,
// чтобы ее длина была меньше или равна максимально разрешенной (с учетом троеточия).
// Если длина строки меньше или равна максимально разрешенной, то строка должна остаться неизменной.

// Кроме того, ваша функция должна выбрасывать исключение типа `RangeError`,
// если в нее передали отрицательное или нулевое значение `maxLength`.

// console.log(trim("Hello, I am a text!", 9), "Hello, I\u2026");
// console.log(trim("Hello, I am a text!", 1), "\u2026");
// console.log(trim("", 5), 'RangeError');
// console.log(trim("Hello, I am a text!", 19), "Hello, I am a text!");
// console.log(trim("I'm a text!", -50), 'RangeError');
// console.log(trim("", 0), 'RangeError');
// split, join, splice

// let str = "Hello, I am a text!";
// function splitCut (){
//    let arr = str.split('', prompt('Number of sings ?', '9'));
//    arr = arr.join('');
//    alert(arr + '...');
// }
//  splitCut();

// let obj1 = {
//     name: "jcnjdcn",
//     age: prompt('Скоко те лет??', ' '),
//     contact: 324324
// }

// function test() {
//     return 2
// }


// console.log(obj1.name2, obj1['name-4'], obj1.name1[1]);
// console.log(obj1);
// for (let zalupa in obj1) {

//     if(zalupa == 'age'){

//         if(obj1[zalupa] > 18){
//             alert('Заєбіста!!')
//         }else{
//             alert("Лох, расти!!")
//         }
//     }
// }


// obj1.question = 'WTF?'
// obj1['mother-name'] = 'Natalia'
// console.log("🚀 ~ file: tasks.js ~ line 134 ~ obj1", obj1)




/*
forEach or map (5,6,3)
*/
////5/////
// let filterUnique = [8, 2, 2, 3, 8, 2, 2, 3];
// for(let i = 1; i < filterUnique.length; i++){
//     for (let j = 2; j < filterUnique.length; j++)
//    if( filterUnique[i] = filterUnique[j]){
//        filterUnique.splice(j, 1)
//    }
// }
//    console.log(filterUnique);

// let filterUnique = [8, 2, 2, 3, 8, 2, 2, 3];
// console.log(Math.max.filterUnique.length);













// forEach, map, filter, reduce, find, findIndex

// ### Задача 1
// let a = 0;
// for (let i = 0; i <= 100; i++){
// a +=i;
// }
// console.log('Sum of numbers from 0 to 100 is:' + a);

// let arr100 = []

// for(let i = 1; 101 > i; i++){
//     arr100.push(i)
// }
// const sum = arr100.reduce((total, value1)=>
// {
// return total + value1;
// }, 0)
// console.log(sum)
// ### Задача 2
// // Задача. В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).

// let i = prompt('You need to input number from 0 to 59', '0 - 59');
// let quaters = []
// quaters.push[i]
// quaters.filter(quaters => i < 15, alert("First quarter"));

// if(i > 0 & i < 15){
//     alert("First quarter");
// }
// else if(i > 15 & i <= 30){
//     alert("Second quarter");
// }
// else if(i > 30 & i <= 45){
//     alert("Third quarter");
// }
// else if(i > 45 & i <= 59){
//     alert("Fourth quarter");
// }
// else{
//     alert("You had inputted wrong number !");
// }


// ### Задача 3
// Напишите программу, которая выводит через console.log все цифры от 1 до
// 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
// Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех
// чисел, которые делятся и на 3 и на 5.
// let arr100 = []
// for(let i = 1; 101 > i; i++){
//     arr100.push(i)
// }

// for (let numb of arr100){
//     if (numb % 3 == 0 && numb % 5 == 0){
//         console.log("FizzBuzz   " + numb);
//     }
//     else if (numb % 3 == 0){
//         console.log("Fizz   " + numb);
//     }
//     else if (numb % 5 == 0){
//         console.log("Buzz   " + numb);
//     }
//     else{
//         console.log("Ordinary   " + numb);
//     }
// }



// ### Задача 4
// Даны числа 4, -2, 5, 19, -130, 0, 10, 200, -30. Найдите минимальное и максимальное число.

// let numbers = [4, -2, 5, 19, -130, 0, 10, 200, -30];

// numbers.forEach((numb ) =>
// {
//     if(numb > numbers[0]){
//         numbers[0] = numb;
//         console.log(numbers[0]);
//     }
// })

// for (let numb of numbers) {
//     if(numb > numbers[0]){
//         numbers[0] = numb;
//         console.log(numbers[0]);
//     }
//     console.log(numb)
// }
// alert(numbers[0]);
// alert(numbers.length);
// console.log(numbers);

// let numbers = [4, -2, 5, 19, -130, 0, 10, 200, -30];
// for (var i = 0; i < numbers.length; i++) {
//     if(numbers[i] < numbers[0]){
//         numbers[0] = numbers[i];
//         console.log(numbers[0]);
//     }
// }
// alert(numbers[0]);





// ### Задача 6
// Дан массив. Нужно удалить из него все дубликаты значений, сохранив исходный порядок элементов.

// Примеры:

// filterUnique([10, 22, 14, 10, 28, 10, 14, 62, 32]) --> [10, 22, 14, 28, 62, 32];
// filterUnique([3, 14, 15, 92, 6, 5, 35]) --> [3, 14, 15, 92, 6, 5, 35];
// filterUnique([8, 2, 2, 3, 8, 2, 2, 3]) --> [8, 2, 3];

// console.log(unique([]), []);
// console.log(unique([5]), [5]);
// console.log(unique([8, 2, 2, 3, 8, 2, 2, 3]), [8, 2, 3]);
// console.log(unique(["A", 5, "obj", "true", "arr", "obj", "a", 5, "obj"]), ["A", 5, "obj", "true", "arr", "a"]);

// let filterUnique = [8, 2, 2, 3, 8, 2, 2, 3];
// filterUnique.forEach ((numb, index,) => {
//     for (let j = 2; j < filterUnique.length; j++)
//    if( filterUnique[index + 1] = filterUnique[j]){
//        filterUnique.splice(j, 1)
//    }
// })
//    console.log(filterUnique);

