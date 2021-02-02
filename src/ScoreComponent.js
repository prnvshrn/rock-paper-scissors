import React from 'react';

class ScoreComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {score : 0};
    }

    render(){
        return(
            <div>
                <h2>Your Score : {this.props.score}</h2>
            </div>
        );
    }
}

export default ScoreComponent;