import React, { Component } from 'react';

class Card extends Component {
    constructor(props){
        super(props);
    }
    render(){
        
        const { name, band } = this.props;

        return( 
            <>
            <h4>{name}. De: {band} <br /></h4>
            
            </>
        )
    }
}

export default Card;