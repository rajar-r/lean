import React, {Component} from 'react';


class CountResult extends Component {
    
    render() {
        return (
            <div>
                count: <span className="badge">{this.props.count}</span>
            </div>
        );
    }
}

export default CountResult;