import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		// this.state={
		// 	para:"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
		// }
		this.handleClick=this.handleClick.bind(this);
	};
	handleClick() {
		return 	<p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>

		//console.log( "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")
	  }
    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				
				<button id="click" onClick={this.handleClick}>
					Click Me
				</button>
				<p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
    		</div>
    	);
    }
}


export default App;

