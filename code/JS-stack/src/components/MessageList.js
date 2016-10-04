import React from 'react';
import Message from './Message';
import mui from 'material-ui';

var {Card, List} = mui;

class MessageList extends React.Component {
  constructor(props) {
    super(props);
   }

  render(){
    var messageNodes = this.props.messages.map((message,index)=> {
      return (
        <Message key={index} message={message} />
      );
    });

    return (
      <Card style={{
        flexGrow: 2,
        marginLeft: 30
      }}>
        <List>
          {messageNodes}
        </List>
      </Card>
    );
  }
}

export default MessageList;
