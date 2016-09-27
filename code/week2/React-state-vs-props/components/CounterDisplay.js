import React, {Component} from 'react';


class CounterDisplay extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {  };  // initial state...
    }

    render() {
        console.log('App.render()');
        return (
            <div>
                
                {this.props.count = 100 } <br/>

                count: {this.props.count }
                
            </div>
        );
    }
}

export default CounterDisplay;