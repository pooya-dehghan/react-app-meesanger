import React from 'react'
import { connect } from 'react-redux'
import SendButton from '../shared/sendbutton' 
import axios from 'axios'
class Footer extends React.Component {
    constructor(){
        super()
        this.state={
            newMessage:'',

        }
    }
    
    handleChange(event){
    this.setState({...this.state, newMessage:event.target.value})
    }

    handleSendMessage(e,id){
        var data = new FormData()
        data.append("token" , localStorage.getItem('token'))
        data.append('conversation_id' , this.props.conversation_id)
        data.append('text' , this.state.newMessage)
        axios.post('http://click.7grid.ir/conversation/create/',data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        this.setState({...this.state,newMessage:''})
    }

    Enter_Send(e ,id){
        if(e.key === 'Enter' ){
            this.setState({...this.state,newMessage:''})
            var data = new FormData()
            data.append("token", localStorage.getItem('token'))
            data.append('conversation_id', this.props.conversation_id)
            data.append('text', this.state.newMessage)
            axios.post('http://click.7grid.ir/conversation/create/', data)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    render(){
        return(
            <div className="footer">
                <input 
                    value={this.state.newMessage}
                    name='newMessage'
                    onChange={(event) => this.handleChange(event)}
                    onKeyPress={(e) => this.Enter_Send(e)}> 
                </input>
                <div
                    onClick={(e) => this.handleSendMessage(e)}
                    className='SendButton'>
                    <SendButton />
                </div>
            </div>
        )
    }
}
const mapStateToProps  = (state) => ({
    conversation_id : state.conversation_id
})
const mapDispatchToProps = (dispatch) =>({
    dispatch:dispatch
})
export default connect(mapStateToProps,mapDispatchToProps)(Footer)
