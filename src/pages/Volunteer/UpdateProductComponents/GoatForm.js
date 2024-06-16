import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Checkbox,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../firebase/firebase-config";
import { Camera, CameraResultType } from "@capacitor/camera";
import { Geolocation } from "@capacitor/geolocation";

function SignUpForm() {
  const [beneficiaryId, setBeneficiaryId] = useState("");
  const [villageName, setVillageName] = useState("");
  const [maleChildCount, setMaleChildCount] = useState(0);
  const [femaleChildCount, setFemaleChildCount] = useState(0);
  const [hasInsurance, setHasInsurance] = useState(false);
  const [hasVaccination, setHasVaccination] = useState(false);
  const [diseases, setDiseases] = useState("");
  const [noOfInfantDeaths, setNoOfInfantDeaths] = useState(0);
  const [noOfAdultDeaths, setNoOfAdultDeaths] = useState(0);
  const [profitsMade, setProfitsMade] = useState(0);

  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [location, setLocation] = useState({});

  const handleSubmit = async () => {
    try {
      const aa = localStorage.getItem("aadhar");
      const docRef = await addDoc(collection(db, "Beneficiary"), {
        beneficiaryId: beneficiaryId,
        villageName: villageName,
        maleChildCount: maleChildCount,
        femaleChildCount: femaleChildCount,
        hasInsurance: hasInsurance,
        hasVaccination: hasVaccination,
        diseases: diseases,
        noOfInfantDeaths: noOfInfantDeaths,
        noOfAdultDeaths: noOfAdultDeaths,
        profitsMade: profitsMade,
        volunteer: aa,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const retrieveFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    try {
      const storageRef = ref(storage, `CFG/${Date.now()}.jpg`);
      const bytes = await uploadBytes(storageRef, image);
      const downloadUrl = await getDownloadURL(storageRef);
      console.log(downloadUrl);
      setImageUrl(downloadUrl);
      alert("Success");
    } catch (error) {
      console.error("Error uploading image:", error);
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
            <Heading fontSize={"4xl"}>Goat Details</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            style={{ width: "460px" }}
            p={8}
          >
            <Stack spacing={4} as="form" onSubmit={handleSubmit}>
              <HStack>
                <Stack>
                  <Button
                    onClick={handleTakePhoto}
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Take Photo
                  </Button>
                </Stack>
              </HStack>
              {photoUrl && (
                <Box mt={4}>
                  <img
                    src={photoUrl}
                    alt="Captured"
                    style={{ width: "100%" }}
                  />
                </Box>
              )}
              <FormControl id="beneficiaryId" isRequired>
                <FormLabel>Aadhar of the Beneficiary</FormLabel>
                <Input
                  type="text"
                  value={beneficiaryId}
                  onChange={(e) => setBeneficiaryId(e.target.value)}
                />
              </FormControl>
              <FormControl id="villageName" isRequired>
                <FormLabel>Village Name</FormLabel>
                <Input
                  type="text"
                  value={villageName}
                  onChange={(e) => setVillageName(e.target.value)}
                />
              </FormControl>
              <FormControl id="maleChildCount">
                <FormLabel>Male Child Count</FormLabel>
                <Input
                  type="number"
                  value={maleChildCount}
                  onChange={(e) => setMaleChildCount(parseInt(e.target.value))}
                />
              </FormControl>
              <FormControl id="femaleChildCount">
                <FormLabel>Female Child Count</FormLabel>
                <Input
                  type="number"
                  value={femaleChildCount}
                  onChange={(e) =>
                    setFemaleChildCount(parseInt(e.target.value))
                  }
                />
              </FormControl>
              <FormControl id="hasInsurance">
                <FormLabel>Insurance of the Goats</FormLabel>
                <Checkbox
                  isChecked={hasInsurance}
                  onChange={(e) => setHasInsurance(e.target.checked)}
                >
                  Has Insurance
                </Checkbox>
              </FormControl>
              <FormControl id="hasVaccination">
                <FormLabel>Vaccination of the Goats</FormLabel>
                <Checkbox
                  isChecked={hasVaccination}
                  onChange={(e) => setHasVaccination(e.target.checked)}
                >
                  Has Vaccination
                </Checkbox>
              </FormControl>
              <FormControl id="diseases">
                <FormLabel>Diseases</FormLabel>
                <Input
                  type="text"
                  value={diseases}
                  onChange={(e) => setDiseases(e.target.value)}
                />
              </FormControl>
              <FormControl id="noOfInfantDeaths" isRequired>
                <FormLabel>No of Infant Deaths</FormLabel>
                <Input
                  type="number"
                  value={noOfInfantDeaths}
                  onChange={(e) =>
                    setNoOfInfantDeaths(parseInt(e.target.value))
                  }
                />
              </FormControl>
              <FormControl id="noOfAdultDeaths" isRequired>
                <FormLabel>No of Adult Deaths</FormLabel>
                <Input
                  type="number"
                  value={noOfAdultDeaths}
                  onChange={(e) => setNoOfAdultDeaths(parseInt(e.target.value))}
                />
              </FormControl>
              <FormControl id="profitsMade" isRequired>
                <FormLabel>Profits Made</FormLabel>
                <Input
                  type="number"
                  value={profitsMade}
                  onChange={(e) => setProfitsMade(parseInt(e.target.value))}
                />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                  onClick={handleSubmit}
                >
                  Update Goats
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
