import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { DisclosureProps } from "../shared/types";

const MenuDrawer = ({ isOpen, onClose }: DisclosureProps) => {
  return (
    <Drawer isOpen={isOpen} placement="left" size="full" onClose={onClose}>
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
  );
};

export default MenuDrawer;
