
// using DOM API

//-----------------------------------------------------

// plain-JS

// document.addEventListener('DOMContentLoaded', function (event) { 

//     console.log('DOM Ready..');
    
//     // find elements  
//     var box = document.querySelector('.jumbotron');
//     var hideBtn = document.querySelector('.btn-danger');
//     var showBtn = document.querySelector('.btn-primary');

//     // bind event listeners and update element's style

//     hideBtn.addEventListener('click', function (event) { 
//         // console.dir(event);
//         box.style.display = 'none';
//     });

//     showBtn.addEventListener('click', function (event) { 
//         // console.dir(event);
//         box.style.display = '';
//     });
    
// });

// window.onload = function () {  // this event will fire after all stylesheet,images,frames are loaded into browser
//     console.log('Loaded..');
// }

//-----------------------------------------------------------------------------------

// using jQuery

/*

jQuery(selector,context)
.action1()
.action2();

*/

$(document).ready(function (e) {

    var $box = $('.jumbotron');
    var $hideBtn = $('.btn-danger');
    var $showBtn = $('.btn-primary');

    $hideBtn.click(function () { 
        $box.hide();
    }); 
    $showBtn.click(function () { 
        $box.show();
    }); 


//-----------------------------------------

    var $userName = $('#userName');
    var $span = $('.badge');

    var user = { name: '' };  // View-Model

    $('#userBtn').click(function () { 
        // loader data from server
        user.name = 'Nagabhushanam';
        doDataBinding();
    });    

    $userName.on('keyup', function () { 
        user.name=$userName.val()
        doDataBinding();
    });

    function doDataBinding() {
        $span.text(user.name);
        $userName.val(user.name);
    }

    doDataBinding();

//-----------------------------------------------------------------------------------

  // using KO

    // Model
    var user = { name: 'Nag' };  // loaded from server-side
    

    // View-Model
    function UserViewModel(user) {
        var self = this;
        self.userName = ko.observable(user.name);
        self.loadUser = function () {
            // load user from server-side
            self.userName('Nagabhushanam');
        }
    }

    var vm = new UserViewModel(user);
    console.log(vm);

    // bind ViewModel to View
    ko.applyBindings(vm,document.getElementById('ko_box'));


});    

