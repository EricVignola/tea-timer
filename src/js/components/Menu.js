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
        let className = "grid-container";
        const teaListItems = this.props.teas.map((tea) => 
            <TeaListItem key={tea.type}
                tea = {tea} 
                getMenuChoice = {this.props.getMenuChoice}/>
        );
        return (
            <div className={className} onClick={this.props.setTeaViewAsActive}>
                <div className="grid-x">
                    <ul className="small-12 cell vertical menu">
                        {teaListItems}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu;