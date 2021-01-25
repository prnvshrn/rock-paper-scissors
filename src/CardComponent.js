import React from 'react';

class CardComponent extends React.Component {
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div><img src = {this.props.card_img} onClick={this.props.ResultPropChild}/>{this.props.card_title}</div>
        );
    }
}

export default CardComponent;