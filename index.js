/*// Exercise 1
function myNumber(num) {
    return num * num;
};
console.log(myNumber(3));

// Exercise 2
var x = 'hello';

function funReverse() {
    var rev = '';
    for (var i = x.length - 1; i >= 0; i--) {
        rev += x[i];
    }
    return rev;
};
console.log(funReverse());

// split() - split a string into an array of substrings
// reverse() - reverse the order of the elements in an array
// join() - convert the elements of an array into a string

// Exercise 3
var fun = function() {
    return 'Hello my name is Nelly';
};
console.log(fun());

// Exercise 4
(function() {
    return 18;
})();

// Exercise 5
(function() {
    console.log('Hello my name is John');
})();

// Exercise 6
function maxNumber() {
    return Math.max(10, 5, 8, 9, 24, 26, 30, 1, 2, 3);
};
console.log(maxNumber());

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(undefined == NaN); // false
console.log(undefined === NaN); // false
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(NaN == null); // false
console.log(NaN === null); // false

var fruits = ["Banana", "Orange", "Apple"];
fruits.splice(1, 2);
console.log(fruits);

// Uncaught TypeError: myFunction is not a function
var myFunction = function() {
    console.log('inside myFunction');
};
myFunction();

var x = 8;
var x = 10;
console.log(x);

function myFun(num1, num2 = num1) {
    return num1 + num2;
};
console.log(myFun(10));

console.log(typeof typeof 1);

var person = {
    name: 'jone',
    age: 35
};
var city = person.city = 'amsterdam';
//city = 'amsterdam';   //not rigth
console.log(person);

function createCounter() {
    var counter = 0
    var myFunction = function() {
        counter = counter + 1
        return counter
    }
    return myFunction
};
var increment = createCounter();
var c1 = increment();
var c2 = increment();
var c3 = increment();
console.log('example increment', c1, c2, c3);

var tex = [];

for (var i = 2; i < 100; i++) {
    if (i % i !== 0) {
        tex += [i] + ', ';
    };
};
console.log(i);

var tex = [1, 2, 3, 5, 7, ''];
for (var i = 7; i < 100; i++) {
    if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
        tex += [i] + ",";
    };
};
console.log(tex);


let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};

// The function to do the job
function sumSalaries(department) {
    if (Array.isArray(department)) { // case (1)
        return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
    } else { // case (2)
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
        }
        return sum;
    }
}
console.log(sumSalaries(company));

function sum(num) {
    if (num == 0) return 0;
    return num + sum(num - 1);

};
console.log(sum(100));

function factorial(x) {
    if (x == 0) return 1;
    return x * factorial(x - 1);
};
console.log(factorial(5));

function myFun(){
    var x = 9;
    console.log(x);   // local scop;
};

myFun();

var x = function(){
    console.log(y); // underfind
    var y = 1;
    console.log(z); // not difaynd
};
x();

var x= function(){
    if(true){
        var y = 1;
    }
    console.log(y);
};
x();

hosting(); // miayn anunov funqcianern en linum hosting;
function hosting(){
    var hoist = 'hellooooo';
    console.log(hoist);
};

x = 10;
console.log(x);
var x;

var name = 'aghas';
function myFun(){
    return 'hello ' + name;
};
name = 'ani';
console.log(myFun());
    }
}
// closer-@ funqcia e, vor@ uni hasaneliutyun iranic durs gtnvox popoxakanneri ev funkciayi popoxakannneri nkatmamb;

function runExpression(){
    var a = 10;
    function add(){
        var b = 100;
        return a + b;
    }
    return add()
};
console.log(runExpression());

function makeGreeting(){
    var name = 'Hovo';
    function greeting(pname){
        return 'hello ' + pname + ' my name is ' + name;
    }
    return greeting;
};
var newGreeting = makeGreeting();
console.log(newGreeting('Ani'));

var  x = 'hello';
function myFunction(){
    var y = x + ' world';
    return y;
};
console.log(myFunction());


function byeName(){
    var z = 'bye';
    function myf(){
        var m = 'vars ' + z + name;
        return m;
    };
    var name = ' bysh';
    return myf();
};
console.log(byeName());

var vars = 10;

function varsFun(){
    return x = vars * 10 / 5 + srav;
};
var srav = 2;
console.log(varsFun());

var dragon = function(name){
    return function(size){
        return function(element){
            return name + size + element;
        }
    }
};
console.log(dragon('kiki')('vivki')('niki'));
// rekrsian funkciaya vor@ inqn iren e kanchum.
// linum e base case ev recursive case;

function countDown(num){
    if(num === 0) return;
    console.log(num);
    countDown(num -1);
};
countDown(10);
var obj = {};   // 1
var person = new Object();    //2
var pers = Object.create(null);  // 3

var user = {
    fname: 'Varsine',
    lname: 'poghosyan',
    fullname: function(){
        return this.fname + ' ' + this.lname;
    }
};
console.log(user.fullname());

var dog = {
    name: 'jeko',
    age: 20
};
 for (var elem in dog){
     console.log(elem + dog[elem]);
 };
delete dog.name; // delete key
dog.heir = 'pink'; // add key
console.log(dog);

var user = {
    name: 'varsine',
    gmail: 'varsulmozg@gmail.com',
    login:  function(){
        if( this.gmail == true){
        return 'lod in';
        }
    },
    logout: function(){
        if(this.gmail == false){
        return 'lod out';
        }
    }
};
console.log(user);

var x= 2;
var y = x;
x = 10;
console.log(y); // 2*/

