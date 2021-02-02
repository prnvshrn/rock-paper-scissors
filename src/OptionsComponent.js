import React from 'react';
import rock_icon from './rock-icon.png';
import paper_icon from './paper-icon.png';
import scissor_icon from './scissor-icon.png';
import CardComponent from './CardComponent.js';

class OptionsComponent extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
        <div class="container">
          <div class="row">
            Please select an option from below :
          </div>
          <div class="row">
            <div class="col-sm-4"><CardComponent value='check' ResultPropChild={this.props.ResultProp} card_img={rock_icon} card_title='Rock' /></div>
            <div class="col-sm-4"><CardComponent ResultPropChild={this.props.ResultProp}  card_img={paper_icon} card_title='Paper'/></div>
            <div class="col-sm-4"><CardComponent ResultPropChild={this.props.ResultProp} card_img={scissor_icon} card_title='Scissor'/></div>
          </div>
      </div>
    );
  }
}

export default OptionsComponent;