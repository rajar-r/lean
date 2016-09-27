
"use strict";


// e.g Counter Appln


// Action(s)

// a. Increment

    /*
    {
        type:'INCREMENT'
    }
    */

// b. Decrement

 /*
    {
        type:'DECREMENT'
    }

*/



function createStore(reducer) {
    let state = 0;
    const getState = () => state;
    const dispatch = (action) => { 
        state = reducer(state,action);
    }
    return {
        getState,
        dispatch
    }
}

// redcucers --> functions to process actions
function reducer(state,action) {
    if (action.type === 'INCREMENT') {
        return state + 1;
    }if (action.type === 'DECREMENT') {
        return state - 1;
    }
    else {
        return state;
    }
}



var store = createStore(reducer);

// clicks '+'

const incAction = { type: 'INCREMENT' };
store.dispatch(incAction);
store.dispatch(incAction);
store.dispatch(incAction);


const decAction = { type: 'DECREMENT' };
store.dispatch(decAction);

console.log(store.getState());


