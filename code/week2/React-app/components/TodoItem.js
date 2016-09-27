
import React, {Component, PropTypes} from 'react';

class TodoItem extends Component {
    render() {
        return (
            <div className="view">
                <input type="checkbox" className="toggle"/>
                <label>Item-1</label>
                <button className="destroy"></button>
            </div>   
        );
    }
}

export default TodoItem;