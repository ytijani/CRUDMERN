import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, } from "react-router-dom";
import camera from '../assets/camera.svg'
import bcrypt from 'bcryptjs'

const Register = () => {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [file, setFile] = useState<any>();
    const [image, setImage] = useState<string | null>(null);
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate()

    const imageRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        const logtoutData = localStorage.getItem("logout");
        if (logtoutData) {
            if (!JSON.parse(localStorage.getItem("logout") || "")) {
                navigate("/home");
            }

        }
    }, [])

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const reader = new FileReader();
        let image = null;
        reader.addEventListener('load', () => {
            image = reader.result;
            const hashpassword = bcrypt.hashSync(password, 10);
            localStorage.setItem('user', JSON.stringify({
                username,
                email,
                image,
                password: hashpassword,
            }))
        })

        reader.readAsDataURL(file)
        setTimeout(() => {
            navigate("/");
            localStorage.setItem('logout', JSON.stringify(true))
        }, 600)
    }

    const uploadimage = (e: any) => {
        e.preventDefault();
        imageRef.current?.click()
    }

    const handleFileChange = (e: any) => {
        const imageSelected = e.target.files?.[0];
        if (imageSelected) {
            setImage(URL.createObjectURL(imageSelected))
            setFile(imageSelected)
        }
    }
    return (
        <section className="h-[100vh] w-[100vw] flex justify-center items-center bg-[#eee]">
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center bg-[#fff] gap-[26px]  border-solid border-[1px] border-[#eee] w-[30em] h-[29em] font-poppins rounded-[8px]">
                <h1 className="font-semibold">Register</h1>
                <img src={image ? image : camera} onClick={uploadimage} alt="" className="w-[80px] h-[80px] cursor-pointer" />
                <input onChange={handleFileChange} accept="images/*" type="file" className="hidden" ref={imageRef} />
                <input type="text" placeholder="Enter Your Username" className="w-[20em] py-[8px] px-[8px] rounded-[8px] outline-none border-solid border-[#eee] border-[1px]" onChange={(e: any) => setUsername(e.target.value)} />
                <input type="text" placeholder="Enter Your email" className="w-[20em] py-[8px] px-[8px] rounded-[8px] outline-none border-[#eee] border-[1px]" onChange={(e: any) => setEmail(e.target.value)} />
                <input type="text" placeholder="Enter Your Password" className="w-[20em] py-[8px] px-[8px] rounded-[8px] outline-none border-[#eee] border-[1px]" onChange={(e: any) => setPassword(e.target.value)} />
                <button type="submit" className="outline-none bg-[#056dff] w-[20em] text-white  py-[8px] rounded-[8px]">Submit</button>
                <a>Already have account? <Link to="/" className="text-[#056dff] cursor-pointer">Login</Link></a>
            </form>
        </section>
    )
}


export default Register;