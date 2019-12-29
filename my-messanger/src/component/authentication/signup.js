import React from 'react'
import Text from './text'
import Form from './form'
import Footer from './footer'
import './signup.css'
import axios from 'axios'
class SignUp extends React.Component{
   
 
    render(){
        return(
        <div className="signup-main-container">
            <div className="signup-left-container">
                <div className="image">
                    <img className="kiaa" src={require ('./kiaa.png')} alt="_target" />
                    <h1 id="kia">kia</h1>
                    <h3 id="Real-Estate">Real Estate</h3>
                </div>
            </div>
           <div className="signup-right-container">
               <Text />
               <Form />
               <Footer />
           </div>
        </div>
        )
        
    }
}
export default SignUp
