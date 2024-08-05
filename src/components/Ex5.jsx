import React, { Component } from 'react'

export default class Ex5 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            steps:1
        };

        /*ignore bind for now we will explain about binding soon. 
        Just know that it is necessary for right working of 'this' keyword*/
        
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(){
        alert('ClickHandler Function');
        this.setState({
            steps: this.state.steps + 1
        });
    }
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col">
                <p><b>5) Class Component Event Listener/ Binding inside the constructor</b></p>
                <p>We have to call this.setState method (for class component) or useState hook (for functional component) inside the onClick handler to update state value.</p>

                <p><b>Steps : </b> {this.state.steps}</p>

                <button className="btn btn-outline-info" onClick={this.clickHandler}>Ex5 - Click Handler</button>
            </div>
        </div>
      </div>
    )
  }
}
