import NavBar from "./components/NavBar";
import Reprodutor from '../../../public/media/reprodutor.png'

export default function Home() {
    return (
        <div className="">
            <NavBar/>
            <span className="flex h-full">
                <span className="w-[45%]">
                    <img className="absolute z-10 ml-24 mt-20 w-[39%] h-fit border-2 rounded-xl border-[#1F2E4B]" src={Reprodutor}/>
                    <img className="blur-sm z-0 mt-12 ml-16 w-[88%] border-2 rounded-xl border-[#1F2E4B]" src={Reprodutor}/>
                </span>
                <div className="w-[50%] items-start">
                    <p className="text-white text-base ml-20 mt-80">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia cursus turpis, 
                        et pharetra felis commodo ac. Sed malesuada quam est, 
                        sit amet sagittis lorem facilisis et. Nam sed vestibulum ipsum, 
                        ut porta mi. Sed eu ornare est. 
                        Aliquam auctor dapibus nisi, sed scelerisque augue pellentesque ac.
                        Integer ut malesuada risus, eu suscipit dui. In et neque eros. 
                        Aliquam vitae lobortis arcu. Ut a efficitur justo.
                        Morbi ornare    leo leo, id euismod tellus aliquet ac.
                        Donec non nunc eleifend, ornare quam in, 
                        interdum eros. Donec vel orci sit amet mi rutrum ornare in a eros. 
                        Cras at mollis tellus. Fusce ut dolor id risus tristique commodo. Duis pulvinar commodo tortor, 
                        ut pharetra ante efficitur id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
                        cubilia curae; Suspendisse malesuada turpis quis libero consectetur, nec mollis mauris aliquet. 
                        Aenean non facilisis nibh. Donec semper ligula non est gravida malesuada. 
                        Curabitur sed tortor sit amet purus rutrum ultrices. Quisque non enim magna. 
                        Aenean varius dignissim ullamcorper. Proin laoreet tortor non dui euismod, 
                        quis finibus diam euismod. Aliquam cursus non nisl et pellentesque.
                        Quisque accumsan nisi enim, 
                    </p>
                </div> 
            </span>
            
        </div>
    );
}