import {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

function Login() {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isValid = Username && password;

  return (
    <>
     <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <Logo />
      <div className="w-full max-w-md p-8 border rounded shadow">
        
        <div className="grid grid-cols-2">
        <h2 className="text-2xl font-bold mb-4 left-4">Login</h2>

        
          <Link to="/signup" className="text-blue-500 no-underline">
          <p className="text-sm col-start-2 text-right mt-4  ">
          Don’t have an account?{" "}</p>
          </Link>
        
        </div>

        <label className="text-sm font-bold mb-4" htmlFor="username">Username</label>
        <input className="w-full mb-4 p-2 border" placeholder="Username" value={Username}
            onChange={(e) => setUsername(e.target.value)} required />
        
        <label className="text-sm font-bold mb-4" htmlFor="password">Password</label>

        <input className="w-full mb-4 p-2 border" placeholder="Password" type="password" value={password}
            onChange={(e) => setPassword(e.target.value)} required />

       <div className="grid grid-cols-2">
       <label className="flex items-center space-x-2">
         <input type="checkbox" className="form-checkbox h-3 w-5 text-blue-600" />
        <span className="text-gray-500">Keep me signed in</span>
       </label>

       <div className="text-right mt-2 col-start-2">
         <a href="/forgot-password" className="text-sm text-black-600 font-bold no-underline">
          Forgot Password?
          </a>
        </div>
      
       </div>

       <br />

        <button
          onClick={() => navigate("/dashboard")}
            className={`w-full py-2 rounded text-white ${isValid ? "bg-blue-600" : "bg-blue-400 cursor-not-allowed"}`}
            disabled={!isValid}
        >
          Login
        </button>

        <div className="flex items-center w-full my-6">
        <div className="border-t border-gray-300 flex-grow"></div>
         <span className="px-4 text-sm text-gray-500">Login With</span>
         <div className="border-t border-gray-300 flex-grow"></div>
         </div>

    
  {/* Social Buttons Row  */}
  <div className="flex space-x-4">
    {/* Google  */}
    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"
       className="flex items-center space-x-2 px-6 py-3 bg-white border rounded-lg shadow hover:shadow-md">
      <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-6 w-6" />
      <span className="text-gray-700">Google</span>
    </a>

     {/* Twitter */}
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"
       className="flex items-center space-x-2 px-6 py-3 bg-white border rounded-lg shadow hover:shadow-md">
      <img src="https://www.svgrepo.com/show/475689/twitter-color.svg" alt="Twitter" className="h-6 w-6" />
      <span className="text-gray-700">Twitter</span>
    </a>

    {/* Facebook */}
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
       className="flex items-center space-x-2 px-6 py-3 bg-white border rounded-lg shadow hover:shadow-md">
      <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="h-6 w-6" />
      <span className="text-gray-700">Facebook</span>
    </a>
  </div>
</div>

        

      </div>
     
  
    <Navbar />
    </>

  );
}

export default Login;
