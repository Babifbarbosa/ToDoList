import {
  Grid,
  Image,
  Heading,
  Box,
  VStack,
  Text,
  Flex,
  Center,
  theme,
} from "@chakra-ui/react";
import { FaForward } from "react-icons/fa";
import LogoSecundary2 from "../../assets/logo-secondary2.svg";
import SimpleIcon from "../../assets/retangle.svg";

export const SignUpInfo = () => (
  <Grid w={["100%", "100%", "50%", "50%"]} paddingLeft={["10", "10", "150px"]}>
    <Image
      src={LogoSecundary2}
      alt="doit"
      boxSize={["120px", "120px", "150px", "150px"]}
    />
    <VStack spacing="14" mt={["10px", "0"]}>
      <Flex w="100%">
        <Center borderRadius="5px" bg="white" w="50px" h="50px">
          <FaForward color={theme.colors.purple["800"]} size={25} />
        </Center>
        <Box ml="4">
          <Heading size="lg"> Agilidade</Heading>
          <Text>
            Agilize seus projetos com rapidez <br /> e muita performance
          </Text>
        </Box>
      </Flex>
      <Flex w="100%">
        <Center borderRadius="5px" bg="white" w="50px" h="50px">
          <Image src={SimpleIcon} w="25px" />
        </Center>
        <Box ml="4">
          <Heading size="lg"> Simplicidade</Heading>
          <Text>
            Armazene seus projetos em uma
            <br /> interface altamente usual
          </Text>
        </Box>
      </Flex>
    </VStack>
  </Grid>
);
