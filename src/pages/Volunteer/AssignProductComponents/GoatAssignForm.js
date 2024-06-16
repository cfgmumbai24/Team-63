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
import { Camera, CameraResultType } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';

function GoatAssignForm() {
    const [beneficiaryId, setBeneficiaryId] = useState("");
    const [villageName, setVillageName] = useState("");
    const [maleCount, setMaleCount] = useState(0);
    const [femaleCount, setFemaleCount] = useState(0);
    const [hasInsurance, setHasInsurance] = useState(false);
    const [hasVaccination, setHasVaccination] = useState(false);
    const [diseases, setDiseases] = useState("");

    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [location, setLocation] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const coordinates = await getCurrentPosition();
        const formData = {
            beneficiaryId,
            villageName,
            maleCount,
            femaleCount,
            hasInsurance,
            hasVaccination,
            diseases,
            imageUrl,
            location: coordinates,
        };
        // Add your form submission logic here
        console.log(formData);
    };

    const handleUpload = async () => {
        try {
            const storageRef = ref(storage, `CFG/${Date.now()}.jpg`);
            await uploadBytes(storageRef, image);
            const downloadUrl = await getDownloadURL(storageRef);
            setImageUrl(downloadUrl);
            alert("Image uploaded successfully");
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const handleTakePhoto = async () => {
        try {
            const img = await Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: CameraResultType.Uri
            });
                setImage(img);
            handleUpload();
            const imageUrl = img.webPath;
            setPhotoUrl(imageUrl);
        } catch (error) {
            console.error('Error taking photo:', error);
        }
    };

    const getCurrentPosition = async () => {
        try {
            const position = await Geolocation.getCurrentPosition();
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
            return { latitude, longitude };
        } catch (error) {
            console.error('Error getting location:', error);
            return null;
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
                
                                <Stack spacing={10} pt={7}>
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
                                    <img src={photoUrl} alt="Captured" style={{ width: "100%" }} />
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
                            <FormControl id="maleChildCount" isRequired>
                                <FormLabel>Male Count</FormLabel>
                                <Input
                                    type="number"
                                    value={maleCount}
                                    onChange={(e) => setMaleCount(parseInt(e.target.value))}
                                />
                            </FormControl>
                            <FormControl id="femaleChildCount" isRequired>
                                <FormLabel>Female Count</FormLabel>
                                <Input
                                    type="number"
                                    value={femaleCount}
                                    onChange={(e) => setFemaleCount(parseInt(e.target.value))}
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
                            <Stack spacing={10}>
                                <Button
                                    bg={"blue.400"}
                                    color={"white"}
                                    _hover={{
                                        bg: "blue.500",
                                    }}
                                    type="submit"
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

export default GoatAssignForm;
