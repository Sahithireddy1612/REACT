const FormComponent=()=>{
    return(
        <>
        <form>
            <label for="email">NAME: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="email" id="email" name="email" required></input><br></br>
         <label for="email">USERNAME: &nbsp;&nbsp;&nbsp;</label>
        <input type="email" id="email" name="email" required></input><br/>  
        <label for="email">Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="email" id="email" name="email" required></input><br></br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required></input><br></br>
        <button type="submit">Login</button>
        </form>
        <hr/>
        </>
    )
}
export default FormComponent

