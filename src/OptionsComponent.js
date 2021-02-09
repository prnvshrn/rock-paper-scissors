import React from 'react';
import rock_icon from './rock-without-bg.jpg';
import paper_icon from './paper-without-bg.jpg';
import scissor_icon from './scissor-without-bg.jpg';
import CardComponent from './CardComponent.js';

class OptionsComponent extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    

    return(
        <div class="container">
          <div class="row">
            <h4>Please select an option from below :</h4>
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