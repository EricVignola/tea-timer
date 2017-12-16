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
        // if(this.props.doMount){
        if(this.props.chosenTea){
            if(this.state.isGongFu){
                return (
                    <div className="x-grid">
                        <BackButton toggle = {this.props.toggle} style={this.props.style}/>
                        <TeaViewTitle teas={this.props.teas[teaIndexNumber]} style={this.props.style}/>
                        <TeaStats teas={this.props.teas[teaIndexNumber]} style={this.props.style}/>
                        <Footer setAsGongFu = {this.setAsGongFu}
                                setAsWestern = {this.setAsWestern} style={this.props.style}/>
                    </div>
                );
            } else {
                return (
                    <div className="x-grid">
                        <BackButton toggle = {this.props.toggle} style={this.props.style}/>
                        <TeaViewTitle teas={this.props.teas[teaIndexNumber]} style={this.props.style}/>
                        <TeaStats teas={this.props.teas[teaIndexNumber]} style={this.props.style}/>
                        <Footer setAsGongFu = {this.setAsGongFu}
                            setAsWestern = {this.setAsWestern} style={this.props.style}/>
                    </div>
                );
            }
        } else {
            return null;
        }
        // } else {
        //     return null;
        // }
    }
}

export default TeaView