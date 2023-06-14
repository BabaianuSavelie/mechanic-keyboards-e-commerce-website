import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Image,
  Box,
  Text,
  Divider,
  HStack,
  Input,
  Button,
} from "@chakra-ui/react";
import { Product } from "../shared/types";
import { formatter } from "../utils/formatter";
import { BsChevronRight } from "react-icons/bs";
import { useCounter } from "../hooks/useCounter";
import { useAppDispatch } from "../store/store";
import { addToCart } from "../store/features/cartSlice";
import { useState } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  content: Product | null;
};

const ProductModal = ({ isOpen, onClose, content }: ModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { counter, increment, decrement } = useCounter(1);
  const dispatch = useAppDispatch();

  const addProduct = () => {
    setIsLoading(true);
    content != null && dispatch(addToCart(content));
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size="3xl">
      <ModalOverlay />
      <ModalContent rounded="none">
        <ModalBody display={{ base: "block", md: "flex" }} p={0} minH="50vh">
          <Box
            w={{ base: "100%", md: "50%" }}
            bgColor="gray.100"
            display="flex"
            alignItems="center"
          >
            <Image
              src={content?.image}
              objectFit="cover"
              objectPosition="center"
            />
          </Box>

          {/* Product Info */}
          <Box w={{ base: "100%", md: "50%" }} p={5}>
            <ModalCloseButton />
            <Text fontWeight={700} fontSize="xl">
              {content?.name}
            </Text>

            {content && content != null && (
              <Text mt={2} color="orange.500" fontWeight={600}>
                {formatter.format(content.price)}
              </Text>
            )}
            <Divider borderColor="blackAlpha.500" borderWidth={1} my={3} />

            <Box>
              <HStack spacing={0} border="1px" width="fit-content">
                <Button
                  variant="ghost"
                  fontSize="md"
                  rounded="none"
                  onClick={() => decrement()}
                >
                  -
                </Button>
                <Input
                  type="number"
                  variant="ghost"
                  textAlign="center"
                  value={counter}
                  maxW="50px"
                  min={1}
                />
                <Button
                  variant="ghost"
                  fontSize="md"
                  rounded="none"
                  onClick={() => increment()}
                >
                  +
                </Button>
              </HStack>

              <Button
                isLoading={isLoading}
                loadingText="Adding to Cart"
                width="100%"
                mt={2}
                rounded="none"
                colorScheme="blackAlpha"
                bgColor="blackAlpha.900"
                fontWeight={400}
                iconSpacing={3}
                rightIcon={<BsChevronRight />}
                onClick={() => addProduct()}
              >
                Add to cart
              </Button>
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
