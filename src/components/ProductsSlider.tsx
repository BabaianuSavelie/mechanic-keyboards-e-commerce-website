import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper";
import {
  Image,
  Card,
  CardBody,
  Container,
  IconButton,
  CardFooter,
  Text,
} from "@chakra-ui/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Product } from "../shared/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "../styles/style.css";
import CollectionTitle from "./CollectionTitle";
import { useQuery } from "react-query";

type Category = {
  name: String;
  products: Product[];
};

const ProductsSlider = ({ name, products }: Category) => {
  return (
    <Container maxW="container.xl" my="5rem" py="2rem">
      <CollectionTitle title={name} />
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={5}
        speed={1300}
        rewind
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={{
          prevEl: ".next",
          nextEl: ".previous",
        }}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 5,
          },
        }}
        modules={[Navigation, EffectCoverflow]}
      >
        {/* <SwiperSlide className="my-swiper-slide" style={{ width: "auto" }}>
          <Card maxW="sm" bgColor="transparent">
            <CardBody>
              <Image src={Image1} w="100%" h="100%" />
            </CardBody>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="my-swiper-slide" style={{ width: "auto" }}>
          <Card maxW="sm" bgColor="transparent">
            <CardBody>
              <Image src={Image1} w="100%" h="100%" />
            </CardBody>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="my-swiper-slide" style={{ width: "auto" }}>
          <Card maxW="sm" bgColor="transparent">
            <CardBody>
              <Image src={Image1} w="100%" h="100%" />
            </CardBody>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="my-swiper-slide" style={{ width: "auto" }}>
          <Card maxW="sm" bgColor="transparent">
            <CardBody>
              <Image src={Image1} w="100%" h="100%" />
            </CardBody>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="my-swiper-slide" style={{ width: "auto" }}>
          <Card maxW="sm" bgColor="transparent">
            <CardBody>
              <Image src={Image1} w="100%" h="100%" />
            </CardBody>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="my-swiper-slide" style={{ width: "auto" }}>
          <Card maxW="sm" bgColor="transparent">
            <CardBody>
              <Image src={Image1} w="100%" h="100%" />
            </CardBody>
          </Card>
        </SwiperSlide> */}

        {products.map((product) => (
          <SwiperSlide key={product.id} className="my-swiper-slide">
            <Card maxW="sm" bgColor="transparent">
              <CardBody>
                <Image src={product.image} w="100%" h="100%" />
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}

        <IconButton
          aria-label="previous-element"
          icon={<BsChevronLeft />}
          colorScheme="orange"
          borderRadius={0}
          className="previous"
          position="absolute"
          zIndex={2}
          top="50%"
          left={5}
        />

        <IconButton
          aria-label="previous-element"
          icon={<BsChevronRight />}
          colorScheme="orange"
          borderRadius={0}
          className="next"
          position="absolute"
          zIndex={2}
          top="50%"
          right={5}
        />
      </Swiper>
    </Container>
  );
};

export default ProductsSlider;
