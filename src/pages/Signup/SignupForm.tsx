import { Grid, Heading, VStack, Box, Button, Text } from "@chakra-ui/react";
import { Input } from "../../components/Form/input";
import { FaEnvelope, FaLock, FaUsb, FaUser } from "react-icons/fa";
import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";
import { FieldValues } from "react-hook-form";
interface SignUpData {
  handleSignUp: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<FieldValues>;
  loading: boolean;
}

export const SignUpForm = ({
  handleSignUp,
  errors,
  register,
  loading,
}: SignUpData) => (
  <Grid
    onSubmit={handleSignUp}
    as="form"
    padding="35px 25px"
    border="3px solid"
    borderColor="gray.100"
    bg="white"
    color="gray.900"
    mt={["4", "4", "0"]}
    w={["100%", "100%", "50%", "50%"]}
  >
    <Heading size="lg">Crie sua conta</Heading>
    <VStack mt="5" spacing="4">
      <Input
        placeholder="Digite seu nome"
        icon={FaUser}
        label="Nome"
        error={errors.name}
        {...register("name")}
      />
      <Box w="100%">
        <Input
          placeholder="Digite seu login"
          icon={FaEnvelope}
          label="Login"
          type="email"
          error={errors.email}
          {...register("email")}
        />
        {!errors.email && (
          <Text ml="1" mt="1" color="gray.300">
            Exemplo: nome@email.com
          </Text>
        )}
      </Box>
      <Input
        label="Senha"
        placeholder="Digite sua senha"
        icon={FaLock}
        error={errors.password}
        type="password"
        {...register("password")}
      />
      <Input
        label="Confirmação de senha"
        placeholder="Confirme sua senha"
        icon={FaLock}
        error={errors.confirm_password}
        type="password"
        {...register("confirm_password")}
      />
    </VStack>

    <Button
      mt="5"
      isLoading={loading}
      bg="purple.800"
      w="100%"
      color="white"
      h="60px"
      borderRadius="8px"
      _hover={{ background: "purple.900" }}
      type="submit"
    >
      Finalizar cadastro
    </Button>
  </Grid>
);
