import LoginPageImg from "../assets/LoginPageImg.jpg"
import LoginForm from "./LoginForm"

function LoginPage(){
    return(
        <>
            <div className=" flex w-full h-screen">
                <div className="hidden md:block md:w-1/2">
                    <img src={LoginPageImg} 
                    className="h-full w-full object-cover object-top"
                     />

                </div>
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <LoginForm />
                </div>
            </div>
        </>
    )
}

export default LoginPage