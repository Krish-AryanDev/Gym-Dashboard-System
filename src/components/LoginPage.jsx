import LoginPageImg from "../assets/LoginPageImg.jpg"
import LoginForm from "./LoginForm"

function LoginPage(){
    return(
        <>
            <div className="flex w-full h-screen">
                {/* Left image section */}
                <div className="hidden md:block md:w-1/2 relative h-screen">
                    <img
                    src={LoginPageImg}
                    alt="Gym"
                    className="h-full w-full object-cover object-top"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 w-full h-full bg-black/50 flex flex-col justify-center items-center">
                        <h1 className="text-4xl font-bold text-white mb-4 text-center">
                            Push Your Limits
                        </h1>
                        <p className="text-white text-lg text-center px-6">
                            Join us today and achieve your fitness goals with our dashboard.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 ">
                    <LoginForm />
                </div>
            </div>
        </>
    )
}

export default LoginPage