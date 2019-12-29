
import React from 'react'
import { DeleteOption } from '../../actions/lists'
import { NewMessage } from '../../actions/lists'
import DeleteButton from '../shared/deletebutton'
import EditButton from '../shared/editbutton'
import { connect } from 'react-redux'
import ImageAvatars from '../shared/avatar'
class Chat extends React.Component {
    constructor() {
        super()
        this.state = {
            delete:false,
            deleteid:-1,
            editid:-1,
            edit:false,
            value : '',
            

        }
    }
handleDelete(e, index) {
        this.props.dispatch(DeleteOption(this.state.value ,index))
        this.setState({delete:!this.state.delete , deleteid:index})  
}

handleEdit(e, index) {
        this.setState({editid:index})
        this.props.dispatch(NewMessage(e.target.value, index))
}
editprosses(e) {
    if(e.key === 'Enter'){
        this.setState({edit:!this.state.edit})
    }
}
getMessageList() {
    
}
render(){
    console.log('44444444444444444444444444', this.props.messageList)
        return(
            <div className="chat_box">
            {this.props.messageList.map((text,index) =>{
                console.log('12121212112',text.sender.id)
                if(text.sender.id !== 19) {
                  return (
                      <div className = 'sender_messages'>
                    <ImageAvatars src = {this.props.avatar_url} />
                     <div className = 'sender_messages_message'>
                       {text.text} 
                     </div>
                     </div>
                  )
              }
              else{
                  return(
                      <div className = 'receiver_messages'>
                      <div className = 'receiver_messages_message'>
                        {text.text} 
                      </div>
                        <ImageAvatars src = {this.props.avatar_url} />

                      </div>
                  )
              }
         }
    )
}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messageList : state.messageList,
    }
}
export default connect(mapStateToProps)(Chat)
