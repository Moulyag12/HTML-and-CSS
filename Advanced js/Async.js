//Callback concept

// function doAsyncTask(cb){
//     cb()
// }          
// doAsyncTask(()=> console.log(message));
// let message="CallBack called";                     //output -- reference error cannot access "message"

function doAsyncTask(cb){
    setTimeout(cb,0);
}
doAsyncTask(()=>console.log(message));
let message="CallBack called";               //output -- CallBack called


//How to handle errors in callBacks
 function doAsyncTask(cb){
    setTimeout(()=>{
        cb("Error!");
    },0)
 }
 doAsyncTask((err,data)=>{
    if(err){
        console.log("It is error");   
    }else{
        console.log(data);
    }
 })                                      //output -- It is error



 //CallBack Hell
 function doAsyncTask(cb){
    setTimeout(()=>{
        console.log("Hello");
        cb();
    },0)
 }
 doAsyncTask(()=>{
    doAsyncTask(()=>{
        doAsyncTask(()=>{
            doAsyncTask(()=>{
                doAsyncTask(()=>{
                 doAsyncTask(()=>{

                 })
                })
            })
        })
    })
 })                  // output-- It prints 6 times hello


 //What are promises? Mostly it helps to solve callback hell

 function doAsyncTask2(){
    const promise=new Promise((resolve,reject)=>{
        console.log("Asyn work called");
        resolve()
    });
    return promise;
 }                                                    //output -- Async work called
 doAsyncTask2().then(()=>console.log("Task message"));//output -- Task message

 function doAsyncTaskval(){
    const promise = new Promise((resolve,reject)=>{
        console.log("AsyncTaskval called");
        if(false){
            resolve("correct");
        }else{
            reject("Error");
        }
    });
    return promise;
 }                                                                                   //output -- AsyncTaskval called
 doAsyncTaskval().then((val)=>console.log("Task completed"),(err)=>console.log(err));//output -- Error

 //To make callback Asynchronous we have wrap with setTimeOut()
 function doAsyncT(){
    return Promise.resolve();
 }
 doAsyncT().then(()=>console.log(val));
 let val="Promise called";

 //Promise are asynchronous by default

 //chain Promises together
 Promise.resolve("done").then(val =>{
    console.log(val);
    return new Promise(resolve =>{
        setTimeout(()=>resolve("done2"),1000);
    });                          //output -- done
 }).then(val=>console.log(val));   //output -- done2
//    console.log("***********");
 //async and await how it is different from promises

 //condition 1 == without async and await
 const doAsyncTask6=()=>Promise.resolve("welcome done");
 doAsyncTask6().then(val => console.log(val));      //here
 console.log("here");                                //welcome done

//condition2 == with async and await 
 const doAsyncTask7=() =>Promise.resolve("inside doAsyncTask7");
 async function asim(){   
   let value=await doAsyncTask7();
    console.log(value);
    console.log("done22")
 }                                      
                                             //inside doAsyncTask7
asim();                                        //done22


const doAsyncTask9=() =>Promise.resolve("inside doAsyncTask9");
(async function(){
   let value=await doAsyncTask9();
     console.log(value);
      console.log("done345");               //inside doAsyncTask9
})();                                         //done345

const doAsyncTask1=() =>Promise.reject("Error");
const asyncFunction = async function(){
   try{
      const value=await  doAsyncTask1();
   }catch(e){
                  console.log("it is",e);
                  return;
   }
};
asyncFunction();                                //It is error