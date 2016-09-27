import React, {Component} from 'react';

class HitButton extends Component {

    onClickHandler() {
        //console.log('Hit....');
        this.props.clickHandler();
    }

    render() {
        return (
            <div>
                <button className="btn btn-lg btn-danger"
                         onClick={this.onClickHandler.bind(this)}>
                   Hit
                </button>
            </div>
        );
    }
}

export default HitButton;