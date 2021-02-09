import React from 'react';
import rock_icon from './rock-without-bg.jpg';
import paper_icon from './paper-without-bg.jpg';
import scissor_icon from './scissor-without-bg.jpg';

class ResultComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {result : 0};
    }

    render(){
        var userIcon = rock_icon;
        var CPUIcon = rock_icon;
        if(this.props.selectedOption === 'Paper'){
            userIcon = paper_icon;
        }
        else if(this.props.selectedOption === 'Scissor'){
            userIcon = scissor_icon;
        }

        if(this.props.ComputerOption === 'Paper'){
            CPUIcon = paper_icon;
        }
        else if(this.props.ComputerOption === 'Scissor'){
            CPUIcon = scissor_icon;
        }

        return(
            <div className="container">
                <div className="row">
                    <h4>Result : <div className="resultText">{this.props.resultOption}</div> </h4>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">You selected</h5>
                                <img src={userIcon}/>
                                <p class="card-text">{this.props.selectedOption}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Computer selected</h5>
                                <img src={CPUIcon}/>
                                <p class="card-text">{this.props.ComputerOption}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <button type="button" className="btn btn-success" onClick={this.props.OptionProp}>Play Again?</button>
                    </div>
                    <div className="col-sm-6">
                        <button type="button" onClick={this.props.resetScoreProp} className="btn btn-warning">Reset Score</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default ResultComponent;