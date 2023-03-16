import { Container, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Image1 from "../assets/keycaps.webp";
import Image2 from "../assets/slide1.webp";
import Image3 from "../assets/slide2.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "../styles/style.css";

const HeroSlider = () => {
  return (
    <Container maxW="container.2xl" mt=".8rem" borderRadius={20}>
      <Swiper
        navigation
        modules={[Navigation, Autoplay]}
        centeredSlides={true}
        autoplay={{ delay: 2500 }}
        slidesPerView={1}
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
    </Container>
  );
};

export default HeroSlider;
