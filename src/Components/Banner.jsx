/** @format */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'Swiper/swiper-bundle.css';
const Banner = () => {
   return (
    <div className='h-[300px] md:h-[600px]  my-10 rounded-2xl '>
         
    <Swiper
     modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 5000 }}
        style={{ height: "100%" }} // Ensure Swiper takes up 100% height of its container
        className='rounded-2xl'
    >
       
        <SwiperSlide className='rounded-2xl'>
        <div className="relative text-center rounded-2xl ">
        <div className="h-[300px] md:h-[600px] relative rounded-2xl">
            {/* Background image */}
            <div className="absolute inset-0 bg-cover object-contain bg-center rounded-2xl" style={{ backgroundImage: `url('https://i.ibb.co/CJy75Jr/banner.jpg')` }}></div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40  rounded-2xl "></div>

            {/* Text */}
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold md:text-xl px-4 py-2">
               <h1 className="text-center  text-5xl"> Unleash Your Creativity, Accept the Challenge: Dive into Assignments</h1>
            </div>
        </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative text-center rounded-2xl">
        <div className="h-[300px] md:h-[600px] relative rounded-2xl">
            {/* Background image */}
            <div className="absolute inset-0 bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url('https://i.ibb.co/ctdb4SY/jed-villejo-b-Ec-C0ny-Ip2g-unsplash.jpg')` }}></div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40  rounded-2xl"></div>

            {/* Text */}
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold md:text-xl px-4 py-2">
                <h1 className="text-center  text-5xl">From Concept to Completion: Embark on Your Challenging Journey</h1>
            </div>
        </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative text-center">
        <div className="h-[300px] md:h-[600px] relative rounded-2xl">
            {/* Background image */}
            <div className="absolute inset-0 bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url('https://i.ibb.co/vhY71mY/priscilla-du-preez-Xk-KCui44i-M0-unsplash.jpg')` }}></div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40  rounded-2xl"></div>

            {/* Text */}
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold md:text-xl px-4 py-2">
                <h1 className="text-center text-5xl ">Assignment Arena: Create Challenges, Accept Triumphs! </h1>
            </div>
        </div>
    </div>
        </SwiperSlide>
    


       
    </Swiper>

</div>
   );
};

export default Banner;
