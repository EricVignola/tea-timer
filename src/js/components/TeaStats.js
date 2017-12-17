import React from 'react';
import ReactDom from 'react-dom';

class TeaStats extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
            console.log(this.props.showGongFu);
            if(this.props.showGongFu){
                return(
                    <div>
                        <ul style={this.props.style}>
                            <li style = {{listStyleType: "none"}}>{"Initial Brew (Gong Fu): " + this.props.teas.gongFuInfo.firstInfusion}</li>
                            <li style = {{listStyleType: "none"}}>{"Subsequent Brew (Gong Fu): " + this.props.teas.gongFuInfo.subsequentInfusion}</li>
                        </ul>
                    </div>
                );
            } else {
                return(
                    <div>
                        <ul style={this.props.style}>
                            <li style = {{listStyleType: "none"}}>{"Initial Brew (Western): " + this.props.teas.westernInfo.firstInfusion}</li>
                            <li style = {{listStyleType: "none"}}>{"Subsequent Brew (Western): " + this.props.teas.westernInfo.subsequentInfusion}</li>
                        </ul>
                    </div>
                );
            }
    }
}

export default TeaStats;