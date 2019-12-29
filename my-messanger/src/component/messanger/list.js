import React from 'react'
import { connect } from 'react-redux'
import { saveUsername } from '../../actions/lists'
import ImageAvatars from '../shared/avatar'
import { GetConversationId } from '../../actions/lists'
import { GetMessageList } from '../../actions/lists'
import axios from 'axios'
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
class List extends React.Component {

  getConversationDetails(){
      this.props.dispatch(saveUsername(this.props.email))
      this.props.dispatch(GetConversationId(this.props.conversation_id))
      var formdata = new FormData()
      var date = Math.floor(Date.now() / 1000)
      formdata.append('token', localStorage.getItem('token'))
      formdata.append('conversation_id', this.props.conversation_id)
      formdata.append('date',date)
      formdata.append('size', 10)
    axios.post('http://click.7grid.ir/conversation/details/', formdata)
      .then((response) => {
        this.props.dispatch(GetMessageList(response.data.data.messages))
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render () {
      return (
            <div className='info' 
              style={{display:'flex'}}
              onClick={ ()=> this.getConversationDetails() }>
              <ImageAvatars src = {this.props.avatar_url} />
            <span style={{padding:10}}>{this.props.email}</span>
             <Badge badgeContent={this.props.unseenmessage[19]} color="primary" className = 'list-badges'>
                <MailIcon />
             </Badge>
            </div>
      )
    }
  }

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect( mapDispatchToProps)(List)
