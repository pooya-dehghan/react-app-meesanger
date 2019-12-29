import React from 'react' 
import ImageAvatars from '../shared/avatar'
import {GettingId} from '../../actions/lists'
import {connect} from 'react-redux'
import Popup from "reactjs-popup";

class Explored extends React.Component {
    gettingId(e) {
        this.props.dispatch(GettingId(e))
    }
    
    render(){        
        return(
            <div className='main-explored'>
              <div className='scroll'>
               {this.props.user.map((user) =>{
                   return(
                       <div className='explored-box' 
                       key={user.id}
                       onClick={() => this.gettingId(user.id)}>
                        <ImageAvatars />
                         <div className='main-explore-email'>
                            Email address :{user.email}
                         </div>
                          <div className='main-explore-id'>
                            Ids :{user.id}
                          </div>
                       </div>
                   )
               })}
              </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
})
export default connect(mapDispatchToProps)(Explored)
