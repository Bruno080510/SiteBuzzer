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
            <div className=" flex text-xl font-bold items-center">
                <Link to='/servicos'>
                    <h1 className=" pe-6">Serviços</h1>
                </Link>
                <h1 className=" pe-6">Sobre</h1>
                <h1>Blog</h1>
            </div>
        </div>
    )
}

export default Navbar