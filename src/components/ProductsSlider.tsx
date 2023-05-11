import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper";
import { Image, Card, CardBody, Container, IconButton } from "@chakra-ui/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Image1 from "../assets/keyboard1.webp";
import Image2 from "../assets/keyboard2.webp";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "../styles/style.css";
import CollectionTitle from "./CollectionTitle";
import { supabase } from "../supabaseClient";
import { useQuery } from "react-query";

type Category = {
  categoryId: number;
  categoryName: string;
};

const ProductsSlider = ({ categoryId, categoryName }: Category) => {
  const fetchProduct = async () => {
    return await supabase.from("Products").select().eq("category", categoryId);
  };

  const { data } = useQuery("product", fetchProduct);
  console.log(data);

  return (
    <Container maxW="container.xl">
      <CollectionTitle title={categoryName} />
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        speed={1500}
        rewind
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={{
          prevEl: ".previous",
          nextEl: ".next",
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

        {data?.data?.map((product) => (
          <SwiperSlide className="my-swiper-slide" style={{ width: "auto" }}>
            <Card maxW="sm" bgColor="transparent">
              <CardBody>
                <Image src={product.thumbnail} w="100%" h="100%" />
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
