var a;
var a;
let b;
// const c;
const d = 1;
var a = 10;
a = 20;
let bb = 3;
bb = 6;
const s = 7;
{
    // let ab = 10;
    var  ab = 40;
    let cb = ab+20;

}
let ddd = ab+30;
console.log(ddd);
console.log(ddd,ab,bb);

Math object :

let a = 10.5;
console.log(Math.round(a));
console.log(Math.floor(a));
console.log(Math.ceil(a));
console.log(Math.random());
console.log(Math.random()*10);
let randomVal = Math.random()*10;
console.log(Math.round(randomVal));
console.log(Math.round(Math.random()*(10-5))+5);
let str = "hiii";
let str1 = "hlooo";
let str2 = 'jii ${here we have to write the code of js...only excecuting things we done here...}';
let str3 = `hyyy ${a}`;
console.log(str3);
let ran = `random no. = ${Math.random()}`;
console.log(ran);

let s = "hy how are you !";
console.log(s.trim());
let newStr = s.includes("is a");
console.log(newStr);
newStr = s.indexOf("hy");
console.log(newStr);
newStr = s.replace("hy","hlo");
console.log(newStr);
let date = "24-10-2024";
newStr = date.replaceAll("-","/");
console.log(newStr);
newStr1 = s.slice(5,9);
console.log(newStr1);
newStr1 = s.substr(3,5);
console.log(newStr1);
newStr1 = s.toLocaleLowerCase();
console.log(newStr1);
newStr1 = s.toUpperCase();
console.log(newStr1);
newStr1 = s.split("o");
console.log(newStr1);
let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr);
let lastelement = arr.pop();
console.log(lastelement);
let newStr1 = arr.unshift(10);
console.log(newStr1);
newStr1 = arr.shift(10);
console.log(newStr1);

let a = [1,2,3,4,5,6,7,8,9,10];
a.splice(5,2);   // two times deletion...
console.log(a);
// add and delete at a index...
a.splice(5,2,10);
console.log(a);
let b = [1,2,3,4,5,6,7,8,9,10];
let arrStr = b.join("-");
console.log(arrStr);

// loop :
for(let ele of a){
    console.log(a);
}
for(let key in b){
    console.log(`element at ${key} is ${b[key]}`);
}
let obj = {
    name:"john",
    age:30,
    work:"doing"
}
console.log(obj.name);
console.log(obj["name"]);

let key = "name";
console.log(obj[key]);
console.log(obj.key);

for(let key in obj){
    console.log(`${key} -> ${obj[key]}`);
}

// JSON //...
let complexObj = {
    name : {
        firstname : "teena",
        lastname : "sharma"
    },
    work : "doing",
    age : 67,
}
console.log(complexObj.name.lastname);

// functions : 

function first(a,b){
    let c = 10;
    // return a+b;
    return 5;
}
let result = first();
console.log(result);
