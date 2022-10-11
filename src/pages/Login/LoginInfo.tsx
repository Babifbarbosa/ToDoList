import { Grid, Image, Heading, Text } from "@chakra-ui/react";
import LogoSecundary2 from "../../assets/logo-secondary2.svg";

export const LoginInfo = () => (
  <Grid w={["100%", "100%", "50%", "50%"]} paddingRight="100px">
    <Image
      src={LogoSecundary2}
      alt="doit"
      boxSize={["120px", "120px", "150px", "150px"]}
    />
    <Heading mt="4" as="h1">
      O jeito fácil, grátis
    </Heading>
    <Text maxW="350px">
      Flexível e atrativo de gerenciar
      <b> seus projetos em uma única plataforma</b>
    </Text>
  </Grid>
);
