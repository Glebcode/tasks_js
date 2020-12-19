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

 