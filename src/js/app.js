import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component{
    render(){
        return(
            <div>
                Hello, World from React!
            </div>
        );
    }
}

export default HelloWorld

ReactDOM.render(<HelloWorld />, document.getElementById("root"));