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
            <div>
                Result
                <button onClick={this.props.OptionProp}>Play Again?</button>
            </div>
        );
    }

}

export default ResultComponent;