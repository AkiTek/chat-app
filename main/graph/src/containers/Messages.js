import { connect } from 'react-redux'
import { initWebsocket, closeWebsocket } from '../_actions/messages'
import Messages from '../_components/ChatDisplay/Messages'
import { push } from 'react-router-redux'


function mapStateToProps({ messages }){
  return {
    messages: messages
  };
}

function mapDispatchToProps(dispatch){
  return {
    initWebsocket(){
      dispatch(initWebsocket());
    },
    closeWebsocket(){
      dispatch(closeWebsocket());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);