
// (function(){
//     var o={
//         doWork:function(){
//             console.log('B work...');
//         }
//     };

//     App.b = o; // export    

//  })();
 


//----------------------------------------------
 

define('js/b', [], function () { 
    
    var i = 100;

    var o = {
        doWork:function(){
            console.log('B work...');
        }
    };

    return o;

});

//----------------------------------------------

