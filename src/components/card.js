import React, { Component } from 'react';

class Card extends Component {
    constructor(props){
        super(props);
    }
    render(){
        
        const { name, desc } = this.props;

        return( 
            <>
            <h4>Name: {name}</h4>
            <p>Description: {desc} </p>
            
            </>
        )
    }
}

export default Card;