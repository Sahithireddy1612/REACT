import { useState } from "react";



function ControlledComponent(){
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const[nameError,setNameError]=useState(false);
    const[passwordError,setPasswordError]=useState(false);


    function handleSubmit(event){
        event.preventDefault();

        if(name.length>10 || password.length>10){
      setNameError(name.length>10);
      setPasswordError(password>10);
        
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
                <input type="text" name="name" value={name} onChange={(form)=>{setName(form.target.value);
                setNameError(form.target.value.length>10); }}/><br/>
                     {nameError && <span style={{ color: "red" }}>Name should be less than 10 characters</span>}
                     <br/>
                    
                <label>PASSWORD:</label>
                <input type="text" value={password} onChange={(form)=>{setPassword(form.target.value);
                setPasswordError(form.target.value.length>10);}}/>
                    <br/>
                     {passwordError && <span style={{ color: "red" }}>Password should be less than 10 characters</span>}
                     <br/>
                    
                    
                    
                <button  type="submit" onClick={handleSubmit}>SUBMIT</button>

            </form>

        </div>
        </>

    );
}
export default ControlledComponent















