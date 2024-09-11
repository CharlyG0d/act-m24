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
                <h2>Mi nombre es: {this.state.name}</h2>
                <button onClick={() => this.setState({ name: "Charly" })}> Chance Name</button>
                <ol>  
                <h3>Canciones favoritas</h3>  
                    <li><Card name="Scar tissue" band="Red hot chili peppers"/></li>  
                    <li><Card name="Amarela" band="Sputnik"/></li>
                    <li><Card name="No es la copa mundial" band="Say ocean "/></li>  
                    <li><Card name="Know your enemy" band="Green day"/></li>  
                    <li><Card name="Sleepwalking" band="Bring me the horizon"/></li>  
                </ol>

                
            </main>
        )
    }
}

export default Main;