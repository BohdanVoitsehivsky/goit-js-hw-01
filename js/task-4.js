// розгалудження


// console.log("before");
// // true
// // if(5 > 3){
// // console.log("x > y");

// // }
// // false 
// if(50 > 30){
// console.log("x > y");

// } else {
//     console.log("x < y")
// }


// console.log("after");


// if...else
// const sum = 100;
// if(sum >= 100) {
//     console.log("big chocolate")
// } else {
//     "small chocolate"
// }



// if...else if...else
// const points = 500;

// if(points > 1500) {
//    console.log("level 1"); 
// } else if(points > 500) {
//     console.log("level 2");
    
// } else if(points <500) {
//     console.log("level 3")
// } else {
//     console.log( "level 4")
// }


// тернарний оператор


// const balance = 500;
// // let message;
// // if(balance >=0) {
// //     message = "Positive"
// // } else { message = "Negative"};
// const message = balance >=0 ? "Positive" : "Negative";
// console.log(message);



// області видимості


// const a = 15;

// if(true) {

//     const b = 10;
//     console.log(a);


// }
// if(true) {
//     const a = 5;
//     console.log(a);
// }


// const hours = 14;
// const minutes = 05;
// let time;
// // if(minutes > 0) {
// //     time = `${hours} г. ${minutes} хв.`
// // } else {
// //     time = `${hours}`;

// // }

// const message = minutes > 0 ? `${hours} г. ${minutes} хв.` : `${hours}`;
// console.log(message);

// Лічильник дедлайну

// const deadline = 1;
// if(deadlin e === 0) {
//     console.log("Today");
// } else if(deadline ===1) {
//     console.log("Tomorrow")
// } else if(deadline === 2) {
//     console.log("Overmorrow")
// } else {
//     console.log("Date in the future")
// }



// Оператор Switch


// const user = "Alic";

// switch(user) {
//     case "Petya":
//         console.log("case1")
//         break;
//         case "Alice":
//             console.log("case2");
//             break;
//             case "Yura":
//                 console.log("case3");
//                 break;
//                 default:
//                     console.log("default")

// }

// const deadline = 3;
// switch(deadline) {
//     case 0:
//         console.log("Today");
//         break;
//         case 1:
//             console.log("Tomorrow");
//             break;
//         case 2:
//             console.log("Overmorrow")
//             break;
//             default:
//                 console.log("Date in the future")    
// }




// const option = 15;
// let message = "";

// switch(option) {
//     case 1:
//         message = "Ви зможеет";
//         break;
//         case 2:
//             message = " Кур*єр";
//             break;
//             case 3:
//                 message = "Посилка буде ";
//                 break;
//                 default:
//                     message = " Вам пепедзвонить";
// }
// console.log(message)




// Логічні оператори


// console.log(Boolean("1"));


// Логічне і &&

// console.log(null && 4);


// Оператор АБО

// console.log(false || 5);


//  Оператор заперечення !
// console.log(!5);



// const sub = "pro";
// let canConnct;
// if(sub === "pro" || sub === "vip") {
// canConnct = true;
// } else { canConnct = false}
// console.log( canConnct);



// const isOnline = true;
// const isFriend = true;
// const isDnD = false;
// const canOpenChat = isOnline && isFriend && !isDnD;
// console.log( "Can open", canOpenChat)


// Урок2

// Методи рядків

// .slice

// const user = "Alice Franko";
// const str = user.slice(-3);
//  console.log(str);

// toLowerCase/toUpperCase

// .includes


// const user = "Alice Franko";
// console.log(user.includes("ank"));

// startsWith/ endsWith

// const user = "Alice Franko";

// console.log(user.startsWith("Ai"));
// console.log(user.endsWith("ko"))


// indexOf

// const user = "Alice Franko";
// console.log(user.indexOf("a"));

// trim

// const user = "   Alice Franko    ";
// console.log(user.trim())



// let link = "http://mysite.com/about";

// if(!link.endsWith("/")) {
//     link += "/";
//     console.log(link);

// } 


// let link = "http://mysite.com/about";

// if(!link.endsWith("/") && (link.includes("my-site"))) {
//     link += "/";
    

// }
// console.log(link);


// пошук рядка у підрядку 


// Цикли 


//--------- цикл for



// console.log("Before");

// for(let i = 10; i >= 0; i -= 1) {
// console.log(i);
// }

// console.log("after");

// const str = "Alice";



// for(let i = 0; i < str.length; i += 1) {
//     if(str[i] === "i") {
//         break;
//     }
//     console.log(str[i]);

// }



// --------------інкремент


// let a = 10;
// const b = a++;


// console.log("a", a);
// console.log("b", b);


// цикл while


// console.log("Before")

// let counter = 0;
// while(counter < 5) {
//     console.log(counter);
//     counter++;

// }


// console.log("after")


// let a = 10;

// do {
//     console.log(a);
//     a++;

// } while(a < 6)




const a = 20;
const b = 100;

// for(let i = a; i<= b; i++) {
//     if(i % 5 ===0) {
//         console.log(i);
//     }
    

// }


// зворотній приклад

// for(let i = b; i >=a; i--) {
//     if(!(i % 5)) {
//         console.log(i)
//     }
// }



const min = 0;
const max = 5;
 let total = 0;



//  for(let i =min; i <= max; i++) {
//     if(i % 2 === 0) {
//         total += i
//     }
//  }
//  console.log(total);

for( let i = min; i <=max; i++) {
 if(i % 2 !== 0) {
    console.log(i);
    
 }  
}