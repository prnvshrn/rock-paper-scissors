import React from 'react';
import logo from './rock-paper-scissor.jpg';
import './App.css';
import OptionsComponent from './OptionsComponent.js';
import ScoreComponent from './ScoreComponent.js';
import ResultComponent from './ResultComponent.js';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {currentState : 'options', selectedOption: null, computerOptions: null, result: null, score: 0};
    this.openOptionsComponent = this.openOptionsComponent.bind(this);
    this.openResultComponent = this.openResultComponent.bind(this);
  }

  openOptionsComponent(){
    this.setState({currentState : 'options', selectedOption : null, computerOptions: null, result: null});
  }

  openResultComponent(e){
    var ComputerOptions = ['Rock', 'Paper', 'Scissor'];
    let Human = e.target.alt;
    let CPU = ComputerOptions[Math.floor(Math.random() * ComputerOptions.length)];
    var finalResult = 'draw';
    var addScore = 0;
    if( (CPU === 'Rock' && Human === 'Paper') || (CPU === 'Paper' && Human === 'Scissor') || (CPU === 'Scissor' && Human === 'Rock')) {finalResult = 'win'; addScore=1;}
    if( (CPU === 'Paper' && Human === 'Rock') || (CPU === 'Scissor' && Human === 'Paper') || (CPU === 'Rock' && Human === 'Scissor')) finalResult = 'loss'; 
    this.setState({currentState : 'result', selectedOption : Human, computerOptions: CPU, result : finalResult, score: this.state.score + addScore}); 
  }

  setSelectedOption(option){
    this.setState({selectedOption : option});
  }

  render(){ 
    let UI = '';

    if(this.state.currentState === 'options'){
      UI = <OptionsComponent ResultProp={this.openResultComponent}/>
    }
    else if(this.state.currentState === 'result'){
      UI = <ResultComponent resultOption={this.state.result} selectedOption={this.state.selectedOption} OptionProp={this.openOptionsComponent} ComputerOption={this.state.computerOptions}/>
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
              <div class="col-sm-6 col-md-6 col-lg-4"><ScoreComponent score={this.state.score}/></div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
