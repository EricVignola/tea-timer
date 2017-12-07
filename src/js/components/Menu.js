import React from 'react';
import ReactDOM from 'react-dom';

import TeaListItem from './TeaListItem';

class Menu extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
    }

    render(){
        const teaListItems = this.props.teas.map((tea) => 
            <TeaListItem key={tea.type}
                tea = {tea} 
                getMenuChoice = {this.props.getMenuChoice}/>
        );
        return (
            <div>
                <ul>
                    {teaListItems}
                </ul>
            </div>    
        );
    }
}

export default Menu;