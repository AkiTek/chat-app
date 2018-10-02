import MessagesForm from '../containers/MessagesForm'
import React from 'react'

const Message = ({text}) => (
  <li>
    { text }
  </li>
)


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
    const messages = (this.props.messages.list.slice().reverse().map((message, i) => {console.log(message);   return <Message key={ i } text={message["message"]} />}))

    return (
      <div>
        <MessagesForm/>
        <ul>
          { messages }
        </ul>
      </div>
    )
  }
}