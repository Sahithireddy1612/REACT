import { useState } from "react"




const LoginForm =()=>{

    const[userName,setUserName]=useState(null)
    const[password,setPassword]=useState(null)
    const [usernameError,setUserNameError]=useState(false)
    const [passwordError,setPasswordError]=useState(false)
    const[loginErrorMessage,setLoginErrorMessage]=useState(null)
    const[login,setLogin]=useState(false)


    const userNameHandler=(event)=>{
        const username=event.target.value
        setUserName(username)

        // hit the server 

        // fetch
        // username 


        // debounce
        if(username.length>10){
            // alert("please enter less than 10 characters")
            setUserNameError("please enter less than 10 characters")
        }else{
            setUserNameError(null)
            console.log(event.target.value)
            

        }
    }

    const passwordHandler=(event)=>{
        const password=event.target.value
        setPassword(password)
        if(password.length>10){
            setPasswordError("Password must be less than 10 characters")

        }else{
            setPasswordError(null)
        }

    }

    const onFormSubmit=(event)=>{

        event.preventDefault()
        const userInfo={
            username:userName,
            password:password
        }

        serverCall(userInfo)

        console.log(userInfo,"userInfo")

    }

    const serverCall=(userInfo)=>{
        fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(userInfo)
})
.then(res => res.json())
.then(response=>{
    if(response.message){
        setLoginErrorMessage(response.message)

    }else{
        //success
        alert("login success")
        setLoginErrorMessage(null)
        success()
    }
});
            
    }

    const success=()=>{
        debugger
        setLogin(true)
        //Navigate to home screen
    }

    // {
    
    //     username: 'kminchelle',
    //     password: '0lelplR',
    //     expiresInMins: 30, // optional, defaults to 60
    //   }

    return(
        <>
        {
            login?
            <>
            <h2>Wellcome user</h2>
            
            </>:
          <form  onSubmit={onFormSubmit} >
    <div className="mb-3 mt-3">
      <label htmlFor="email" className="form-label">
        Email:
      </label>
      <input
        type="text"
        className="form-control"
        id="email"
        placeholder="Enter email"
        name="email"
        value={userName}
        onChange={userNameHandler}

      />
         {
        usernameError &&
        <span style={{color:"red"}} >{usernameError}</span>
      }

      <input
        type="password"
        className="form-control"
        id="password"
        placeholder="Enter Password"
        name="password"
        value={password}
        onChange={passwordHandler}

      />

{
        passwordError &&
        <span style={{color:"red"}} >{passwordError}</span>
      }
     
    </div>

    {
        loginErrorMessage &&
        <span style={{color:"red"}} >{loginErrorMessage}</span>
      }

  { !usernameError && !passwordError && <button type="submit" className="btn btn-primary">
      Submit
    </button>
}
  </form>
}

        
        </>
    )
}

export default LoginForm