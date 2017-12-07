import React from "react";
import ReactDOM from "react-dom";

class TeaListItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <li>
                <a name= {this.props.tea.type} onClick={this.props.getMenuChoice}>
                    {this.props.tea.type}
                </a>
            </li>
        );
    }
}

export default TeaListItem