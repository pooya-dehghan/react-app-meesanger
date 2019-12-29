import { connect } from 'react-redux'
import Chat from '../component/messanger/chat'

const mapStateToProps = (state) => ({
    messageList: state.messageList,
    delete:state.delete
})

 
 const mapDispatchToProps = (dispatch) => ({
     dispatch:dispatch
 })

 const Chatcontainer = connect(mapStateToProps, mapDispatchToProps)(Chat)
 export default Chatcontainer
