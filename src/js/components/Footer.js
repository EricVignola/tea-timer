import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <ul className="menu">
                    <li><a className="button" onClick={this.props.setAsGongFu}>Gong Fu</a></li>
                    <li><a className="button" onClick={this.props.setAsWestern}>Western</a></li>
                </ul>
            </div>
        );
    }
}

export default Footer;