
// (function(){
//     var o={
//         doWork:function(){
//             console.log('C work...');
//         }
//     };

//     App.c = o; // export    

//  })();
 

 //----------------------------------------------


define('js/c', [], function () { 
    
    var i = 100;

    var o = {
        doWork:function(){
            console.log('C work...');
        }
    };

    return o;

});

//----------------------------------------------