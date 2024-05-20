import { Component } from "react";
import Button from "react-bootstrap/Button";


class Todo extends Component {
  constructor() {
    super();
    this.state = {
      items: ["Rose", "Sunflower","Jasmine"]
    }
}
    addingItems=()=>{
        const itms=[...this.state.items,"Lotus"]
        this.setState({
            items:itms
        })
    }

    empty=()=>{
        const itms=[]
        this.setState({
            items:itms
        })
    }

    selectedDelete=(index)=>{
        const res =this.state.items.filter((v,i)=>{
            return i!==index
        })
        this.setState({
            items:res
        })
    }

    selectedUpdate=(index)=>{
        const newflower=prompt("enter updated flower")
        const upd=this.state.items.map((flower,i)=>{
            if(index===i){
                return newflower
            }
            else{
                return flower
            }
        })
        this.setState({
            items:upd
        })
    }
  
  render() {
    return (
      <>
        <h1>FLOWERS</h1>
        <Button onClick={this.addingItems}>Add Items</Button>
        <Button onClick={this.empty} >Clear Items</Button>
        {this.state.items.map((items,index) => {
          return (
            <>
              <h4>{index+1}.{items}</h4>
              <Button onClick={()=>this.selectedDelete(index)} >Delete</Button>
              <Button onClick={()=>this.selectedUpdate(index)} >Update</Button>
            </>
          );
        })}
      </>
    );
  }
}
export default Todo;