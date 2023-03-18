import { Container, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import Image1 from "../assets/collections/keycaps.webp";
import Image2 from "../assets/slide1.webp";
import Image3 from "../assets/slide2.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/style.css";

const HeroSlider = () => {
  return (
    <Swiper
      navigation
      centeredSlides={true}
      autoplay={{ delay: 2500 }}
      slidesPerView={1}
      pagination={{ dynamicBullets: true }}
      modules={[Navigation, Autoplay, Pagination]}
    >
      <SwiperSlide>
        <Image src={Image1} objectFit="cover" w="100%" h="100%" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Image2} objectFit="cover" w="100%" h="100%" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Image3} objectFit="cover" w="100%" h="100%" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
