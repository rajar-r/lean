import React, {Component} from 'react';


import CountResult from './CountResult'
import HitButton from './HitButton'

class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = { count: 10 };
    }

    doHit() {
        this.setState({ count: ++this.state.count});
    }

    render() {
        return (
            <div>
                <HitButton clickHandler={this.doHit.bind(this)}/>
                <hr/>
                <CountResult count={this.state.count}/>                
            </div>
        );
    }
}

export default App;