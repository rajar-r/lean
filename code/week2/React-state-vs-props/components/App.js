import React, {Component} from 'react';
import CounterDisplay from './CounterDisplay'


class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = { count: 10 };  // initial state...
    }

    doHit() {
        console.log('Hit...');
        this.setState({ count: ++this.state.count});
    }

    render() {
        console.log('App.render()');
        return (
            <div>
                <button className="btn btn-lg btn-danger" onClick={this.doHit.bind(this)}>
                   Hit
                </button>

                <CounterDisplay count={this.state.count}/>                

            </div>
        );
    }
}

export default App;