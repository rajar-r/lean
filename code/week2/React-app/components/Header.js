
import React, {Component} from 'react';
import TodoInputText from './TodoTextInput'

class Header extends Component{

    render() {
        return (
            <header className="header">
                <h1>todos</h1> 
                <TodoInputText />
            </header>    
        );
    }    

}

export default Header;
