import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  useToast,
  Select,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useContract } from "../context/context";

const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { setAccount, setUserType } = useContract();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    if (!email || !password || !usertype) {
      toast({
        position: "top",
        title: "Please fill all fields",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
      return;
    }

    try {
      console.log("signing in");
      console.log(usertype);
      // Perform authentication logic (e.g., with Firebase authentication)

      // Dummy authentication logic
      // Replace with actual authentication using Firebase or other service
      const isAuthenticated = true; // Replace with actual authentication logic

      if (isAuthenticated) {
        toast({
          position: "top",
          title: "Login successful",
          status: "success",
          duration: 1500,
          isClosable: true,
        });

        setUserType(usertype);

        switch (usertype) {
          case "Admin":
            navigate("/admin_Dashboard");
            break;
          case "Volunteer":
            navigate("/Tasks");
            break;
          case "Vendor":
            navigate("/Current_List");
            break;
          default:
            navigate("/");
            break;
        }
      } else {
        toast({
          position: "top",
          title: "Invalid credentials",
          status: "error",
          duration: 1500,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error signing in:", error.message);
      toast({
        position: "top",
        title: "Error signing in",
        description: error.message,
        status: "error",
        duration: 1500,
        isClosable: true,
      });
    }
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
            <Heading fontSize={"4xl"}>Login</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            style={{ width: "460px" }}
            p={8}
          >
            <Stack spacing={4}>
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
              <FormControl id="userType" isRequired>
                <FormLabel>User Type</FormLabel>
                <Select
                  value={usertype}
                  onChange={(e) => setUsertype(e.target.value)}
                >
                  <option value="">Select User Type</option>
                  <option value="Admin">Admin</option>
                  <option value="Volunteer">Volunteer</option>
                  <option value="Vendor">Vendor</option>
                </Select>
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={signIn}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </section>
  );
};

export default Login;
