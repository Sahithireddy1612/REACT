 //import logo from './logo.svg';
 //import './App.css';
//  import FormComponent from  "./components/form.js"
//  import TableComponent from "./components/table.js"
//  import ListComponent from "./components/lists.js"
//  import ParagraphComponent from "./components/paragraph.js"
//  import ImageComponent from "./components/image.js"
//  import ButtonComponent from "./components/button.js"
//  import ConditionComponent from "./23-04-24/conditional-if-else.js"
//  import TernaryComponent from "./23-04-24/ternary.js"
// import ShortCircuitComponent from "./23-04-24/shortcircuit.js"
 //import Todo from "./3may24/3may.js";
import { Spinner } from "react-bootstrap";
import Product from "./3may24/products.js";
import Mounting from "./6may24/mounting/mounting.js";
import UpdatingPhase from "./6may24/updating/updating.js";
import IdComponent from "./6may24/updating/task7may.js";
import { Component } from "react";
import Productt from "./6may24/updating/idapi.js";
import ProductId from "./6may24/updating/idapi.js";
import ProductCategory from "./6may24/updating/categoryapi.js";
import Corousell from "./8may24/corousel/crousel.js"
//import IplTeams from "./map-filter/listingipl.js"
//import Increment from "./2may24/may2.js"
//import { MDBCard } from "mdb-react-ui-kit";
//import BootstrapComponent from "./stylingcomponents/CARDS/cards.JS";
//import CorouselComponent from "./stylingcomponents/corousel.js"

//import Mynav from "./3may24/navfolder/nav";


 //import CardComponent from "./components/card.js"
 import UseState from "./9may/usestate/usestate.js";
import UseState1 from "./9may/usestate/usestate1.js";
import Todo from "./9may/todo/todo.js";
import Uncontrolled from "./10may/uncontrolledcomponents/form.js";
import UncontrolledComponent from "./10may/uncontrolledcomponents/form2.js";
import LoginForm from "./15may24/loginform/loginform.js";

 class App extends Component {
  state={
    color:"red"
  }

   changeColor=()=>{
    this.setState({
      color:"blue"
    })
   }
   render(){
    return(
      <div>
{/* <UnMounting/> */}
  {/* <IdComponent/> */}
  {/* <UpdatingPhase  color={this.state.color}/> */}
      {/* <button onClick={this.changeColor}>change color</button> */} 
      {/* <Mounting/> */}
      {/* <Spinner/> */}
      {/* <Mynav/> */}
      {/* <Product/> */}
      {/* <Todo/> */}
    {/* <BootstrapComponent/> */}
   {/* <CorouselComponent/> */}
     
     {/* <Increment/>  */}
       {/* <IplTeams/>  */}
      {/* <ShortCircuitComponent/>
      <TernaryComponent/>
      <ConditionComponent/> */}
      {/* <ButtonComponent/>
      <TableComponent/>
   <ListComponent/>
     <ImageComponent/>
     <FormComponent/>
    <ParagraphComponent/> */}
    {/* <ProductId/> */}
    {/* <ProductCategory/> */}
    {/* <Corousell/> */}
    {/* <UseState/> */}
    {/* <UseState1/> */}
    {/* <Todo/> */}
    {/* <Uncontrolled/> */}
    {/* <UncontrolledComponent/> */}
    <LoginForm/>

     
  
      </div>
   
    )

   }
 
}




  export default App