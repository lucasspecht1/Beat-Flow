import imagem from '/media/FundoLogin.png'
import olho_f from '/media/olho_f.png';
import olho from '/media/olho.png';
import { useState } from 'react';

export default function MolduraLogin () {
    const [tipoSenha2, setTipoSenha2] = useState(true);
    const [tipoSenha, setTipoSenha] = useState(true);

    return (
        <div className="w-auto h-auto overflow-hidden flex justify-center items-center">
            <div className="flex w-[67%] h-[45em]">
              <img src={imagem} className='rounded-tl-3xl rounded-bl-3xl' />
              <div className='h-[100%] w-[70%] bg-[#0c0e16] font-poppins rounded-br-3xl rounded-tr-3xl'>
                <h1 className='mt-14 text-white text-center text-[21px]'>CRIE SUA CONTA GRATUITAMENTE</h1>
                <div className='flex flex-col justify-center space-y-8 mt-14 w-[100%]'>
                    <div className='w-[60%] self-center'>
                        <h2 className='ml-4 mb-1 text-left text-[13px] text-white font-semibold'>Nome Completo</h2>
                        <input placeholder='Preencha seu nome aqui' className='w-[100%] h-10 focus-within:outline-none focus-within:ring-2 focus-within:ring-[#182d8b] shadow-lg text-[10px] pl-4 text-white font-semibold bg-[#171D31] rounded-lg' />
                    </div>
                    <div className='w-[60%] self-center'>
                        <h2 className='ml-4 mb-1 text-left text-[13px] text-white font-semibold'>E-mail</h2>
                        <input placeholder='Preencha seu E-mail aqui' className='w-[100%] h-10 focus-within:outline-none shadow-lg focus-within:ring-2 focus-within:ring-[#182d8b] text-[10px] pl-4 text-white font-semibold bg-[#171D31] rounded-lg' />
                    </div>
                    <div className='w-[60%] self-center'>
                        <h2 className='ml-4 mb-1 text-left text-[13px] text-white font-semibold'>Senha</h2>
                         <span className='flex w-[100%] h-auto shadow-lg text-[10px] focus-within:ring-2 focus-within:ring-[#182d8b] text-white font-semibold bg-[#171D31] rounded-lg'>
                            <input type={`${tipoSenha ? 'password' : 'text' }`} placeholder='Preencha sua Senha aqui' className='focus-within:outline-none self-start w-[90%] h-10 bg-transparent text-[10px] pl-4 text-white font-semibold'  />
                            <button className='h-10 w-[10%] flex justify-end items-center' onClick={() => setTipoSenha(!tipoSenha)}>
                                <img src={tipoSenha ? olho : olho_f} className='w-[42%] mr-3' />
                            </button>
                        </span>
                    </div>
                    <div className='w-[60%] self-center'>
                        <h2 className='ml-4 mb-1 text-left text-[13px] text-white font-semibold'>Confirme Senha</h2>
                        <span className='flex w-[100%] h-auto shadow-lg text-[10px] text-white focus-within:ring-2 focus-within:ring-[#182d8b] font-semibold bg-[#171D31] rounded-lg'>
                            <input type={`${tipoSenha2 ? 'password' : 'text' }`} placeholder='Confirme sua Senha aqui' className='focus-within:outline-none self-start w-[90%] h-10 bg-transparent text-[10px] pl-4 text-white font-semibold'  />
                            <button className='h-10 w-[10%] flex justify-end items-center' onClick={() => setTipoSenha2(!tipoSenha2)}>
                                <img src={tipoSenha2 ? olho : olho_f} className='w-[42%] mr-3' />
                            </button>
                        </span>
                    </div>
                    <div className='w-[60%] self-center'>
                        <p className='text-[12px] font-semibold ml-2 text-white'>Já possui conta ? Faça <a className='text-blue-500 cursor-pointer' href='http://localhost:5173/login'>Login</a></p>
                    </div>
                    <button className='w-[31%] rounded-lg text-white h-12 self-center bg-[#1C254F]'>CRIAR CONTA</button>
                    <p className='text-white self-center'>-- OU --</p>
                </div>
              </div>
            </div>
        </div>
    ); 
}