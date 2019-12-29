import React from 'react'
import axios from 'axios'
import validate from '../authentication/validation/ValidateFunction'
import {withRouter} from 'react-router'
import Bc from './../../background/bc.jpg'
class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            bool:false,

            fields:{
                username:'',
                email:'',
                password:'',
            },

            error:{
                username:'',
                email:'',
                password:'',
            },

            errorr:false,
            
        }
    }
    handleClick(e) {
        axios.post('http://click.7grid.ir/auth/signin/', {
                email: this.state.fields.email,
                password: this.state.fields.password
            })
            .then((response) => {
                
                window.localStorage.setItem('token', response.data.data.token)
                window.localStorage.setItem('id', response.data.data.profile.id)
                this.props.history.push('/messanger/')
            })
            .catch( (error) => {
                console.log(error);

            });
           
    }
   
    
   handlevalidation (e){
    let name = e.target.name;
    let error = validate(name, this.state.fields[name])
    this.setState({...this.state ,error:{...this.state.error[name] , [name] :error}})
   }
    FillingOperation(e){
        let name = e.target.name;
        this.setState({...this.state ,fields:{...this.state.fields, [name] : e.target.value}})
    }
    handleChange (e) {
        console.log('hello poooya change is happening',e)
    }
    handleaxios2(e) {
        if(e.key === 'Enter') {
             axios.post('http://click.7grid.ir/auth/signin/', {
                     email: this.state.fields.email,
                     password: this.state.fields.password,

                 })
                 .then(function (response) {
                     window.localStorage.setItem('token', response.data.data.token)
                     console.log(response);
                 })
                 .catch((error) => {
                     if(error.status === 400) {
                        this.setState({ errorr : true})
                     }
                     console.log(error);
                 });
             }
        }

        class () {
                if(this.state.error.email) {
                    return (
                       'standard-error'
                    )
                } else{
                    return(
                        'standard-basic'
                    )
                }
        }
    
    
    render(){
       console.log('ooooooooooooooooooooooooooo' ,this.state)
        return(
            
         <div className="login-main-container" style={{backgroundImage: `url(${Bc})`,backgroundSize:'cover',}}>
            <div className='box'>
                    <input 
                        name='email'
                        className='login-email-input'
                        placeholder='email'
                        onChange={(e) => this.FillingOperation(e)}
                        onBlur = {(e) => this.handlevalidation(e)}
                        style = {{ border: this.state.error.email ? '1px red solid' : '0.5px #ffffff solid' }}
                         />
                    <input
                        name='password'
                        className='login-password-input'
                        placeholder='password'
                        onChange={(e) => this.FillingOperation(e)} 
                        onBlur = {(e) => this.handlevalidation(e)}
                        style = {{ border: this.state.error.password ? '1px red solid' : '0.5px #ffffff solid' }}
                         />
                <div className='button' onClick={(e) => this.handleClick(e)}>Login</div>
                 
                {this.state.error.email ? <div className = 'login_error_email'>{this.state.error.email}</div> :null}
                {this.state.error.password ? <div className = 'login_error_password'>{this.state.error.password}</div> : null}
            </div>  
        </div>
        )
    }
}
export default withRouter(Login)