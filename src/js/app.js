import React from 'react';
import ReactDOM from 'react-dom';
import { clearInterval } from 'timers';

import Menu from './components/Menu';
import TeaView from './components/TeaView';

import TeasJson from '../assets/teas.json';

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            teas: [],
            component: ''
        }
        
        this.selectComponent = this.selectComponent.bind(this);
        this.fetchTeas = this.fetchTeas.bind(this);
    }

    //runs after component rendered to the DOM
    componentDidMount(){
        this.fetchTeas();
    }

    //runs when the component is removed from the DOM
    componentWillUnmount(){

    }

    selectComponent(event){
        event.preventDefault();
        let nameOfMenuOptionSelected = event.target.name;
        let toRender = null;

        switch(nameOfMenuOptionSelected){
            
            case this.state.teas[0].type:
            toRender = <TeaView teas = {this.state.teas[0]}/>
            break; //have to have break here or the switch statement will always default to final case

            case this.state.teas[1].type:
            toRender = <TeaView teas = {this.state.teas[1]}/>
            break;

            case this.state.teas[2].type:
            toRender = <TeaView teas = {this.state.teas[2]}/>
            break; 

        }

        this.setState({component: toRender});
    }

    fetchTeas(){
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

        //because our json file is local and static we can import it using
        //webpack...if for any reason we have to use an API to fetch data 
        //from a non local source use the above XMLHttpRequest
        this.setState({
            isLoaded: true, 
            teas: TeasJson.teas
        });
    }

    render(){
        let { isLoaded } = this.state;
        if(!isLoaded){
            return <div>Loading...</div>
        } else {
            return(
                <div>
                    <h1>All that react goodness</h1>
                    <Menu teas = {this.state.teas}
                        getMenuChoice = {this.selectComponent}/>
                    {this.state.component}
                </div>
            );
        }
    }
}

ReactDOM.render(<App />, document.getElementById("root"));