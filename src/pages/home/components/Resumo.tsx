import Reprodutor from '/public/media/player.png'

export default function Resumo() {
    return (
        <div className="grid min-[1000px]:grid-cols-2">
            <span className="flex flex-col justify-center max-[1000px]:mt-6 max-[1000px]:mb-6">
                 <img className="self-start ml-12 center w-[90%] rounded-xl border-2 border-blue-950 shadow-2xl shadow-black" src={Reprodutor}/>
            </span>
            <div className="text-white self-center ml-8 max-[1000px]:ml-14 max-[1000px]:mt-16 mr-16 text-justify font-raleway max-[1000px]:text-xl">
                <h1 className="mt-2 mb-3 font-bold">Sobre o Projeto:</h1>
                <p className="ml-3">Explore uma experiência musical excepcional com nosso reprodutor inovador, desenvolvido em React e aprimorado com a precisão do TypeScript.
                   Este reprodutor musical é projetado para oferecer uma integração perfeita com a vasta biblioteca de músicas disponíveis na plataforma YouTube.</p>
                <h1 className="mt-9 mb-3 font-bold">Recursos Destacados:</h1>
                <ul className="list-disc space-y-3">
                    <li className='ml-7'>Reprodução Direta do YouTube: Desfrute de milhões de faixas disponíveis no YouTube diretamente no nosso reprodutor. Explore e ouça suas músicas favoritas com facilidade.</li>
                    <li className='ml-7'>Interface Intuitiva e Amigável: A interface do usuário foi cuidadosamente projetada para proporcionar uma navegação intuitiva. Encontre suas listas de reprodução, artistas e álbuns favoritos com apenas alguns cliques.</li>
                    <li className='ml-7'>Personalização de Listas de Reprodução: Crie e gerencie suas próprias listas de reprodução personalizadas. Organize suas músicas de acordo com seu humor ou ocasião.</li>
                    <li className='ml-7'>Design Responsivo: Desfrute de uma experiência consistente em diferentes dispositivos, graças ao design responsivo que se adapta perfeitamente a telas de todos os tamanhos.</li>
                </ul>
            </div>
        </div>  
    );
}