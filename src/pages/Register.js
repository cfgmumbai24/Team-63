import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

function Register() {
  const toast = useToast();

  const [registrationType, setRegistrationType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aadharCard, setAadharCard] = useState("");
  const [panCard, setPanCard] = useState("");
  const [productType, setProductType] = useState("");

  const register = () => {
    if (!registrationType || !name || !email || !password || !aadharCard) {
      toast({
        title: "Please fill all required fields",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
      return;
    }

    if (registrationType === "Vendor" && (!panCard || !productType)) {
      toast({
        title: "Please fill all required fields",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
      return;
    }

    // Perform registration logic here

    // Example logic to display success message
    toast({
      title: "Registration successful",
      status: "success",
      duration: 1500,
      isClosable: true,
    });

    // Clear form fields after successful registration (optional)
    setRegistrationType("");
    setName("");
    setEmail("");
    setPassword("");
    setAadharCard("");
    setPanCard("");
    setProductType("");
  };

  return (
    <section className="todo-container">
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Register</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            style={{ width: "460px" }}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="registrationType" isRequired>
                <FormLabel>Registration Type</FormLabel>
                <Select
                  value={registrationType}
                  onChange={(e) => setRegistrationType(e.target.value)}
                >
                  <option value="">Select Registration Type</option>
                  <option value="Volunteer">Volunteer</option>
                  <option value="Vendor">Vendor</option>
                </Select>
              </FormControl>

              {registrationType && (
                <>
                  <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormControl>
                  <FormControl id="aadharCard" isRequired>
                    <FormLabel>Aadhar Card</FormLabel>
                    <Input
                      type="text"
                      value={aadharCard}
                      onChange={(e) => setAadharCard(e.target.value)}
                    />
                  </FormControl>

                  {registrationType === "Vendor" && (
                    <>
                      <FormControl id="panCard" isRequired>
                        <FormLabel>PAN Card</FormLabel>
                        <Input
                          type="text"
                          value={panCard}
                          onChange={(e) => setPanCard(e.target.value)}
                        />
                      </FormControl>
                      <FormControl id="productType" isRequired>
                        <FormLabel>Product Type</FormLabel>
                        <Input
                          type="text"
                          value={productType}
                          onChange={(e) => setProductType(e.target.value)}
                        />
                      </FormControl>
                    </>
                  )}
                </>
              )}

              <Stack spacing={10}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={register}
                >
                  Register
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </section>
  );
}

export default Register;
