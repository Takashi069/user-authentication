import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css"

const Register = () => {
    const [passwordMatch,setPasswordMatch] = useState(false)
    const[password,setPassword]=useState("")
    const[confirmPassword,setconfirmPassword]=useState("")


    const checkPasswordMatch = ()=>{
        if(password === confirmPassword){
            setPasswordMatch(true)
        }
        else setPasswordMatch(false)
    }
    useEffect(()=>{
        checkPasswordMatch()
    },[confirmPassword,password])

    return ( 
        <div id="wrapper">
            <form id="Registeration">
                <h2 id="heading">Registration</h2>
               {!passwordMatch &&  <p id="WarningMessage">Passwords Do not match</p>}
                <label htmlFor="RegisterUsernameInput" id="RegisterUsernameLabel">Username</label>
                <input type="text" id="RegisterUsernameInput" required autoComplete="off"/>
                <label htmlFor="EmailInput" id="EmailLabel">Email</label>
                <input type="email" id="EmailInput" required autoComplete="off"/>
                <label htmlFor="inputRegisterPassword" id="passwordRegisterLabel">Password</label>
                <input type="password" id="inputRegisterPassword" required onChange={(e)=>{setPassword(e.target.value)}}></input>
                <label htmlFor="ConfirmRegisterPassword" id="passwordConfirmLabel">Confirm Password</label>
                <input type="password" id="ConfirmRegisterPassword" onChange={(e)=>{setconfirmPassword(e.target.value);}}></input>
                {passwordMatch && <button type="submit" id="RegSubmitButton">Create Account</button>}
                {!passwordMatch && <button type="submit" id="RegSubmitButton" disabled>Create Account</button>}
                <Link to="/" id="Back"><button type="button">Go Back</button></Link>
            </form>
        </div>
     );
}
 
export default Register;