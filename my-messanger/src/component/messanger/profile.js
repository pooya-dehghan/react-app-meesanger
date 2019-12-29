import React, { Fragment } from 'react'
import Bg from '../../background/bg.jpg'
import Bc from './../../background/bc.jpg'
import axios from 'axios'

class Profile extends React.Component {
    handleProfile(){
        var data = new FormData()
        data.append('token',localStorage.getItem('token'))
         axios.post('http://click.7grid.ir/auth/signin/', {
                 email: this.state.fields.email,
                 password: this.state.fields.password,

             })
             .then(function (response) {
                 window.localStorage.setItem('token', response.data.data.token)
                 console.log(response);
             })
             .catch((error) => {
                 if (error.status === 400) {
                     this.setState({
                         errorr: true
                     })
                 }
                 console.log(error);
             });
    }
    render() {
        return(
            <div className = 'main-profile' style={{backgroundImage: `url(${Bg})`,backgroundSize:'cover',}}>
                <div className = 'input-container'>
                    <input 
                        className = 'input-container-name' 
                        placeholder = 'name'
                    />
                    <input 
                        className = 'input-container-description'
                        placeholder = 'description'

                    />
                    <input 
                        className = 'input-container-number'
                        placeholder = 'number'

                    />
                    <input 
                        className = 'input-container-address'
                        placeholder = 'address'
                     />
                     <button  className = 'profile-button' onClick = {() => this.handleProfile()}>
                        submit
                     </button>
                </div>
            </div>
        )
    }
}
export default Profile