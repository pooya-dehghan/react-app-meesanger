import React from 'react'
class Input extends React.Component {
    render() { 
        return (
            <div>
            {this.props.lable && <lable>{this.props.name}</lable>}
            <input 
            placeholder={this.props.placeholder}
            name={this.props.name}
            onChange={(e) => this.props.onAnyChange(e)}
            />
            </div>
          );
    }
}
 
export default Input;

