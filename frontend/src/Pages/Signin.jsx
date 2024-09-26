import { useState } from "react"
import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"

function Signin() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    return (
        <div className="h-screen bg-gradient-to-r from-cyan-200 to-blue-400 flex justify-center">          
            <div className="flex flex-col justify-center">
                <div className="bg-white w-80 p-2 px-4 rounded-md">
                    <Heading label={"Sign In"} />
                    <SubHeading label={"Enter your credentials to access your account"} />
                    <InputBox onChange={(e)=> setUsername(e.target.value) } type={"text"} placeholder={"Username"} value={username} />
                    <InputBox onChange={(e)=>  setPassword(e.target.value)} type={"password"} placeholder={"Password"} password={password} />
                    <Button onClick={()=>alert("Sign In alert ")}>Sign In</Button>
                    <BottomWarning label={"Don't have an account?"} buttonText={"SignUp"} to={"/signup"} />
               </div>
            </div>             
        </div>
    )
}

export default Signin
