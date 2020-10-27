import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state={
			isShow:false
		}
		this.handleClick=this.handleClick.bind(this);
	};
	handleClick() {
		this.setState({isShow:true})

		//console.log( "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")
	  }
    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
		                {this.state.isShow ? (<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>):null}
}
				<button id="click" onClick={this.handleClick}>
					Click Me
				</button>
    		</div>
    	);
    }
}


export default App;

