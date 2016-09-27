



import React, {Component, PropTypes} from 'react';
import TodoItem from './TodoItem'
import Footer from './Footer'

class MainSection extends Component{

    render() {
        return (
            <section className="main">
            <ul className="todo-list">
               <li><TodoItem /></li>
               <li><TodoItem /></li>     
            </ul> 
            <Footer />    
        </section> 
        );   
    }

}

export default MainSection;