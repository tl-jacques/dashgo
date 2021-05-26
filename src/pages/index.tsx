import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justifyContent="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        backgroundColor="gray.800"
        padding="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input type="email" name="email" label="E-mail" />
          <Input type="password" name="password" label="Senha" />
        </Stack>

        <Button type="submit" marginTop="6" colorScheme="teal" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
