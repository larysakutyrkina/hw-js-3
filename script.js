//Теоретический вопрос: 
//1. Описать своими словами для чего вообще нужны функции в программировании.
// В случае когданесколько раз в разных местах кода нужно выполнить одну и ту же  последовательность команд, 
//можно вынести их в отдельную функцию, и вызывать ее, тем самым значительно уменьшив количество кода.
//
//2. Описать своими словами, зачем в функцию передавать аргумент.
// При вызове функции значение каждого из аргументов передается в соответствующую локальную переменную. 

let num1 = +prompt("Please, enter the first digit:");

let operation = prompt("Plaese, enter the operation");

let num2 = +prompt("Please, enter the second digit:");

function calc (num1, operation, num2) {
    switch (operation){
        case "+":
        return (num1 + num2);

        case "*":
        return (num1 * num2);

        case "-":
        return (num1 - num2);

        case "/":
        return (num1 / num2);

    }
}
console.log(`${num1} ${operation} ${num2} = ${calc(num1, operation, num2)}`)