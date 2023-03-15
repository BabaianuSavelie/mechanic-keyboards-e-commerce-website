import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  VStack,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import Logo from "../assets/logo.png";
import { useRef } from "react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <Box as="nav" bg="blackAlpha.900" color="gray.100" fontSize="sm">
      <Container maxW="container.xl" py="1rem">
        <Flex justifyContent="space-between">
          <IconButton
            aria-label="hamburger-menu"
            icon={<RxHamburgerMenu />}
            fontSize={24}
            color="gray.100"
            variant="no-outline"
            display={{ base: "block", md: "none" }}
            onClick={onOpen}
            ref={btnRef}
          />
          <Link to="/">
            <Image
              borderRadius="full"
              boxSize={50}
              objectFit="cover"
              src={Logo}
              alt="Application Logo"
            />
          </Link>

          <HStack gap="1rem" display={{ base: "none", md: "flex" }}>
            <Link to="/keyboards">Keyboards</Link>
            <Link to="/keycaps">Keycaps</Link>
            <Link to="/mouse">Mouse</Link>
            <Link to="/deskmats">Deskmats</Link>
            <Link to="/swithes">Switchuri</Link>
            <Link to="/accesories">Accesorii</Link>

            <HStack fontSize={20} gap="10px">
              <Link to="">
                <FiSearch />
              </Link>
              <Link to="/login">
                <AiOutlineUser />
              </Link>
            </HStack>
          </HStack>

          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>

              <DrawerBody>
                <VStack gap="1rem">
                  <Link to="/keyboards" onClick={onClose}>
                    Keyboards
                  </Link>
                  <Link to="/keycaps" onClick={onClose}>
                    Keycaps
                  </Link>
                  <Link to="/mouse" onClick={onClose}>
                    Mouse
                  </Link>
                  <Link to="/deskmats" onClick={onClose}>
                    Deskmats
                  </Link>
                  <Link to="/swithes" onClick={onClose}>
                    Switchuri
                  </Link>
                  <Link to="/accesories" onClick={onClose}>
                    Accesorii
                  </Link>
                </VStack>
              </DrawerBody>

              <DrawerFooter>
                <Link to="/login">Login</Link>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
