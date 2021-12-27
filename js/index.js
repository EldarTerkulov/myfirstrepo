

//Peremenie
//var name ="Eldar";

//let name ="ogogo"
//const age = 2019;
//console.log (name, age);

//tipi dannih
//string
//let name = "Ogogo"
//Number
//let age =25;
//speci i ne spec pestota
//let n= null;
//let n=undefined
//bolivo znachenie
//let n = true;
//let l= false;
//object

// let obj= {
// naem: "Ogogo",
// age: 2,
// location:"Ibraimova",
// price: "160000",
// frend: {
//     name:"qwerty",
//     age: 20,
// },
// };
// // Masiv
// let name = "Eldar";
// let arr = [5, name, obj];
// console.log( arr )

//Alert
//vadvod infromacii
//  let hi = "Privet"
//  alert(hi);


//confirm
//okno informacii
// let resp = confirm("Vam est 18 let");
// console.log (resp);

//Promt
//polzivatel mojet vnesti danni
//  let resp = prompt("Kak u vas dela ?");
// console.log(resp);


//Matematika operator
// let num =  5 + 5;
// let num2 = + 20;
// console.log (num)
// console.log (num2)
// let num3 = 2 + 2 + (10 + 1) + (20 * 3)
// console.log (num3)

//Operatro umnojeniya 
//let num = 2*4 ;
//console.log(num)
// console.log (10%3)

//console.log (5 === "5")

// console.log (100-"100")


// Uslovnii operator 

//  let resp = Number(prompt ("skolko budet 2 *2 + 2"));
// if (resp === 6)
// {
//     alert("Ti prav");
// }
// else {
//     alert ("ti ne prav ")
// }



// Создайте программу на JavaScript, ко
// торая будет запрашивать у ползователя два целых ч
// исла по очереди, а затем отобразит на экране их сумму
// , разность, произведение и результат деления.


// let num1 = +prompt (" Vvidite pervoe chislo");
// let num2 = +prompt (" Vvidite vtoroe chislo");

// alert (num1 + num2);
// alert (num1 - num2);
// alert (num1 * num2);
// alert (num1 / num2);



//Условные и логические операторы
// let a = 5;

// if (false) {
//   console.log(Число ${a} больше 10);
// } else {
//   console.log(Число ${a} меньше 10);
// }

// if (10 > 11 && 5 > 6 && ) {
//   console.log("True");
// } else if (10 === 5) {
//   console.log("Else if");
// } else {
//   alert("Не верно");
// }

// let name = prompt("Введите ваше имя");

// switch (name) {
//   case name === "Ogogo":
//     return alert("Ogogo");
//     break;
//   case name === "Academy":
//     return alert("Academy");
// }

//Тернарный оператор

// let name = prompt("Enter your name");

// name === "Ogogo" ? alert("True") : alert("False")

//Логические операторы
//Оператор И
// console.log(true && true);

// Или
// console.log(false || true);

// console.log(!0);

// console.log(false && (false || true || false));

// for (let count = 1; count <= 100; count++) {
//     if (count % 15 === 0) {
//       console.log("FizzBuzz");
//     } else if (count % 3 === 0) {
//       console.log("Fizz");
//     } else if (count % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(count);
//     }
//   }

// Domashka !!!
//  let m = 35
//  if  (m > 20) { 
//      console.log('true') 
//  };

// let y = 20
// else (y < 20){
//     console.log(false);
// }

//  dz


//  ciklii : for, while, do while , for in , for of.
// let arr = [1, 2, 3, 4, 5, 25];
// for (let count = 0; count < arr.length; count++) {
//     if ( arr[count] => 25)
//     console.log (arr [count]*2);
// }

// let userName = ["Kiril", "Bakit", "Timnur" ,"BMW" ]
//  for (let i = 0; i < userName.length; i++ ){
//      if (userName [i]=== "BMW"){
//          console.log(userName[i] + " Mashina");
//      } else {
//          console.log (userName [i] + " CHelovek");
//      }
//  } 
// cikl while 
// let i = 0;
//  let arr = [1, 2, 3, 4,]
// while(i < arr.length) {
//     console.log(`Hello World ${i}`);
//     i++;
// }

// cikl do while 

// let i = 0;
// do {
//     console.log (1);
//     i++;
// } while (i < 5);

// cikl for in

// const user = {
//     name:"Tor",
//     position: "Frontend",
//     workExp: "7+ ye",

//     company: ["GetIn", "DevForge", "PhenX", "Latoken", "Ogogo"],

// }

// for(key in user){
//     console.log(key);
// }

// cikl for of 


// const arr =[ 'Privet ', 'Hellow', 'world'];
// for (let index = 0; index < arr.length; index++) {
//     console.log (arr [index]);

// }
 
// for (i of arr) {
// console.log (i);
// }


// const personData = [
//     {
//       name: "Kirill",
//       budget: 750,
//     },
//     {
//       name: "Talai",
//       budget: 350,
//     },
//     {
//       name: "Andrey",
//       budget: 242,
//     },
//     {
//       name: "Sergey",
//       budget: 835,
//     },
//     {
//       name: "Dima",
//       budget: 195,
//     },
//     {
//       name: "Slava",
//       budget: 50,
//     },
//     {
//       name: "Anton",
//       budget: 100,
//     },
//   ];


// let result = 0;
// let arr = [2, 3, 4, 5]
// for (let i = 0; i < arr.length; i++) {
//   result = result *= arr[i]
// }
// console.log(result)


