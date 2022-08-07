// // ugly way of doing callbacks 


// // setTimeout(a, 1000);

// // function glueAandB(){
// //     b();

// // }



// // function a (){
// //     console.log("function a");
// //     setTimeout(b,1000);
// // }
// // unction b(){
// //     console.log("function b");
// //     setTimeout(c,1000);
// // }
// // unction c(){
// //     console.log("function c");
// //     setTimeout(d,1000);
// // }
// // unction d(){
// //     console.log("function d");
// //     setTimeout(d,1000);
// // }

// // function a(o)// action a

// // function b()

// //-------------------------------------------------
// function callbackFunction(){
//         console.log("this is called later");
// }

// setTimeout(callbackFunction, 1000);
// //---------------------------------------------------


// // XTMLHTTPREQUEST -- an old schoool way to use callbacks 

// let promise = timeoutWithPromise(1000);

// // this hypothetical function does not take a call bac
// // so how would this work

// // this returns a promise to do something that is special

// promise.then(callbackFunction); 

// // a promise is  arepresentation of some event that will happen
// // or some cases may even have already happened


// // as such cases a promise can have three states
// // 1. pending --- meaning the event has yet to happen
// // 2. fulfilled === event has happened
// // 3. reject ---- event failled

// // if you have a promise object.. you can register 
// // callbacks on that promise for when the event is fulfield
// // or when the event is rejected



// promise.then(callback);// registers a callback to be called when  event is fulfilled
// promise.catch(someCallback); // register "somecallback" to be called when event fails 


// exmaple that works

let promise = fetch("https://javascript.info/artic/promise-chaining/user.json");

promise.then(function(response)




















