import React from 'react';
import ReactDOM from 'react-dom';

import TeaListItem from './TeaListItem';

class Menu extends React.Component{
    constructor(props){
        super(props);    
    }

    render(){
        const teaListItems = this.props.teas.map((tea) => 
            <TeaListItem key={tea.type}
                tea = {tea} 
                getMenuChoice = {this.props.getMenuChoice}
                style={this.props.style}/>
        );

        return (
            <div style={{position: "absolute", width: "100%"}} onClick={this.props.toggle}>
                <ul className="small-12 cell vertical menu">
                    {teaListItems}
                </ul>
            </div>
        );
    }
}

export default Menu;