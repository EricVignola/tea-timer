import React from 'react';
import ReactDOM from 'react-dom';

class TeaViewTitle extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <h1 style={this.props.style}>{this.props.teas.type}</h1>
        );
    }
}

export default TeaViewTitle