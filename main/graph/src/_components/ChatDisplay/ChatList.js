import React from 'react'
import { connect } from 'react-redux'
import styles from '../../css/chat.css'

const Chat = ({text}) => {
  let content = text["content"]
  let who = text["talker"] == 'you'? styles.user : styles.bot
  console.log(text)
  return (
  <div className={styles.chatBox}>
    <div className={who+ ' ' + styles.chatBalloon}>
      {content}
    </div>
  </div>
)}

export default class ChatList extends React.Component {
  // componentWillMount(){
  //   this.props.getAllMessage()
  // }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  componentDidMount(){
    this.scrollToBottom();
  }
  scrollToBottom() {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  render(){
    const messages = (this.props.messages.list.slice().map((message, i) => {return <Chat key={ i }  text={message} />}))
    return (
      <div className={styles.panel_body}>
        <div className="MessageList">
          { messages }
        </div>
        <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </div>
    )
  }
}
