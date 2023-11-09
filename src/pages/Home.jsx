import FotoHome from '../components/img/FotoHome.png'
import Abelha from '../components/img/Abelha.png'
import Store from '../components/img/ChromeStore.png'
import Ilustration from '../components/img/ilustracao.png'

function Home(){
    return(
        <div className="w-full h-full text-center pb-10 pt-20 bg-[#1B0938]">
            <img src={FotoHome} alt="" srcset="" />
            <div className='flex px-24 pt-20 text-white font-bold items-center justify-center'>
                <div className='ps-10'>
                    <h1 className='text-3xl'>Bem vindo a Buzzer, onde tudo tornará sua navegação mais segura e melhor!</h1>
                    <div className='pt-8'>
                        <button className='bg-[#F1B711] w-32 rounded-xl text-2xl text-center h-14'>Ver mais</button>
                    </div>
                </div>
                <div className='pe-10'>
                    <img className=' w-[90em]' src={Ilustration} alt="" srcset="" />
                </div>
            </div>
            <div className='flex px-24 pt-20 text-white font-bold items-center justify-center'>
            <div className='pe-5'>
                    <img className=' pe-5 w-[990px]' src={Abelha} alt="" srcset="" />
                </div>
                <div className=' pe-24'>
                    <h1 className='text-4xl'>A extensão que estará ao seu lado em qualquer lugar, verificando todos os sites suspeitos</h1>
                    
                </div>
            </div>
            <div className='flex pt-20 px-24 text-white font-bold items-center justify-center'>
                <div className='ps-24 flex-col items-center'>
                    <h1 className=' pt-3 text-5xl'>Dísponivel na Chrome Web Store</h1>
                    <div className='pt-8'>
                        <a href="https://chrome.google.com/webstore/detail/buzzer/gnhopbckidbokdfnjplchlnjdnaihkkj?hl=pt-BR">
                            <button className='bg-[#F1B711] w-32 rounded-xl text-2xl text-center h-14'>Acessar</button>
                        </a>
                    </div>
                </div>
                <div className='pe-3'>
                    <img className=' w-[50em]' src={Store} alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default Home