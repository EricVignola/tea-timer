import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <ul>
                    <li>Gong Fu</li>
                    <li>Western</li>
                </ul>
            </div>
        );
    }
}

export default Footer;