import { useEffect, useState } from "react";
import { Header } from "./Home";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUserInfo } from "../reducer/userSlice";



const AddCustomers = () => {

    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [email, setEmail] = useState()
    const [country, setCountry] = useState()
    const [age, setAge] = useState()

    const dispatch = useDispatch<any>();
    const navigate = useNavigate()
    useEffect(() => {
        const logtoutData = localStorage.getItem("logout");
        if (logtoutData) {
            if (JSON.parse(localStorage.getItem("logout") || "")) {
                navigate("/");
            }
        }
    }, [])

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(addUserInfo({firstname,lastname,email,country,age}))
    }

    return (
        <div className='w-[100%] h-[100vh]'>
            <Header />
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-[40px] h-[calc(100vh-80px)] font-poppins text-white">
                <div className="flex gap-[20px] ">
                    <input type="text" placeholder="Enter your firstname" className="bg-[#222429] outline-none py-[10px] px-[20px] rounded-[8px]" onChange={(e: any) => { setFirstname(e.target.value) }} />
                    <input type="text" placeholder="Enter your lastname" className="bg-[#222429] outline-none py-[10px] px-[20px] rounded-[8px]" onChange={(e: any) => { setLastname(e.target.value) }} />
                </div>
                <input type="text" placeholder="Enter your email" className="bg-[#222429] outline-none w-[46em] py-[10px] px-[20px] rounded-[8px]" onChange={(e: any) => { setEmail(e.target.value) }} />
                <input type="text" placeholder="Enter your age" className="bg-[#222429] outline-none w-[25em] bg-[#222429] outline-none w-[46em] py-[10px] px-[20px] rounded-[8px]" onChange={(e: any) => { setAge(e.target.value) }} />
                <input type="text" placeholder="Enter your country" className="bg-[#222429] outline-none w-[25em] bg-[#222429] outline-none w-[46em] py-[10px] px-[20px] rounded-[8px]" onChange={(e: any) => { setCountry(e.target.value) }} />
                <button className="bg-[#056dff] w-[10em] py-[10px] rounded-[8px]">Submit</button>
            </form>
        </div>
    )
}

export default AddCustomers;