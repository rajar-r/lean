



window.onload = function () {

    var i = 100;

    document.addEventListener('click', function () { 
        console.log('i-'+i);
    });

};



/*

A closure is a function ( inner function ) having access to the parent scope,
even after the parent function has closed.

why we need ?  advantages of closures ?

--> to abstract public-behav of any module.
--> to support asynchronus programming.

*/

function doTeach(sub){

    console.log('teaching begins....');
    console.log('teaching '+sub);
    let notes=sub+" notes";

    function doLearn(){
        console.log('learning with '+notes);
    }

    //doLearn();

    console.log('teaching end....');

    return doLearn;

} // context destroyed...

var learnFunc=doTeach('JS'); // New-context with args and locals
learnFunc();
learnFunc();

// //--------------------------------------------------






// closure use[-1] :

// e.g counter-module


// function init(){
    
//     var count=0;  // private

//     // public ( closures of init())
//     return{
//         doCount:function(){
//             count++;
//         },
//         getCount:function(){
//             return count;
//         }
//     };

// }

// const counter=init();

//-------------------------------------


// pattern : IIFE or self executable function to avoid globals to make modules

// const counter=(function(){

//     var count=0;  // private

//     // public ( closures of init())
//     return{
//         doCount:function(){
//             count++;
//         },
//         getCount:function(){
//             return count;
//         }
//     };

// })();

//------------------------------------------------


// closure use-2


// (function(){

//     let count=0;

//     setInterval(function(){
//         count++;
//         console.log(count);
//     },1000);

// })();

//------------------------------------------------