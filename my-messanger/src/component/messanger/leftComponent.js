import React from 'react'
import List from './list'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux'
import { EploredUsers } from '../../actions/lists'
class LeftComponent extends React.Component {

  constructor() {
    super()
    this.state ={
      conversation_details : [],
      exploredUsers : [],
      search:''
    }
  }

   componentDidMount(){
    axios.get('http://click.7grid.ir/conversation/', {
      params: {
        token: window.localStorage.getItem('token')
      }
    })
      .then((response) => {
        this.setState({ conversation_details : response.data.data.conversation_details })
        console.log('111111111111111111111111111111' ,response)
      })
      .catch(function (error) {
          if(error.status === 403){
            this.props.history.push('/login/')
          }
        console.log(error);
      })
      
  }

  getConversation(){
    if(this.state.search !==''){
    var formdata = new FormData()
    formdata.append('token',localStorage.getItem('token'))
    formdata.append('query' ,this.state.search)
    formdata.append('size',5)
    axios.post('http://click.7grid.ir/explore/search/contacts/',formdata)
      .then((response) => {
          this.setState({...this.state , exploredUsers:response.data.data.users})
          this.props.dispatch(EploredUsers(response.data.data.users))
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }

 handleSerch(e){
   this.setState({...this.state , search:e})
 }

  createConversation(e){
    var data = new FormData()
    data.append('token', window.localStorage.getItem('token'))
    data.append('user_id', this.props.id);
     axios.post('http://click.7grid.ir/conversation/', data)
       .then((response) => {
       })
       .catch(function (error) {
         console.log('createConversation', error);
       });
  }
 
  render(){
  
    return(
       <div className = 'list'>
          <div className = 'search-bar'>
          
          <button className='getconversation-button'
            onClick={() =>this.createConversation()}>
            ADD TO
           </button>
          
            <div className='search-input-div' onClick={() =>this.getConversation()}>
              <SearchIcon color='action' className='icon-search' />
            </div>
              <input className='serach-bar-input'
                onChange={(e) => this.handleSerch(e.target.value)}
                placeholder='search...' >
              </input>
          </div>
          <div className='Conversation-List'>
          {this.state.conversation_details.map((conversation_details) =>{
            return(
            conversation_details.users.map((user) => {
              if(user.id !== 19)
              return(
                <List 
                  email = {user.email} 
                  conversation_id = {conversation_details.id} 
                  date = {conversation_details.latest_message_date} 
                  unseenmessage = {conversation_details.unseen_messages}
                  avatar = {user.avatar_url}
                  
                 />
              )
            }))
          })}
            </div>
      </div>
    )
  }
} 
const mapStateToProps = (state) => {
    return {
    id: state.id,
    }
}
const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LeftComponent))  