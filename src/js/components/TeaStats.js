import React from 'react';
import ReactDom from 'react-dom';

class TeaStats extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ul style={this.props.style}>
                <li style = {{listStyleType: "none"}}>{"Initial Brew (Gong Fu): " + this.props.teas.gongFuInfo.firstInfusion}</li>
                <li style = {{listStyleType: "none"}}>{"Subsequent Brew (Gong Fu): " + this.props.teas.gongFuInfo.subsequentInfusion}</li>
                <li style = {{listStyleType: "none"}}>{"Initial Brew (Western): " + this.props.teas.westernInfo.firstInfusion}</li>
                <li style = {{listStyleType: "none"}}>{"Subsequent Brew (Western): " + this.props.teas.westernInfo.subsequentInfusion}</li>
            </ul>
        );
    }
}

export default TeaStats;