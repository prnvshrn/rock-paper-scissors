import React from 'react';
import rock_icon from './rock-icon.png';
import paper_icon from './paper-icon.png';
import scissor_icon from './scissor-icon.png';

class ResultComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {result : 0};
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <h2>Result : {this.props.resultOption} </h2>
                </div>
                <div className="row">
                    <div className="col-sm-6">You selected {this.props.selectedOption}</div>
                    <div className="col-sm-6">Computer selected {this.props.ComputerOption}</div>
                </div>
                <div className="row">
                    <button onClick={this.props.OptionProp}>Play Again?</button>
                </div>
            </div>
        );
    }

}

export default ResultComponent;