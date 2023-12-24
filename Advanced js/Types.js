//What are the different types in javascript

/*Boolean // true or false
Number //0 or 1
String //"a" ,'a'
Null //null
Undefined // undefined
Object // new Object()
*/

console.log(typeof(1));
console.log(typeof('a'));
console.log(typeof(true));
console.log(typeof(undefined));
console.log(typeof(null));
console.log(typeof({}));


/*Javascript is a dynamically typed language example:*/
var a='orange';
console.log("Dynamically typed language");
console.log(typeof(a));
a=1;
console.log(typeof(a));
console.log(null == undefined);


/*different between == and === ?
   '==' indicates equality
   '===' indicates strict equality
   */
  console.log(0 === 0);       //true
  console.log('' === '0');   //output:false
  console.log('' == '0');   //output: false
  console.log(0 === '0');   //output: false
  console.log(0 == '0');   //output: true


  /*what is NaN how to check*/
  console.log(typeof(NaN));   // output: number
    