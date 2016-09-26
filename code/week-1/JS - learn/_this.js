


// 'this' keyword


// var person={
//     pname:'Nag',  // obj's property
//     sayName:function(){
//         //console.log('im '+ pname);
//         //console.log('im '+person.pname); // to access obj's priperty we need reference'
//         console.log('im '+this.pname);
//     }
// };

// //person.sayName(); // New - context

// var p=person;
// person={pname:'Ria'};
// p.sayName();  // expected ' im Nag '

//----------------------------------------------



// var p1={name:'Nag',sayName:function(){console.log('im '+this.name)}};
// var p2={name:'Ria',sayName:function(){console.log('im '+this.name)}};


function sayNameForAll(){
    console.log('im '+this.name);
}

var p1={name:'Nag',sayName:sayNameForAll};
var p2={name:'Ria',sayName:sayNameForAll};

// sayNameForAll(); // im ''  , function-invocation  ( context owned by 'global-obj')
// p1.sayName();  // im Nag   , method-invocation    ( context owned by 'invkoer-obj')
// p2.sayName();  // im Ria

//-------------------------------------------------


// i need many similar (like persons) objs JS-lang

/*
 syntax to create object

 var ref=new ConstructorFunction();

*/

// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     this.sayName=function(){
//         console.log('im '+this.name);
//     }
//     this.sayAge=function(){
//         console.log('im '+this.age);
//     }
// }

// var p1=new Person('Nag',32); // constructor invocation ( context owned by new-obj)
// var p2=new Person('Ria',1);

//------------------------------------------------


// your code + others code

var personService={
    sayName:function(message,from){
        console.log(message+ ' im '+this.name+" : "+from);
    },
    sayAge:function(){
        console.log('im '+this.age);
    }
};

//-------------------------------------------------


// Loaded some some person data from server-side

var p1={name:"Nag"};
var p2={name:"Ria"};

// Object.defineProperty(p1,'name',{writable:false});
// Object.preventExtentions(p1);
// Object.seal(p1);
// Object.freeze(p1);

//-------------------------------------------------

// dymanic method binding

// personService.sayName.call(p1,"Hello","CHN");
// personService.sayName.call(p2,"Hi","BLR");

// personService.sayName.apply(p1,["Hello","CHN"]);
// personService.sayName.apply(p2,["Hi","BLR"]);


var newF=personService.sayName.bind(p1);

// on-event
newF('Hello','IND');

// ----------------------------------------------

/*

in JS , can invoke functions in 4 ways

1. function invocation   ( this ---> global-obj )
2. method invocation     ( this ---> invoker-obj )
3. constructor invocation ( this --> new-obj )
4. call/apply/bind invocation ( this ---> arg-obj)


*/
