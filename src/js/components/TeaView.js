import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './Footer';
import TeaStats from './TeaStats';
import BackButton from './BackButton';
import TeaViewTitle from './TeaViewTitle';

class TeaView extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            showGongFu: true,
            showWestern: false
        };

        this.toggleBrewStyle = this.toggleBrewStyle.bind(this);

    }

    toggleBrewStyle(){
        this.setState({
            showGongFu: !this.state.showGongFu,
            showWestern: !this.state.showWestern
        });
    }

    render(){
        let teaIndexNumber = null;
        switch(this.props.chosenTea){
            case this.props.teas[0].type:
            teaIndexNumber = 0;
            break;

            case this.props.teas[1].type:
            teaIndexNumber = 1;
            break;

            case this.props.teas[2].type:
            teaIndexNumber = 2;
            break;

            case this.props.teas[3].type:
            teaIndexNumber = 3;
            break;

            case this.props.teas[4].type:
            teaIndexNumber = 4;
            break;

            case this.props.teas[5].type:
            teaIndexNumber = 5;
            break;

            case this.props.teas[6].type:
            teaIndexNumber = 6;
            break;

            case this.props.teas[7].type:
            teaIndexNumber = 7;
            break;

            case this.props.teas[8].type:
            teaIndexNumber = 8;
            break;
        }
        if(this.props.chosenTea){
            return (
                <div className="x-grid">
                    <BackButton toggle = {this.props.toggle} style={this.props.style}/>
                    <TeaViewTitle teas={this.props.teas[teaIndexNumber]} style={this.props.style}/>
                    <TeaStats showGongFu = {this.state.showGongFu} teas={this.props.teas[teaIndexNumber]} style={this.props.style}/>
                    <Footer toggleBrewStyle = {this.toggleBrewStyle}
                            showGongFu = {this.state.showGongFu}
                            style={this.props.style}/>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default TeaView