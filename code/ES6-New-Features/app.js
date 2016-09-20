

// function Person(name,age) {
//     this.name = name;
//     this.age = age;
  
//     // var self = this;

//     // setInterval(function () { 
//     //     self.age++;
//     //     console.log(self.name+":"+self.age);
//     // },1000);    

//     setInterval(() => { this.age++;console.log(this.name+":"+this.age);},2000);

// }

// var p = new Person('ria',0);

//-------------------------------------------------------


//  ES-5

// function func(param1=0) {
   
//     // if (!param1) {
//     //     param1 = 0;
//     // }
    
//     //param1 = param1 || 0;

//     console.log(param1);
// }

// func(123);
// func();

//-------------------------------------------------------


// var nums = [12,13,14,15,16];

// // let max = Math.max(12, 13, 14);
// //let max = Math.max(nums[0], nums[1], nums[2]); // manual spreading
// let max = Math.max(...nums);
// console.log(max);

// let arr1 = [4, 5, 6];
// let arr2 = [0, 1, 2, 3, ...arr1, 7, 8, 9, 10]


// let maxCode = Math.max(..."2342344324");

//-----------------------------------------------


// var a = 12;
// var b = 13;

// // var obj = {
// //     a: a,
// //     b: b
// // };

// // es6

// var obj = { a, b }


// let person = {
//     name: 'Nag',
//     sayName() {
//         console.log('im......');
//     }
// };

// person.sayName();

//---------------------------------


// var prop = 'dynamic';


// var o = {
//     [prop+'prop-1']: 123,
//     ['my function']() {
//         console.log('....');
//     }
// };

// o['my function']()

//---------------------------------


// var codes = "ABCD";

// for (let code of codes) {
//     console.log(code);
// }


//-----------------------------


// var person = { name: 'Nag' };

// //var message = "Name :" + person.name;
// // var message = `Name : ${person.name}`;  

// // var multiLineString = "<div>" +
// //                          "<h1> JS </h1>" +
// //                        "</div>"
// var sub = 'JS';                       
// var multiLineString = `
//     <div>
//         <h1> ${sub} </h1>
//     </div>
// `;

// console.log(multiLineString);


//-------------------------------------------

// let salary = ['32000', '50000', '75000'];

// // let low = salary[0];
// // let avg = salary[1];
// // let high = salary[2];

// let [low, avg, high] = salary;

//-------------------------------------------


// ES-5

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.sayName = function () {
    
// }

// Es-6
class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayName() {
        
    }
    static staFunc() {
        
    }
}


var p = new Person('nag', 32);
p.sayName();

Person.staFunc();
//----------------------------------------