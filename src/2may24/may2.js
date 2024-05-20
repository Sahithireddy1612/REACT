import { Component } from "react";
import React from "react";
import './2may.css'

class Increment extends Component {
  state = {
    Item :"AIRBUDS",
    img: "data:image/jpeg;base64,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",
    itemCount: 0,
  };
 
  // state={
  //   products:[{},{}]
  // }
  Inccount = ()=>{
    this.setState({
        itemCount:this.state.itemCount+1
    })
  }
  Reset = ()=>{
    this.setState({
        itemCount:0
    })
  }
  Del = ()=>{
    this.setState({
        itemCount:this.state.itemCount-1
    })
  }
  render() {
    return (
      <div>
        <h2>ADD TO CART</h2>
        <img src={this.state.img} alt="AIR BUDS" height={300} width={300} />
        <p>{this.state.item}</p>
        {this.state.itemCount > 0 && (
          <>
            <p>No. of items added:<b> {this.state.itemCount}</b></p>
            <button onClick={this.Del}>Delete</button>
          </>
         )} 
        <button onClick={this.Inccount}>Add to Cart</button>
       {this.state.itemCount>0 && (
        <>
        <button onClick={this.Reset}>Reset Cart</button>

        </>
       )
       }
      </div>
    );
  }
}
export default Increment;