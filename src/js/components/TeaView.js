import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './Footer';

class TeaView extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isGongFu: true,
            isWestern: false,
            title: "",
            timeToSteep: null,

        }
    }

    render(){
        return (
            <div>
                <h1>{this.props.teas.type}</h1>
                <Footer />
            </div>
        );
    }
}

export default TeaView