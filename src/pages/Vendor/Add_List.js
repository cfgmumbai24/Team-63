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
} from "@chakra-ui/react";
import { useState } from "react";

function SignUpForm() {
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [immunization, setImmunization] = useState("");
  const [disease, setDisease] = useState("");
  const [insuranceDate, setInsuranceDate] = useState("");
  const [insuranceValue, setInsuranceValue] = useState("");
  const [email, setEmail] = useState("");
  const [authData, setAuthData] = useState({ displayName: "", email: "" });
  const [account, setAccount] = useState("");
  const [id, setID] = useState("");
  const [usertype, setUsertype] = useState("");

  const signIn = () => {
    // Implement sign-in logic here
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
            <Heading fontSize={"4xl"}>Goat Details</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            style={{ width: "460px" }}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="breed" isRequired>
                <FormLabel>Breed</FormLabel>
                <Input
                  type="text"
                  value={breed}
                  onChange={(e) => setBreed(e.target.value)}
                />
              </FormControl>
              <FormControl id="age" isRequired>
                <FormLabel>Age</FormLabel>
                <Input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </FormControl>
              <FormControl id="gender" isRequired>
                <FormLabel>Gender</FormLabel>
                <Select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Select>
              </FormControl>
              <FormControl id="weight" isRequired>
                <FormLabel>Weight (in Kgs.)</FormLabel>
                <Input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </FormControl>
              <FormControl id="immunization" isRequired>
                <FormLabel>Immunization</FormLabel>
                <Select
                  value={immunization}
                  onChange={(e) => setImmunization(e.target.value)}
                >
                  <option value="">Select Immunization Status</option>
                  <option value="Up to date">Up to date</option>
                  <option value="Pending">Pending</option>
                </Select>
              </FormControl>
              <FormControl id="disease" isRequired>
                <FormLabel>Disease</FormLabel>
                <Input
                  type="text"
                  value={disease}
                  onChange={(e) => setDisease(e.target.value)}
                />
              </FormControl>
              <FormControl id="insuranceDate" isRequired>
                <FormLabel>Insurance Date</FormLabel>
                <Input
                  type="date"
                  value={insuranceDate}
                  onChange={(e) => setInsuranceDate(e.target.value)}
                />
              </FormControl>
              <FormControl id="insuranceValue" isRequired>
                <FormLabel>Insurance Value</FormLabel>
                <Input
                  type="number"
                  value={insuranceValue}
                  onChange={(e) => setInsuranceValue(e.target.value)}
                />
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
                  Add Goat
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </section>
  );
}

export default SignUpForm;
