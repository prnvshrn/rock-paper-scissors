import logo from './rock-paper-scissor.jpg';
import './App.css';
import rock_icon from './rock-icon.png';
import paper_icon from './paper-icon.png';
import scissor_icon from './scissor-icon.png';

function App() {
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
        </div>
      <div class="container">
          <div class="row">
            <div class="col-sm-4">Rock</div>
            <div class="col-sm-4">Paper</div>
            <div class="col-sm-4">Scissors</div>
          </div>
      </div>
    </div>
  );
}

export default App;
