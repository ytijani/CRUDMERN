import home from '../assets/home.svg'
import profile from '../assets/profile.svg'
import logout from '../assets/logout.svg'
import logo from '../assets/logo.png'
import trash from '../assets/trash-solid.svg'
import pen from '../assets/pen-solid.svg'
import read from '../assets/eye-solid.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const Navbar = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        setTimeout(() => {
            navigate("/");
            localStorage.setItem('logout', JSON.stringify(true))
        },1000)
    }

    
    return (
        <div className="w-[15em] bg-[#222429] h-[100vh]">
            <h1 className="text-white font-poppins font-semibold text-center py-[20px] border-b-[1px]">CRUD APP</h1>
            <div className='flex flex-col text-white font-poppins gap-[10px] pt-[30px] relative h-[90%] cursor-pointer'>
                <Link to="home" className='flex gap-[10px] hover:bg-[#056dff] p-[12px] mx-[10px] rounded-[8px]'>
                    <img src={home} alt="" />
                    <h1>Home</h1>
                </Link>
                <Link to="addcustomers" className='flex gap-[10px] hover:bg-[#056dff] p-[12px] mx-[10px] rounded-[8px]'>
                    <img src={profile} alt="" />
                    <h1>Add Customers</h1>
                </Link>
                <div onClick={handleLogout} className='flex gap-[10px] absolute bottom-[0px] hover:bg-[#056dff] p-[12px] mx-[10px] rounded-[8px] w-[90%]'>
                    <img src={logout} alt="" />
                    <h1>Log out</h1>
                </div>
            </div>
        </div>
    )
}


export const Header = () => {
    return (
        <div className='h-[65px] w-[100%] flex justify-between items-center'>
            <div className='text-white'>
                <input type="text" placeholder='Search...' className='outline-none bg-[#222429] py-[6px] w-[16em] px-[13px] rounded-[8px]' />
                <button className='bg-[#056dff] ml-[10px] py-[6px] w-[7em] rounded-[8px]'>Search</button>
            </div>
            <div className='text-white flex items-center gap-[10px] mr-[20px]'>
                <img className='w-[30px] h-[30px]' src={logo} alt="" />
                <h1>ytijani</h1>
            </div>
        </div>
    )
}

const data: any = [];
const Home = () => {
    return (
        <div className='w-[100%] h-[100vh] bg-[#1d2025]'>
            <Header />
            <div className='h-[90%] overflow-auto'>
                <div className='myClass  items-center  text-white font-poppins text-center font-semibold pt-[2.5em] '>
                    <h1 className='border-solid border-[1px] py-[10px]'>#</h1>
                    <h1 className='border-solid border-[1px] py-[10px] '>Fullname</h1>
                    <h1 className='border-solid border-[1px] py-[10px] '>Age</h1>
                    <h1 className='border-solid border-[1px] py-[10px]'>Countery</h1>
                    <h1 className='border-solid border-[1px] py-[10px]'>Lastupdated</h1>
                    <h1 className='border-solid border-[1px] py-[10px]'>Action</h1>
                </div>
                {data && data.map((item: any, index: any) => {
                    const { fullname, age, country, lastupdated } = item
                    return (
                        <div key={index} className='myClass text-white items-center text-center font-poppins  border-solid border-[#eee] border-[1px] py-[12px]'>
                            <p>{index}</p>
                            <p>{fullname}</p>
                            <p>{age}</p>
                            <p>{country}</p>
                            <p>{lastupdated}</p>
                            <p className='flex pl-[1em] lg:pl-[2em] xl:pl-[3.7em] 2xl:pl-[7.5em] gap-[20px] '>
                                <div className=' w-[30px] h-[30px]  bg-[#056dff] flex items-center justify-center rounded-[6px] cursor-pointer'><img className=' ' src={read} alt="" /></div>
                                <div className='w-[30px] h-[30px]  bg-[#056dff] flex items-center justify-center rounded-[6px] cursor-pointer'><img src={pen} alt="" /></div>
                                <div className='w-[30px] h-[30px]  bg-[#DC0101] flex items-center justify-center rounded-[6px] cursor-pointer'><img src={trash} alt="" /></div>
                            </p>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Home;