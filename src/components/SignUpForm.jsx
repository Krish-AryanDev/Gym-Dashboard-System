function SignUpForm({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-96 grid gap-4">
        <h1 className="pl-72 cursor-pointer"
        onClick={onClose}>X</h1>
        <h2 className="text-2xl font-bold text-center text-red-500">Sign Up</h2> 
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition font-semibold">
          Register
        </button>
        
      </div>
    </div>
  );
}

export default SignUpForm