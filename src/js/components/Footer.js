import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let buttonText = "";
        if(this.props.showGongFu){
            buttonText = "Show Western";
        } else {
            buttonText = "Show Gong Fu";
        }
        return (
            <div style={this.props.style}>
                <ul className="menu">
                    <li><a className="button" onClick={this.props.toggleBrewStyle}>{buttonText}</a></li>
                </ul>
            </div>
        );
    }
}

export default Footer;