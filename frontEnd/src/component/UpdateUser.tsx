import { useState } from "react"
import { useDispatch } from "react-redux"
import { getUserInfo, updateUserInfo } from "../reducer/userSlice"
import { printSuccess } from "../utils/helpFunction"
import { Reset } from "../utils/Reset"


const UpdateUser = (props: any) => {
    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [email, setEmail] = useState()
    const [country, setCountry] = useState()
    const [age, setAge] = useState()

    const dispatch = useDispatch<any>();

    const handleSubmit = (e: any, id: any) => {
        e.preventDefault();
        dispatch(updateUserInfo({ id, firstname, lastname, email, country, age }))
            .then(() => { 
                dispatch(getUserInfo());
                printSuccess("data update successfully")
                Reset({setFirstname, setLastname, setEmail, setCountry, setAge});
              })
    }
    return (
        <>
            <button
                className="cursor-pointer relative block p-[2px_5px] leading-[20px] text-[24px] bg-[#6F37CF] rounded-[20px] border-[1px_solid_#cfcece] text-white top-[5px] left-[1px]"
                onClick={props.close}
            >
                &times;
            </button>

            <div>
                <form onSubmit={(e: any) => handleSubmit(e, props.id)} className="flex flex-col justify-center items-center gap-[40px] h-[calc(100vh-80px)] font-poppins text-white">
                    <div className="flex gap-[20px] w-[100%] justify-center">
                        <input type="text" value={firstname} placeholder="Enter your firstname" className="bg-[#222429] outline-none py-[10px] px-[20px] rounded-[8px] w-[38%]" onChange={(e: any) => { setFirstname(e.target.value) }} />
                        <input type="text" value={lastname} placeholder="Enter your lastname" className="bg-[#222429] outline-none py-[10px] px-[20px] rounded-[8px]  w-[38%]" onChange={(e: any) => { setLastname(e.target.value) }} />
                    </div>
                    <input type="text" placeholder="Enter your email" className="bg-[#222429] outline-none w-[80%] py-[10px] px-[20px] rounded-[8px]" onChange={(e: any) => { setEmail(e.target.value) }} />
                    <input type="text" placeholder="Enter your age" className="bg-[#222429] outline-none w-[80%]  py-[10px] px-[20px] rounded-[8px]" onChange={(e: any) => { setAge(e.target.value) }} />
                    <input type="text" placeholder="Enter your country" className="bg-[#222429] outline-none w-[80%]  py-[10px] px-[20px] rounded-[8px]" onChange={(e: any) => { setCountry(e.target.value) }} />
                    <button className="bg-[#056dff] w-[10em] py-[10px] rounded-[8px]">Submit</button>
                </form>
            </div >

        </>

    )
}

export default UpdateUser;