function LoginForm(){
    return(
           <div className="flex justify-center items-center min-h-screen bg-gray-900">
                <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-md w-full border-t-4 border-red-600">
                    <form className="flex flex-col gap-6">
                    <h2 className="text-3xl font-bold text-center text-red-500">Gym Dashboard</h2>

                    <input
                        type="email"
                        placeholder="Email"
                        className="border border-gray-700 p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border border-gray-700 p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                    />

                    <button
                        type="submit"
                        className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition font-semibold"
                    >
                        Login
                    </button>

                    <div className="flex justify-between text-sm text-gray-400">
                        <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
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