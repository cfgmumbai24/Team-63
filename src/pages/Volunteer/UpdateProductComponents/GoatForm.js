import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Checkbox,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement submission logic here
        const formData = {
            beneficiaryId,
            villageName,
            maleChildCount,
            femaleChildCount,
            hasInsurance,
            hasVaccination,
            diseases,
            noOfInfantDeaths,
            noOfAdultDeaths,
            profitsMade,
        };
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
                            <FormControl id="beneficiaryId" isRequired>
                                <FormLabel>ID of the Beneficiary</FormLabel>
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
                                <FormLabel>Male Child Count</FormLabel>
                                <Input
                                    type="number"
                                    value={maleChildCount}
                                    onChange={(e) => setMaleChildCount(parseInt(e.target.value))}
                                />
                            </FormControl>
                            <FormControl id="femaleChildCount" isRequired>
                                <FormLabel>Female Child Count</FormLabel>
                                <Input
                                    type="number"
                                    value={femaleChildCount}
                                    onChange={(e) => setFemaleChildCount(parseInt(e.target.value))}
                                />
                            </FormControl>
                            <FormControl id="hasInsurance" isRequired>
                                <FormLabel>Insurance of the Goats</FormLabel>
                                <Checkbox
                                    isChecked={hasInsurance}
                                    onChange={(e) => setHasInsurance(e.target.checked)}
                                >
                                    Has Insurance
                                </Checkbox>
                            </FormControl>
                            <FormControl id="hasVaccination" isRequired>
                                <FormLabel>Vaccination of the Goats</FormLabel>
                                <Checkbox
                                    isChecked={hasVaccination}
                                    onChange={(e) => setHasVaccination(e.target.checked)}
                                >
                                    Has Vaccination
                                </Checkbox>
                            </FormControl>
                            <FormControl id="diseases">
                                <FormLabel>Diseases (if any)</FormLabel>
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
                                    onChange={(e) => setNoOfInfantDeaths(parseInt(e.target.value))}
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