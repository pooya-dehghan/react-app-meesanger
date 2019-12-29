import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



/*function Element(){   
    return(
        <h1>bello</h1>
    )
}*/
/*const name = 'pooya'
function Element(props) {
    console.log('111',props)
    return ( 
        < h1 > helllo {name}</h1>
    )
}*/

/*class Element2 extends React.Component {
    render() {
        return(
            <div>
            < h1 className="this-is-so-important"> POOYA </ h1>
            <p>welcome</p>
            </div>
        )
    }
}*/
/*class Element3 extends React.Component{
    render()
    {
        console.log('2222', this)
        return(
            <h1>hello {this.props.name} {this.props.family}</h1>
        )
    }
}*/



/*class Description extends React.Component{
    render () {
        return(
    <div>
    <Element3 name="pooya" />
     <p>Description ....</p>
    </div>
        )   
    }
}*/














ReactDOM.render( <App /> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
