import React, { Component } from "react";
import Card from "./card";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "Carlos" }
       
    }
    

    render(){
        const userImage = {
            imageUrl: 'https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png',
            imageSize: 90,
          };

        return (
            <main>
                <img className="avatar" src={userImage.imageUrl} alt={'Foto de ' + userImage.name} style={{ width: userImage.imageSize, height: userImage.imageSize}} />
                <h2>My name is: {this.state.name}</h2>
                <button onClick={() => this.setState({ name: "Charly" })}> Chance Name</button>
                <ul>    
              <li><Card name="HTML" desc="Estructura"/></li>  
              <li><Card name="CSS" desc="Estilos"/></li>
              <li><Card name="Javascript" desc="Funciones"/></li>  
              <li><Card name="React" desc="Base"/></li>  
                </ul>

                
            </main>
        )
    }
}

export default Main;