/*var numbers = [175, 50, 25, 1, 52, 6, 8];
var d = Array.from('25616');
console.log(d);
var d = Array.from(25616);
console.log(d);
var fruits = ["Banana", "Orange", function() { return hello; }, null, undefined, 1, Boolean];
var m = fruits.join(myFun);

function myFun() {
    return hello;
};


var arr = [
    { name: 'vars', lname: 'pogh' },
    { name: 'smb', lname: 'badal' },
    { name: 'mane', lname: 'badal' },
    { name: 'raf', lname: 'badal' }
];

function full(item) {
    var fullname = [item.name, item.lname].join('');
    return fullname;
};
console.log(arr.pop());
var bar = Array.from('1245');
var hey = bar.keys();
for (m of hey) {
    console.log(m * 2 + " kg apple.");
};

var obj = {
    name: 'vars',
    lname: ' pogh',
    full: function() {
        return this;
    }
};
console.log(obj.full());

"use strict"
var x = this;
console.log(x);

function myf() {
    "use strict"
    return this;
};
console.log(myf());


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries() {
    var sum = 0;
    for (var x in salaries) {
        sum += salaries[x];
    }
    return sum;
}

console.log(sumSalaries());
var user = {
    name: 'John',
    age: 30
};

function conn() {
    return Object.keys(user).length;
};
console.log(conn());

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
);*/
// var btn = document.getElementById("btn");
// var scr = document.getElementById("scr");
// btn.addEventListener("click", function() {
//     var s = document.createElement("script");
//     s.src = "https://jsonplaceholder.typicode.com/photos";
//     document.body.appendChild(s);
//     myFunc(this);
// })

// function myFunc(myObj) {
//     document.getElementById("info").innerHTML = myObj.title;
// }


var srt = "how are you";
var patt = /o/;
var res = patt.exec(srt);
console.log(res[1] + res.index + res.input);
document.write(res);
var str = "Every man in the world! Every woman on earth!";
var pop = /man/g;
var pat = str.replace(pop, "person");
pop = /(wo)?man/g;
pop.compile(pop);
pat = str.replace(pop, "person");
console.log(pat);
console.log(pop.toString());

console.log(typeof typeof 1);

console.log("string");
