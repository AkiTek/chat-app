import MessagesForm from './MessagesForm'
import ChatList from './ChatList'
import React from 'react'
import styles from '../../css/chat.css'

export default class Messages extends React.Component{
  
  componentDidMount() {
    document.title = 'Chat Room'

    const  { initWebsocket }  = this.props
    initWebsocket()
  }
  componentWillUnmount() {
    const { closeWebsocket }  = this.props
    closeWebsocket()
  }

  render() {
    return (
      <div className={styles.chat}>
        <div className={styles.panel + ' ' + 'panel-default'}>
          <div className="panel-heading">
              <h1 className="panel-title">Chat Bot</h1>
          </div>
          <ChatList messages={this.props.messages}/>
        </div>
        <MessagesForm/>
      </div>
    )
  }
}