/*Q1*/
/*let studentName= [];*/

/*Q2*/
/*let studentName2 = [{

}];*/

/*Q3*/
/*let EmptyArray = [""];

/*Q4*/
/*let numberArray = [23];

/*Q5*/
/*let booleanArray= [true, false, true];

/*Q6*/
/*let mixedArray=["SAAD", "MOOSA","Shayanan",78, True , False ,45];

/*Q7*/
/*let mobileNetworks=["Ufone","Jazz","Telenok","Warid"];

/*Q8*/
/*let avEducation = [
    "SSC <br/>",
    "HSC <br/>",
    "BSC <br/>",
    "BS <br/>",
    "BCOM <br/>",
    "MS <br/>",
    "M.phil <br/>",
    "PhD"
];

document.write("<h1>Qualification</h1>" + avEducation);
*/

/*Q9*/
/*let topMovies = [
    "Inside Out 2 <br/>",
    "Deadpool & Wolverine <br/>",
    "Wicked<br/>",
    "Moana 2 <br/>"
];
document.write("<h1>Top movies of 2015</h1>" + topMovies+"<br/> Length of the Array:"+topMovies.length);
*/
/*Q10*/
/*favCars=["Lamborghini Miura","Audi","BMW","Toyota Fortuner","Ford Mustang"];
document.write("<h1>Favourite Cars</h1><br/>" +favCars+"<br/>"+ "<p>Fisrt index of the array:0</p><br/>"+"Car at First index of teh array:"+favCars [0]+"<br/>"+"Last index of the Array:3 <br/>"+"Car at Last index of the Array:"+favCars[3]);*/

/*Q11*/
/*let names= ["Saad","Shayan","Ali","Sohaib"];
let marks= [320,230,480,300];
document.write("Score of"+names[0]+" is"+marks[0]+".percentage:"+marks[0]/500*100+"%"+"<br/>"+"Score of"+names[1]+" is"+marks[1]+".percentage:"+marks[1]/500*100+"%"+"<br/>"+"Score of"+names[2]+" is"+marks[2]+".percentage:"+marks[2]/500*100+"%"+"<br/>"+"Score of"+names[0]+" is"+marks[0]+".percentage:"+marks[3]/500*100+"%");
*/
/*Q12*/
/* let color = ["red", "green", "blue", "yellow", "pink" ];
let userChs = prompt("Enter your choice of color");
let index =+prompt("choice of  index to replace")
color.splice(index,0,userChs);
console.log(color); */
/* let color = ["red", "green", "blue", "yellow", "pink" ];
let index =+prompt("choice of  index to delete");
let index2 =+prompt("how items you wants to delete");
color.splice(index,index2);
console.log(color); */
/*let newColor1 =prompt("Tell the color that you wants at beginning");
let newColor2 =prompt("Tell the color that you wants at beginning");
let newColor3 =prompt("Tell the color that you wants at beginning");
let endColour =prompt("tell the colour that you wants to add at last");
color.unshift(newColor1);
color.shift(newColor1);
color.unshift(newColor2);
color.unshift(newColor3);
color.push(endColour);
color.pop(endColour);
document.write(color);
*/
/*color.splice(2,2,"purple","orange");
console.log(color);*/

/* clr2=color.slice(2,4);

console.log(clr2); */
/* -----------------------------------xxxxxx----------------------------------- */
/*(Extra-----Work)*/
/* Palindrome program */
/* let Name="madam";
let revName=Name.split("");
let revName2=revName.reverse();
let revName3=revName2.join("");
if(revName3  ===  "madam"){
    console.log("Name is a palindrome");
}
else{
    console.log("Name is not a palindrome");
}   */
/*Q13*/
/* let stdScores = [320,230,480,120];
stdScores.sort();
console.log(stdScores); */

/*Q14*/
/* let fruits = ["strawberry","apple","orange","banana"];
let fruits2 = fruits.slice(1,3);
let fruits3 = fruits.join("");
let fruits4=fruits3.toLocaleUpperCase();
fruits.sort();

console.log(fruits2,fruits2,fruits3,fruits4);
 */

/* let userName = prompt("Enter your username");
let frstLt = userName[0];
frstLt = frstLt.toLocaleUpperCase();
let lstLt = userName.slice(1);
lstLt = lstLt.toLocaleLowerCase();
let titleLt = frstLt+lstLt;
console.log(titleLt); */

//Q15
/* 
let cities =  ["Karachi","Islamabad","Multan","Lahore"];
let yourCity = prompt("Enter your city name");
if (cities === cities.indexOf(yourCity.toLocaleUpperCase)){
    console.log("You lives in a clean city");
}
else{
    console.log("You lives in Another city");
} */


//Q16

/* let arr = ["This","is","my","cat"];
let arr2 =arr.join();
console.log(arr2); */

//Q17 + Q18

/* fifo = [];
lifo = [];
let frst = prompt("Enter your fisrt element name");
let scnd = prompt("Enter your scnd element name");
let thrd = prompt("Enter your thrd element name");
let fort = prompt("Enter your fort element name");

fifo.push(frst);
fifo.push(scnd);
fifo.push(thrd);
fifo.push(fort);

//or 

 lifo.unshift(frst);
lifo.unshift(scnd);
lifo.unshift(thrd);
lifo.unshift(fort);

console.log(lifo);
console.log(fifo);
 */

//Q19
// let phones = ['apple', 'samsung', 'oppo'];
// let ele = `
// <select>
//     <option>${phones[0]}</option>
//     <option>${phones[1]}</option>
//     <option>${phones[2]}</option>
// </select>
// `;

//Q20
let arr = [];
let arr2 =[];
let arr3 = [];
let num1 = +prompt("Enter the value of num1");
let num2 = +prompt("Enter the value of num2");
let num3 = +prompt("Enter the value of num3");
let num4 = +prompt("Enter the value of num4");

arr.push(num1);
arr.push(num2);
arr.push(num3);
arr.push(num4);
arr2= arr.slice(0)
arr2.reverse();
arr3= arr.slice(0)
arr3.reverse();
console.log(arr);
console.log(arr2);
console.log(arr3);



