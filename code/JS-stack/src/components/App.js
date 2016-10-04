import React from 'react';
import MessageList from './MessageList';
import ChannelList from './ChannelList';
import MessageBox from './MessageBox';
import mui from 'material-ui'
import ActionTypes from '../actions'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;
var AppBar = mui.AppBar;

class App extends React.Component {
  
  render(){
    return (
      <div>
        App
      </div>
    );
  }
}


  
// map store-current to comp's properties instead-of subscribing mannulay
function mapStateToProps(state) {
    return {messages:state}
}
function mapDispatchToProps(dispath) {
    return {actions:bindActionCreators(ActionTypes,dispath)};   
}


// Connects a React component to a Redux store.

export default connect(mapStateToProps,mapDispatchToProps)(App);