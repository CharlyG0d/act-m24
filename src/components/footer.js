import React, { Component } from 'react';

class Footer extends Component {
    constructor(props){
        super(props)
        this.state = { count: 0 };
    }
  
    increment = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    };
  
    componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
      }
    }
    render(){
        return(
            <footer>
            <section>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Incrementar</button>
            </section>
            </footer>
        )
    }
}

export default Footer;