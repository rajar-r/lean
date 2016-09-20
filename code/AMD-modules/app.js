

//console.log('app.js');

// a.js

// App.a.doWork();   // A work

//-------------------------------------------


require(null, ['js/a','js/b'], function (a,b) { 

    a.doWork();    
    b.doWork();

});

//---------------------------------------------