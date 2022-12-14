import { useLocation, useNavigate } from "react-router-dom";

const TopNav = () => {
  //location will help us get the current location
  const location = useLocation();
  // declaring the navigation hook, a custom hook
  const navigate = useNavigate()
  console.log(location)

  return (
  
  <div className=" mx-5 flex flex-row gap-x-24 justify-evenly bg-slate-500 my-4 text-2xl rounded-lg">
    <div onClick={() => navigate("")} className={`hover:underline flex decoration-4 cursor-pointer 
    ${location.pathname === "/" ? " bg-orange-500" : ""}`}
    >HOME</div>
    <div onClick={() => navigate("/land")} className={`hover:underline flex cursor-pointer 
    ${location.pathname === "/land" ? " bg-green-700" : ""}`}>LAND</div>
    <div onClick={() => navigate("/sea")} className={`hover:underline flex cursor-pointer 
    ${location.pathname === "/sea" ? " bg-blue-500" : ""}`}>SEA</div>
    <div onClick={() => navigate("/sky")} className={`hover:underline flex cursor-pointer 
    ${location.pathname === "/sky" ? " bg-blue-800" : ""}`}>SKY</div>
    <div onClick={() => navigate("/sign-up")} 
    className="flex cursor-pointer">REGISTER</div>
  </div>
  )
}

export default TopNav;