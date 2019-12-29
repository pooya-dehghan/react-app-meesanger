import React from 'react'
import { FaTwitter, FaInstagram, FaTelegram } from 'react-icons/fa'
class Footer extends React.Component{
    render(){
        return( 
            <div className="signup-footer">
                <li className="instagram">
                    <a href="#"><i><FaInstagram /></i>Instagram</a>
                </li>
                <li className="twitter">
                    <a href="#"><i><FaTwitter /></i>Twitter</a>
                </li>
                <li className="telegram">
                    <a href="#"><i><FaTelegram /></i>Telegram</a>
                </li>
            </div>
        )
    }
}
export default Footer
