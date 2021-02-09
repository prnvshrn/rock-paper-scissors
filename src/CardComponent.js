import React from 'react';

class CardComponent extends React.Component {
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div><img src = {this.props.card_img} alt={this.props.card_title} onClick={this.props.ResultPropChild}/><h5>{this.props.card_title}</h5></div>
        );
    }
}

export default CardComponent;