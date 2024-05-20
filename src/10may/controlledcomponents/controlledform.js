import { useState } from "react";



function ControlledComponent(){
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");


    function handleSubmit(event){
        event.preventDefault();

        if(name.length>10 && password.length>10){
        alert("YOUR NAME OR PASSWORD SHOULD BE LESS THAN 10 CHARACTERS");
        
    }else{
        alert("LOGIN SUCCESS")

    }

    }
    
    return(
        <>
        <div>
            <h1>FORMS USING UNCONTROLLED COMPONENTS</h1>
            <form>
                <label>USERNAME:</label>
                <input type="text" name="name" value={name} onChange={(form)=>setName(form.target.value)}></input><br/>
                <label>PASSWORD:</label>
                <input type="text" password="password" value={password} onChange={(form)=>setPassword(form.target.value)}></input><br/>
                <button  type="submit" onClick={handleSubmit}>SUBMIT</button>

            </form>

        </div>
        </>

    );
}
export default ControlledComponent















