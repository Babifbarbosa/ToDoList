import { Flex, Image, Heading, useDisclosure } from "@chakra-ui/react";
import { Menu } from "./Menu";
import logo from "../../assets/logo-secondary.svg";

export const Header = () => {
  const { isOpen, onClose } = useDisclosure();
  return (
    <Flex
      borderBottom="1px"
      borderBottomColor="#f5f5f5"
      paddingX="8"
      paddingY="2"
    >
      <Flex align="center">
        <Image src={logo} />
        <Heading ml="4" size="lg">
          Dashboard
        </Heading>
      </Flex>
      <Menu isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
