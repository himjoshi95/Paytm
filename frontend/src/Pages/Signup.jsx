import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { useState } from "react"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"


function Signup() {

    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ username, setUsername ] = useState('')
    const [password,setPassword] = useState('')
    return (
        <div className="h-screen bg-gradient-to-r from-cyan-200 to-blue-400 ">
           
            <div className="h-full flex justify-center items-center">
                <div className="bg-white w-80 p-2 px-4 rounded-md">
                    <Heading label={"Sign Up"} />
                    <SubHeading label={"Enter your information to create an account"} />
                    
                    <InputBox onChange={(e)=> setFirstName(e.target.value) } type={"text"} placeholder={"FirstName"} value={firstName} />
                    <InputBox onChange={(e)=> setLastName(e.target.value) } type={"text"} placeholder={"LastName"} value={lastName} />
                    <InputBox onChange={(e)=> setUsername(e.target.value) } type={"text"} placeholder={"Username"} value={username} />
                    <InputBox onChange={(e)=> setPassword(e.target.value) } type={"password"} placeholder={"Password"} value={password} />
                    <Button onClick={()=>alert("Sign Up alert")}>Sign Up</Button>
                    <BottomWarning label={"Already have an account?"} to={"/signin"} buttonText={"SignIn"} />
                </div>
            </div>
            
        </div>
    )
}

export default Signup
