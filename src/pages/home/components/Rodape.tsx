import Logo from '/media/logo.png'
import gitlab from '/media/gitlab.png';
import instagram from '/media/instagram.png';

export default function Rodape() {
    return (
        <div className='to-[#000000] from-[#151C2B] bg-gradient-to-b -mt-[12%] flex w-full '>
            <div className='mt-[40%] w-full flex items-center self-end justify-between bg-[#05060B] h-40 border-t-[2px] border-[#0e1422]'>               
                <div className='flex flex-row ml-10 space-x-10'>
                    <img src={gitlab} className='w-8 cursor-pointer'/>
                    <img src={instagram} className='w-8 cursor-pointer'/>
                </div>
                <img src={Logo} className='w-20'/>
                <p className="text-white mr-10">© 2024 - Beat Flow</p>
            </div>
        </div>
    );
}