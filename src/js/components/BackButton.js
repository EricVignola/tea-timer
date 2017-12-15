import React from 'react';
import ReactDOM from 'react-dom';

class BackButton extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <button style={this.props.style} className="button large expanded" onClick={this.props.toggle}>Back To Tea Menu</button>
        );
    }
}

export default BackButton