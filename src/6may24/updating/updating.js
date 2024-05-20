import { Component } from "react";


class UpdatingPhase extends Component{

    state={
        count:0,
        color:"green"

    }
    incrementAction=()=>{
        this.setState({
            count:this.state.count+1
        })


    }

    static getDerivedStateFromProps(props){
        console.log(props);
        console.log("getDerivedStateFromProps",props);
        return{
            color:props.color
        };
          
    }
    render(){
        console.log("render")
        return(
            <>
            <h1 style={{color:this.state.color}}>Updating  Phase</h1>
            <h3>{this.state.count}</h3>
            <button  onClick={this.incrementAction}>click to increment</button>
            </>

        )
    }
} 
export default UpdatingPhase