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
import { BsCart3 } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { useState } from "react";
import CartDrawer from "./CartDrawer";
import MenuDrawer from "./MenuDrawer";

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <Box as="nav" bg="blackAlpha.900" color="gray.100" fontSize="sm">
      <Container maxW="container.xl" py="1rem">
        <Flex justifyContent="space-between" alignItems="center">
          {/* Hamburger menu button */}
          <IconButton
            aria-label="hamburger-menu"
            icon={<RxHamburgerMenu />}
            fontSize={24}
            color="gray.100"
            variant="no-outline"
            display={{ base: "block", md: "none" }}
            onClick={() => setMenuIsOpen(true)}
          />

          {/* Navbar Logo */}
          <Link to="/">
            <Image
              boxSize={50}
              objectFit="cover"
              src={Logo}
              alt="Application Logo"
            />
          </Link>

          <HStack>
            <HStack gap="1rem" display={{ base: "none", md: "flex" }}>
              <Link to="/collections/keyboards">Keyboards</Link>
              <Link to="/collections/keycaps">Keycaps</Link>
              <Link to="/collections/mouse">Mouse</Link>
              <Link to="/collections/deskmats">Deskmats</Link>
              <Link to="/collections/switches">Switchuri</Link>
              <Link to="/collections/accesories">Accesorii</Link>

              <HStack fontSize={20} gap="10px">
                <Link to="">
                  <FiSearch />
                </Link>
                <Link to="/login">
                  <AiOutlineUser />
                </Link>
              </HStack>
            </HStack>

            {/* Cart button */}
            <IconButton
              icon={<BsCart3 />}
              aria-label="Cart button"
              variant="no-outlined"
              fontSize={{ base: 24, md: 20 }}
              onClick={() => setCartIsOpen(true)}
            />
          </HStack>

          <MenuDrawer
            isOpen={menuIsOpen}
            onClose={() => setMenuIsOpen(false)}
          />

          <CartDrawer
            isOpen={cartIsOpen}
            onClose={() => setCartIsOpen(false)}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
