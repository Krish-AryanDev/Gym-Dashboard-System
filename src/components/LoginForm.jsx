import { useState,useEffect } from "react"
import SignUpForm from "./SignUpForm.jsx";


function LoginForm(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showSignUp, setShowSignUp] = useState("false");

    useEffect(() => {
        if(!localStorage.getItem("user")){
            localStorage.setItem(
                "user", JSON.stringify({email: "Thisisatest@gmail.com" , password: "Test@1234"})
            );
        }
    },[]);

    const handleLogin = (e) => {
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem("user"));

        if(email == user.email && password === user.password){
            alert("you are logged in")
        }else{
            alert("Invalid Email or Password")
        }
    }

    return(
           <div className="flex justify-center items-center min-h-screen bg-gray-900">
                <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-md w-full border-t-4 border-red-600">
                    <form className="flex flex-col gap-6"
                        onSubmit={handleLogin}>
                    <h2 className="text-3xl font-bold text-center text-red-500">Login</h2>

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        className="border border-gray-700 p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        className="border border-gray-700 p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                    />

                    <button
                        type="submit"
                        className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition font-semibold"
                        onClick={handleLogin}
                    > 
                        Login
                    </button>
                    <div className="flex justify-center -mt-5 ">
                        <div className="text-gray-300" >
                            NewUser?
                        </div>
                        <div className="text-blue-400 ml-1 cursor-pointer "
                        onClick={()=>{
                            setShowSignUp(true);
                        }}>
                            Sign Up
                        </div>
                    </div>
                    {showSignUp && <SignUpForm onClose={() => setShowSignUp(false)} />}

                    <div className="flex justify-between text-sm text-gray-400">
                        <label className="flex items-center">
                        <input type="checkbox" className="mr-2" 
                        />
                        Remember me
                        </label>
                        <a href="#" className="hover:text-red-500 transition">Forgot password?</a>
                    </div>
                    </form>

                </div>
                </div>
    )
}

export default LoginForm