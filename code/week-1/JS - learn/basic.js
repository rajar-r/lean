
"use strict";

// var v = 12;

// function f1() {
//     function f2() {
//         console.log(v);
//     }
//     //f2(); // f2-context  --> f1-context
//     var v = 13;
//     return f2;
// }

// var f2FuncRef = f1();  // f1-context  --> global-context

// f2FuncRef(); // f2-context  --> f1-context


//----------------------------------------------


var v = 12; /// global scope

function f() {
    
    var x = 123; // function scope

    {
        var y = 13; // block-scope
    }

    console.log(y);

}

// f();

//----------------------------------------------

// ES-5 , No due tohoisting , no block scoped variables 

//-----------------------------------------------


// var productId = 12;
// var i = 100;

// {
//     //console.log(productId);
//     let productId = 13; // block scoped var
//     console.log(100);
// }

// console.log(productId);

//-----------------------------------------------

// var updateFunctions = [];

// for (let i=0; i < 2; i++){
//     updateFunctions.push(function () { return i});
// }

// var v = updateFunctions[1]();
// console.log(v);

//-----------------------------------------------


// var PI = 3.14;
// Object.defineProperty(window, 'PI', { writable: false });



// Es6

// const PI = 3.14;  // will not hoisted


//-----------------------------------------------


// function f() {
//     var i = 123;  // implicit global
//     console.log(i);
// }

// f();

//console.log(i);

//-----------------------------------------------
