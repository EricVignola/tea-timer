//node modules
import React from 'react';
import ReactDOM from 'react-dom';

//components
import Menu from './components/Menu';
import TeaView from './components/TeaView';

import { TransitionMotion, StaggeredMotion, Motion, spring } from 'react-motion';

//json
import TeasJson from '../assets/teas.json';

//styles 
import '../scss/global.scss';

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            teas: [],
            chosenTea: '',
            teasIsLoaded: false,
            menuTarget: 0,
            teaViewTarget: 100,
        }
        
        this.selectComponent = this.selectComponent.bind(this);
        this.fetchTeas = this.fetchTeas.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    //runs after component rendered to the DOM
    componentDidMount(){
        this.fetchTeas();
    }

    //runs when the component is removed from the DOM
    componentWillUnmount(){

    }

    componentWillMount(){
    }

    selectComponent(event){
        let nameOfMenuOptionSelected = event.target.name;
        this.setState({
            chosenTea: nameOfMenuOptionSelected
        });
        this.clickHandler();
    }

    fetchTeas(){
        //because our json file is local and static we can import it using
        //webpack...if for any reason we have to use an API to fetch data 
        //from a non local source use the below XMLHttpRequest
        this.setState({
            teasIsLoaded: true, 
            teas: TeasJson.teas
        });

        //**************************************************
        //START OF XMLHTTPREQUEST...to be used for API calls
        //**************************************************
        //saving a refernce to the Menu class because we need to call setState
        //inside of the xhr.onload function. Normally we would type this.setState()
        //however, inside of xhr.onload, this refers to the xhr object not Menu.
        //Because of this, we save a reference to Menu before that happens so we
        //can call setState after getting our JSON data
        // var self = this;
        // let xhr = new XMLHttpRequest();

        // //NOTE: this url is relative to our html files because that's the 
        // //file that the javascript is ultimately executed from
        // let requestURL = TeasJson;
        // console.log(TeasJson);
        // xhr.open('GET', requestURL, true);
        
        // xhr.onload = function(e){
        //     if(xhr.status == 200){
        //         let response = JSON.parse(xhr.responseText).teas;

        //         self.setState({ //could not use this because this refers to xhr
        //             teas: response,
        //             isLoaded: true
        //         });
        //     } else {
        //         self.setState({
        //             isLoaded: true,
        //             error: "Error: " + xhr.status
        //         });
        //     }
        // }
        // xhr.send();
        //**************************************************
        //END OF XMLHTTPREQUEST...to be used for API calls
        //**************************************************
    }

    clickHandler(){
        this.setState({
            menuTarget: this.state.menuTarget == 0 ? -100 : 0,
            teaViewTarget: this.state.teaViewTarget == 0 ? 100 : 0, 
        });
    }

    render(){
        let { teasIsLoaded } = this.state;

        if(!teasIsLoaded){
            return <div>Loading...</div>
        } else {
            return(
                <div className="appWrapper">
                    <StaggeredMotion
                        defaultStyles={ [{transform: 0 }, {transform: 100}] }
                        styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_,i) => {
                            return i === 0 
                                ? {transform: spring(this.state.menuTarget)}
                                : {transform: spring(this.state.teaViewTarget)}
                        })}>
                        {interpolatingStyles => 
                            <div>
                                {interpolatingStyles.map((style, i) =>
                                {if(i === 0){
                                    return <Menu teas = {this.state.teas}
                                    getMenuChoice = {this.selectComponent}
                                    toggle = {this.clickHandler}
                                    doMount = {this.state.renderMenu}
                                    key={i}
                                    style= {{transform: `translateX(${style.transform}%)`}}/>
                                } else {
                                    return <TeaView teas = {this.state.teas}
                                    getMenuChoice = {this.selectComponent}
                                    toggle = {this.clickHandler}
                                    chosenTea = {this.state.chosenTea}
                                    doMount = {this.state.renderTeaView}
                                    key={i}
                                    style={{transform: `translateX(${style.transform}%)`}}/>
                                }})
                                }
                            </div>
                        }
                    </StaggeredMotion>
                </div>
            );
        }
    }
}

ReactDOM.render(<App />, document.getElementById("root"));