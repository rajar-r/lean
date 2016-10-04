
var initialState = [
        'Hello',
        'Ola'
    ]


export default function manageMessages(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case 'SEND_MESSAGE':
            return [
                action.message,
                ...state
            ]
        default:{
            return state;
        }    
    }

}