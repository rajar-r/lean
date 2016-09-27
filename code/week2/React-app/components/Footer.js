
import React, {Component, PropTypes} from 'react';

class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <ul className="filters">
                    <li><a className="selected">All</a></li>
                    <li><a>Active</a></li>
                    <li><a>Completed</a></li>
                </ul> 
                <button className="clear-completed">Clear Completed</button>
            </footer>   
        );
    }

}

export default Footer;