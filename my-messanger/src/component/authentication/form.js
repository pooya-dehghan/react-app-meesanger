import React  from 'react'
import validate from '../authentication/validation/ValidateFunction'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom'
class Form extends React.Component{
       handelaxios() {
           axios.post('http://click.7grid.ir/auth/signup/', {
                   email: this.state.fields.email,
                   password: this.state.fields.password,
                   })
               .then((response) => {
                   console.log('42254252',response);
                    console.log('42254252', response.data);
                    this.props.history.push('/login/')
               })
               .catch(function (error) {
                   console.log('42254252', error);

               });
       }
    constructor(){
        super()
        this.state ={
            fields:{
                username:'' ,
                password:'' ,
                email:''
            },
            error:{
                username:'' ,
                password:'' ,
                email:''
            }
        }
    }
    handleValidation (event) {
        let name = event.target.name
        let error = validate( name , this.state.fields[name]);
        this.setState({...this.state ,error:{...this.state.error[name],[name]:error}})
    }
    handleChange (event) {
        let name = event.target.name
        this.setState({...this.state , fields:{...this.state.fields, [name] : event.target.value}})
    }
    render(){
        return(
            <form className="signup-form" >
                
                <label>
                    UserName:
                </label>
                <input name='username' placeholder="UserName" 
                    onBlur ={(event) => this.handleValidation (event)}
                    onChange={(event) => this.handleChange(event) }
                ></input>
                
                <label>
                    Password:
                </label>
                    <input name='password' placeholder="Password" 
                     onBlur ={(event) => this.handleValidation (event)}
                    onChange={(event) => this.handleChange(event) }
                     ></input>
                <label>
                    Email:
                </label>
                    <input name='email' placeholder="Email" 
                     onBlur ={(event) => this.handleValidation (event)}
                     onChange={(event) => this.handleChange(event)}
                    ></input>
                    <div onClick={() => this.handelaxios()}
                    className= 'form_signup_button'
                    >
                        <Button variant="outlined" color="primary" href="#outlined-buttons">
                            Signup
                        </Button>
                    </div>
            </form>
        )
    }
}
export default withRouter(Form)