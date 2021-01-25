import React from 'react';
import logo from './rock-paper-scissor.jpg';
import './App.css';
import OptionsComponent from './OptionsComponent.js';
import ScoreComponent from './ScoreComponent.js';
import ResultComponent from './ResultComponent.js';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {currentState : 'options'};
    this.openOptionsComponent = this.openOptionsComponent.bind(this);
    this.openResultComponent = this.openResultComponent.bind(this);
  }

  openOptionsComponent(){
    this.setState({currentState : 'options'});
  }

  openResultComponent(){
    this.setState({currentState : 'result'});
  }

  render(){
    let UI = '';

    if(this.state.currentState === 'options'){
      UI = <OptionsComponent ResultProp={this.openResultComponent}/>
    }
    else if(this.state.currentState === 'result'){
      UI = <ResultComponent OptionProp={this.openOptionsComponent}/>
    }

    return (
      <div className="App">
        <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <img src={logo} class="main-logo" alt="logo" />
              </div>
              <div class="col-sm-8">
              <h1>
                Rock Paper Scissors
                </h1>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 col-md-6 col-lg-8">{UI}</div>
              <div class="col-sm-6 col-md-6 col-lg-4"><ScoreComponent/></div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
