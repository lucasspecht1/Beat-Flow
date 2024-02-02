import Logo from '/media/logo.png'

export default function NavBar () {
    return (
        <nav id="Navbar" className='w-full flex flex-row text-center justify-between mb-28'>
            <img src={Logo} className='w-24 max-[1000px]:w-36 ml-6 mt-6'/>
            <div className='space-x-14 text-white mr-5 pt-10 max-[1000px]:hidden'>
                <span className='space-x-7'>
                    <a className=' cursor-pointer'>Planos</a>
                    <a className=' cursor-pointer'>Recursos</a>
                    <a className=' cursor-pointer'>Musicas</a>
                </span>
                <span className='space-x-8 text-sm'>
                    <button className='hover:scale-105 duration-300 transition-all border-2 h-12 border-gray-400 rounded-lg w-40'>Login</button>
                    <button className='hover:scale-105 duration-300 transition-all border-2 h-12 bg-[#044DB9] rounded-lg border-[#044DB9] w-40'>Cadastrar-se</button>
                </span>
            </div>
        </nav> 
    );
}