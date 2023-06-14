import { Container, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import CollectionTitle from "./CollectionTitle";
import HeroThumbnail1 from "../assets/hero/hero-thumbnail1.jpg";
import HeroThumbnail2 from "../assets/hero/hero-thumbnail2.jpg";
import HeroThumbnail3 from "../assets/hero/hero-thumbnail3.jpg";
import HeroThumbnail4 from "../assets/hero/hero-thumbnail4.jpg";

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
      className="hero-swiper"
    >

      <SwiperSlide>
        <Image src={HeroThumbnail1} objectFit="cover" w="100%" h="100%" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={HeroThumbnail2} objectFit="cover" w="100%" h="100%" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={HeroThumbnail3} objectFit="cover" w="100%" h="100%" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={HeroThumbnail4} objectFit="cover" w="100%" h="100%" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
