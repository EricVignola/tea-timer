import React from "react";
import ReactDOM from "react-dom";

class TeaListItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <li>
                    <a name= {this.props.tea.type} 
                    onClick={this.props.getMenuChoice}
                    className="button hollow large">
                        {this.props.tea.type}
                    </a>
                </li>
            </div>
        );
    }
}

export default TeaListItem