import React from 'react'
import Header from '../../container/headercontainer'
import Chat from '../../container/chatcontainer'
import Footer from './footer'
class RightComponent extends React.Component {
    
      
    render() {
        return (
            <div className='conversations'>
                <Header
                 />
                <Chat 
                 />
               <Footer 
                 />
            </div>

        )
    }
}
export default RightComponent