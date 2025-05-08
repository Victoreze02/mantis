import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password,  setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const isValid = name && email && password && phone;

  return ( 
    <>
    <div className="bg-white  min-h-screen flex flex-col items-center justify-center">
      
   
      
      <div className="w-full   max-w-md p-8 border rounded shadow">
      <form action="">
        <div className="grid grid-cols-2">
        <h2 className="text-2xl font-bold left-4 mb-4 text-2xl">Sign up</h2>

        <Link to="/" className="text-blue-500 no-underline">
         <p className="text-sm col-start-2 text-right mt-4  ">
                  Already have an account?{" "}
          </p>
          </Link>
        </div>

        <h4 className="font-bold left-4 mb-4 text-1xl">Organization Admin Details</h4>
        <hr />

        <div className="grid grid-cols-3 space-x-2">
        <label className="text-sm font-bold mb-4" htmlFor="text">First Name*
        <input className="w-full mb-4 p-2 border" type="text" name="first-name" id="first-name" placeholder="First Name" value={name}
        onChange={(e) => setName(e.target.value)}/>
        </label>
        

        <label className="text-sm font-bold mb-4" htmlFor="text">Middle Name*
        <input className="w-full mb-4 p-2 border" type="text" name="middle-name" id="middle-name" placeholder="Middle Name" 
        />
        </label>
        

        <label className="text-sm font-bold mb-4" htmlFor="text">Last Name*
        <input className="w-full mb-4 p-2 border" type="text" name="last-name"  id="last-name" placeholder="Last Name"
        />
        </label>
        </div>

       

        <div className="grid grid-cols-3 space-x-2">
        <label className="text-sm font-bold mb-4" htmlFor="text">User Name*
        <input className="w-full mb-4 p-2 border" type="text" name="user-name" id="user-name" placeholder="Username" 
        />
        </label>
        

        <label className="text-sm font-bold mb-4" htmlFor="text">Email*
        <input className="w-full mb-4 p-2 border" type="email" name="email" id="email" placeholder="Email Address" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        </label>
        

        <label className="text-sm font-bold mb-4" htmlFor="number">Phone*
        <input className="w-full mb-4 p-2 border" type="number" name="phone"  id="phone" placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}/>
        </label>
        </div>




        <div className="grid grid-cols-2 space-x-2">
        <label className="text-sm font-bold mb-4" htmlFor="text">Address*
        <input className="w-full mb-4 p-2 border" type="text" name="address" id="address" placeholder="Address" 
        />
        </label>
        

        <label className="text-sm font-bold mb-4" htmlFor="password">Password*
        <input className="w-full mb-4 p-2 border" type="password" name="password" id="password" placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
        </label>
  
        </div>


        {/* Organization Information  */}

        <h4 className="font-bold left-4 mb-4 text-1xl">Organization Information</h4>
        <hr />


        <div className="grid grid-cols-2 space-x-2">
        <label className="text-sm font-bold mb-4" htmlFor="text">Organization Name*
        <input className="w-full mb-4 p-2 border" type="text" name="organization-name" id="organization-name" placeholder="Organization Name" 
        />
        </label>
        

        <label className="text-sm font-bold mb-4" htmlFor="description">Description*
        <input className="w-full mb-4 p-2 border" type="text" name="description" id="description" placeholder="Description" 
        />
        </label>
        </div>




        <div className="grid grid-cols-2 space-x-2">
        <label className="text-sm font-bold mb-4" htmlFor="email">Organization Email*
        <input className="w-full mb-4 p-2 border" type="email" name="organization-email" id="organization-email" placeholder="Email Address" 
        />
        </label>
        

        <label className="text-sm font-bold mb-4" htmlFor="organization-phone">Organization Phone*
        <input className="w-full mb-4 p-2 border" type="phone" name="organization-phone" id="organization-phone" placeholder="Phone" 
        />
        </label>
        </div>

    

        <p>By Signing up, you agree to our <span href="/terms" className="text-sm text-blue-600 font-bold no-underline">Terms of Service</span> and <span href="/privacy-policy" className="text-sm text-blue-600 font-bold no-underline">Privacy Policy</span></p>

        <button 
         onClick={() => navigate("/")}
          className={`w-full py-2 rounded text-white ${isValid ? "bg-blue-600" : "bg-blue-600 cursor-not-allowed"}`}
          disabled={!isValid}
        >
          Create Account
        </button>

        </form>
      </div>
      
    </div>
   
    
    </>
  );
}

export default Signup;
