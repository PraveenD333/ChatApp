import React, { useContext,useEffect,useState } from 'react'
import assets from '../assets/assets'
import { AuthContext } from '../../context/AuthContext.jsx'
import { useNavigate } from 'react-router-dom'


const LoginPage = () => {
  

  const [currState, setCurrState] = useState("Sign up")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [bio, setBio] = useState("")
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);
  const [isLoading,setIsLoading]=useState(false);

  const { login,authUser } = useContext(AuthContext)

  const navigate=useNavigate();

    useEffect(() => {
    if (authUser) {
      console.log("Auth user detected,navigating....");
      
      navigate('/', { replace: true });
      setIsLoading(false);
    }
  }, [authUser, navigate]);


  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (currState === 'Sign up' && !isDataSubmitted) {
      setIsDataSubmitted(true);
      return;
    }
    setIsLoading(true);
    try {
      const success= await login(currState === 'Sign up' ? 'signup' : 'login', { fullName, email, password, bio });
      if(!success){
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Login error:",error);
      setIsLoading(false);
    }
  }



  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center
    gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-sm">

      {/* Left */}
      <img src={assets.logo_big} alt="" className="w-[min(30vw,250px)]" />

      {/* Right */}
      <form onSubmit={onSubmitHandler} className="border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg">
        <h2 className="font-medium text-2xl flex justify-between items-center">
          {currState}
          {isDataSubmitted && <img onClick={() => setIsDataSubmitted(false)} src={assets.arrow_icon} alt="" className="w-5 cursor-pointer" />}

        </h2>

        {currState === 'Sign up' && !isDataSubmitted && (
          <input onChange={(e) => setFullName(e.target.value)} value={fullName}
            type="text" className="p-2 border border-gray-500 rounded-md 
          focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-transparent" placeholder="Full Name" required />
        )}
        {!isDataSubmitted && (
          <>
            <input onChange={(e) => setEmail(e.target.value)} value={email}
              type="email" placeholder='Email' required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2
          focus:ring-indigo-400 bg-transparent"/>

            <input onChange={(e) => setPassword(e.target.value)} value={password}
              type="password" placeholder='Password' required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2
          focus:ring-indigo-400 bg-transparent"/>
          </>
        )}

        {currState === "Sign up" && isDataSubmitted && (
          <textarea onChange={(e) => setBio(e.target.value)} value={bio}
            rows={4} className="p-2 border border-gray-500 rounded-md 
          focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
            placeholder='Provide a Short Bio....' required></textarea>
        )}

        {/* <button type='submit' className="py-3 bg-gradient-to-r from-purple-400
        to-violet-600 text-white rounded-md cursor-pointer">
          {currState === "Sign up" ? "Create Account" : "Login Now"}
        </button> */}

        <button 
  type='submit' 
  disabled={isLoading}
  className={`
    py-3 bg-gradient-to-r from-purple-400 to-violet-600 
    text-white rounded-md relative
    ${isLoading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}
    transition-all duration-200 hover:opacity-90
  `}
>
  {isLoading ? (
    <span className="flex items-center justify-center gap-2">
      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
      </svg>
      {currState === "Sign up" ? "Creating Account..." : "Logging in..."}
    </span>
  ) : (
    currState === "Sign up" ? "Create Account" : "Login Now"
  )}
</button>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <input type="checkbox" />
          <p>Agree To The Terms Of Use & Privacy Policy..</p>
        </div>

        <div className="flex flex-col gap-2">
          {currState === "Sign up" ? (
            <p className="text-sm text-gray-600">Already have an Account? <span
              onClick={() => { setCurrState("Login"); setIsDataSubmitted(false) }}
              className="font-medium text-violet-500 cursor-pointer">Login Here</span></p>
          ) : (
            <p className="text-sm text-gray-600">Create An Account <span
              onClick={() => setCurrState("Sign up")}
              className="font-medium text-violet-500 cursor-pointer">Click Here</span></p>
          )}
        </div>

      </form>
    </div>
  )
}

export default LoginPage