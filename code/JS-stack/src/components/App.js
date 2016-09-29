

import React from 'react';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            messages: [
                'hello , how are you',
                'im fine , and you',
                'wru..',
                'im in bengalore'
            ]
        };
    }

    render() {
        //debugger;
        var messageNodes = this.state.messages.map((message,index) => { 
            return (
                <div key={index}>
                    {message}
                </div>  
            );  
        });
        
        return (
            <div>
                {messageNodes}  
            </div>    
        );

    }

}

export default App;