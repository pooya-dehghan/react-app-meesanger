import React from 'react'
import RightComponent from './rightComponent'
import LeftComponent from '../messanger/leftComponent'
import Explored from '../../container/userdatacontainer'
class Messanger extends React.Component{
    render(){
        return(
            <div className='container'>
                <Explored />
                <LeftComponent />
                <RightComponent />
            </div>
        )
    }
}





export default Messanger