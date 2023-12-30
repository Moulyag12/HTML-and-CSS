"use strict"
/*Different scopes in Javascript */
/*two types of scopes one is global scope and one more is function scope*/
{
    var a="block";
}
console.log(a);  // output:block

{
    let b="block";
}
console.log(b); //output: reference error b is not defined

{
    const c="block";
}
console.log(b); //output: reference error c is not defined

{
    const a="block";
    {
        console.log(a);
    }
    a="moo"; // you cannot reassign const 
}
console.log(a);

for(let i=0;i<5;i++){
    console.log(i); //0 1 2 3 4 
}
console.log(i);  // referenceError:i is not defined

for(var i=0;i<5;i++){
    console.log(i); // 0 1 2 3 4 
}
console.log(i); //5

//what is variable hosting? Answer:automatic declaration of hosting the variable to the top of its enclosing scope
console.log(k);  //undefined
var k=1;

foo();
function foo(){
    var p;
    console.log(p);  // undefined
    p=1;
}
var poo;
poo();
poo=function(){
    var g;
    console.log(g); //poo is not a function
    g=1;
}

//what is a function scope or scope chain : the way program is written in a file
function foo(){
    console.log(myvar);  //myvar is not defined
 }
function goo(){
    var myvar=1;
    foo();
}


var myvar=1;
function goo(){
    function moo(){
        console.log(myvar); // 1
    }
    moo();
}
goo();

//what is IIFE(Immediately invoked function expression)? Answer: It is a function that runs the moment it is invoked or called in Javascript event loop.
//main.js
(function(){
    var thing={'hello':'main'};
    console.log("main:",thing);     //main: Object{hello:"main"};
})();

//other.js
(function(){
    var thing={'hello':'other'};
    console.log("other:",thing); //other: Object{hello:"other"};
})();

