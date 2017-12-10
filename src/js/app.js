//node modules
import React from 'react';
import ReactDOM from 'react-dom';

//components
import Menu from './components/Menu';
import TeaView from './components/TeaView';

//json
import TeasJson from '../assets/teas.json';

//styles 
import '../scss/global.scss';

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            teas: [],
            component: '',
            teasIsLoaded: false,
            menuIsActive: true,
            teaViewIsActive: false
        }
        
        this.setMenuAsActive = this.setMenuAsActive.bind(this);
        this.setTeaViewAsActive = this.setTeaViewAsActive.bind(this);
        this.selectComponent = this.selectComponent.bind(this);
        this.fetchTeas = this.fetchTeas.bind(this);
    }

    //runs after component rendered to the DOM
    componentDidMount(){
        this.fetchTeas();
        // $(document).foundation();
    }

    //runs when the component is removed from the DOM
    componentWillUnmount(){

    }

    componentWillMount(){
    }


    setMenuAsActive(){
        this.setState({
            menuIsActive: true,
            teaViewIsActive: false
        });
    }

    setTeaViewAsActive(){
        this.setState({
            menuIsActive: false,
            teaViewIsActive: true
        });
    }

    selectComponent(event){
        let nameOfMenuOptionSelected = event.target.name;
        let toRender = null;

        switch(nameOfMenuOptionSelected){
            
            case this.state.teas[0].type:
            toRender = <TeaView teas = {this.state.teas[0]}
                                setTeaViewAsActive = {this.setTeaViewAsActive}
                                setMenuAsActive = {this.setMenuAsActive}
                                teaViewIsActive = {this.state.teaViewIsActive}/>
            break; //have to have break here or the switch statement will always default to final case

            case this.state.teas[1].type:
            toRender = <TeaView teas = {this.state.teas[1]}
                                setTeaViewAsActive = {this.setTeaViewAsActive}
                                setMenuAsActive = {this.setMenuAsActive}
                                teaViewIsActive = {this.state.teaViewIsActive}/>
            break;

            case this.state.teas[2].type:
            toRender = <TeaView teas = {this.state.teas[2]}
                                setTeaViewAsActive = {this.setTeaViewAsActive}
                                setMenuAsActive = {this.setMenuAsActive}
                                teaViewIsActive = {this.state.teaViewIsActive}/>
            break; 

        }

        this.setState({component: toRender});
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

    render(){
        let { teasIsLoaded, menuIsActive, teaViewIsActive } = this.state;
        if(!teasIsLoaded){
            return <div>Loading...</div>
        } else {
            if(menuIsActive){
                return (
                    <Menu teas = {this.state.teas}
                    getMenuChoice = {this.selectComponent}
                    setMenuAsActive = {this.setMenuAsActive}
                    setTeaViewAsActive = {this.setTeaViewAsActive}
                    menuIsActive = {this.state.menuIsActive}/>
                );
            } else {
                return(
                    <div>
                        {this.state.component}
                    </div>
                );
            }
        }
    }
}

ReactDOM.render(<App />, document.getElementById("root"));