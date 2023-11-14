import Logo from './img/BuzzerLogo.png'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <div className=" fixed px-10 bg-[#1B0938] shadow-lg w-screen text-white h-20 flex items-center justify-between">
            <Link to='/'>
                <div className=' flex items-center'>
                    <img className=' w-16' src={Logo} alt="" srcset="" />
                    <h1 className=' font-bold text-3xl p-2'>Buzzer</h1>
                </div>
            </Link>
            <div className=" flex text-xl cursor-pointer text-center pe-14 font-bold items-center">
                <Link to='/blog'>
                    <h1>Blog</h1>
                </Link>
            </div>
        </div>
    )
}

export default Navbar