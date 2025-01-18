let name = "Sam";
console.log(name);

let language = "C++";
language = "Javascript";
console.log(language);

let sum = 0;
sum += 1;
console.log(sum);

name = "Beniitta";
student = name;

console.log(student);

let answer = 43; //Convertin numbers to strings
let stringanswer = answer.toString(); //convet to string
console.log(answer);

// Occationally nan in your code. Means it's not working. Innapproriate data types

let str = "42";
let numericValue = Number.parseInt(str, 10); // Number.pareInt() in a function. <IT takes two arguments: Number.parseInt(string, rafix);

let a = 10;
let b = "20";
b = Number.parseInt(b, 10); //Now a number
let summ = a + b;
console.log(summ);

Number.parseInt("123abc", 10);
Number.parseInt("5 meters", 10);

//parseint and parseflow
//parseint converts string to and integer
//parsefloat converts into float

parseFloat("123.456");

let number = 2.34335;
let limitedNumber = number.toFixed(2); //To limit = 2.34// String

limitednumber = parseFloat(limitedNumber); //Convert back to number
