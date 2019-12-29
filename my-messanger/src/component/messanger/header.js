import React from 'react'
import PrimarySearchAppBar from '../shared/header2'
class Header extends React.Component {
    render(){
        return(
            <div className="header_name">
                <PrimarySearchAppBar name={this.props.name} />
            </div>
        )
    }
}
export default Header