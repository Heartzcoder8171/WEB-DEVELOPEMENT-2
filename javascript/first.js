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


let ans1 = arrow(5,10);
console.log(ans);
const arrow = (a,b) =>{
    console.log("arrow function");
    return a+b;
}

// hoistiong question :

let result2 = fun1(b,8);
console.log(result2);
console.log(b);
var b = 10;
function fun(x,y){
    return x+y;

}
let ans2 = fun1(b,5);
console.log(ans2);  // ans2 = 15...

// let a;
console.log();  // undefined..
console.log("29"+10); // 2910... concat...

let a;
let ans = fun();
console.log(a);
a=10;
console.log(ans);
function fun(){
    let b = 20;
    console.log(b);
    return "hoistiing";
}
console.log(b);

// let a = 10;

if(a=="10"){
    console.log(true);
}
else{
    console.log(false);
}

if(a==="10"){
    console.log(true);
}
else{
    console.log(false);
}
let a1 = 20;
if(a1=="20" || a1==="20" && a1==100/10 && 1000/10){
    console.log(true);
}
else{
    console.log(false);
}

a==="20"?console.log(true):console.log(false);

let ans3 = a=="10"?(a==="10"?"string":"number"):"not equal";

let d = prompt("enter number");
console.log(d);

// check if num is +ve , -ve , string ?

function checkInput(input) {
    // method-1 :

    if (typeof input === 'number') {
        if (input > 0) {
            console.log("positive number");
        } else if (input < 0) {
            console.log("negative number");
        } else {
            console.log("zero");
        }
    } else if (typeof input === 'string') {
        console.log("string");
    } else {
        console.log("not recognized");
    }
} 
// method-2 :
let c = d==0?"0":(d<0?"-ve":(d>0?"+ve":"string"));




console.log("test",0<"10t"); 
function cb(){
    console.log("callback function executed");
    return " return from cb";
}
 function higher(callback){
    let result = callback();
    console.log(result);
    console.log("higher order function");
    return "higher order function"
 }

 console.log(higher(cb));

function figure2(){
    console.log("figure2 executing");
    return function(){
        console.log("figure2 callback executed");
        return "callback function";
    }
}

let result1 = higher2();
console.log(result1);

let arr=[1,2,3,4,5];
function square(x){
    return x;
}

let sqrarr = arr.map(square);
console.log(sqarr);
console.log(arr);

function mapOverview(arr,cb){
    let a = [];
    for(let ele of arr){
        a.push(cb(ele));
    }
    return a;
}
mapOverview(arr,square);
console.log(arr);
console.log(sqarr);


let sqarr = arr.map((ele)=>{
    return ele*ele;
})

const even = arr.filter((ele)=>{
    return ele%2;       
})
const even1 = arr.filter((ele)=>{
    return !(ele%2);
})

arr = [1,2,3,4,5];
let total = arr.reduce((accum,ele)=>{
    return accum+ele;
},0);

let foundEle = arr.find((ele)=>{
    return ele%5;
})

let sorted = arr.sort();
console.log(sorted);

console.log("start");
settimer(()=>{
    2000});
    console.log("end");

setInterval(()=>{
    console.log("setinterval");
2000})

