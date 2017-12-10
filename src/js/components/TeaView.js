import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './Footer';

class TeaView extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isGongFu: true,
            isWestern: false
        };

        this.setAsGongFu = this.setAsGongFu.bind(this);
        this.setAsWestern = this.setAsWestern.bind(this);

    }

    setAsGongFu(){
        this.setState({
            isGongFu: true,
            isWestern: false
        });
    }

    setAsWestern(){
        this.setState({
            isGongFu: false,
            isWestern: true
        });
    }

    render(){
        let className = "grid-container";
        if(this.state.isGongFu){
            return (
                <div className="x-grid">
                    <button className="button large expanded" onClick={this.props.setMenuAsActive}>Back To Tea Menu</button>
                    <h1>{this.props.teas.type}</h1>
                    <ul>
                        <li>{"Initial Brew (Gong Fu): " + this.props.teas.gongFuInfo.firstInfusion}</li>
                        <li >{"Subsequent Brew (Gong Fu): " + this.props.teas.gongFuInfo.subsequentInfusion}</li>
                    </ul>
                    <Footer setAsGongFu = {this.setAsGongFu}
                            setAsWestern = {this.setAsWestern}/>
                </div>
            );
        } else {
            return (
                <div className="x-grid">
                    <button className="button large expanded" onClick={this.props.setMenuAsActive}>Back To Tea Menu</button>
                    <h1>{this.props.teas.type}</h1>
                    <ul>
                        <li>{"Initial Brew (Western): " + this.props.teas.westernInfo.firstInfusion}</li>
                        <li>{"Subsequent Brew (Western): " + this.props.teas.westernInfo.subsequentInfusion}</li>
                    </ul>
                    <Footer setAsGongFu = {this.setAsGongFu}
                        setAsWestern = {this.setAsWestern}/>
                </div>
            );
        }
    }
}

export default TeaView