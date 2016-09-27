import React, {Component} from 'react';
import Header from './Header'
import MainSection from './MainSection'

class App extends Component{
    render() {
        //var divEle = React.createElement('div',null,'Welcome to React Again');
        return (
             //divEle
            <div>
                <Header />
                <MainSection />
            </div>
        );        
    }
}

export default App;