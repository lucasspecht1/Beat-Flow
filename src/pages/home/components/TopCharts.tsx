
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import starboy from '/media/starboy.jpg'
import smithereens from '/media/smithereens.jpg'
import last_train_home from '/media/last_train_home.jpg';
import blinding_lights from '/media/blinding_lights.png';
import as_it_was from '/media/as_it_was.jpg';

export default function TopCharts() {
    return (<>
        <div className="mt-64 flex justify-center">
            <div  className='bg-[#0D1017] text-white font-medium w-[85%] p-8 rounded-2xl items-center border-2 shadow-2xl border-[#0d1322]'>
                <h1 className='text-center min-[1000px]:text-[26px] text-[20px] font-raleway font-semibold mt-3 mb-6'>MUSICAS MAIS TOCADAS ATUALMENTE</h1>
                <Swiper spaceBetween={20}                  
                        modules={[Autoplay]}
                        className='cursor-grab select-none'
                        slidesPerView={4} 
                        autoplay={{ delay: 5000,
                                    disableOnInteraction: false }}>
                    <SwiperSlide>
                        <div className='text-center scale-90'>
                            <img src={starboy} alt="starboy" className='rounded-md' />
                            <p className='font-raleway mt-2'>The Weeknd</p>
                            <p className='font-raleway '>Starboy</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center scale-90'>
                            <img src={smithereens} alt="starboy" className='rounded-md' />
                            <p className='font-raleway mt-2'>Joji</p>
                            <p className='font-raleway '>Smithereens</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='text-center scale-90'>
                            <img src={last_train_home} alt="starboy" className='rounded-md' />
                            <p className='font-raleway mt-2'>John Mayer</p>
                            <p className='font-raleway '>Last Train Home</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='text-center scale-90'>
                            <img src={blinding_lights} alt="starboy" className='rounded-md' />
                            <p className='font-raleway mt-2'>The Weeknd</p>
                            <p className='font-raleway '>Blinding Lights</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center scale-90'>
                            <img src={as_it_was} alt="starboy" className='rounded-md' />
                            <p className='font-raleway mt-2'>Harry Styles</p>
                            <p className='font-raleway '>As it was</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        </>
    );
}