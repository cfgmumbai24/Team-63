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

function GoatAssignForm() {
    const [beneficiaryId, setBeneficiaryId] = useState("");
    const [villageName, setVillageName] = useState("");
    const [maleCount, setMaleCount] = useState(0);
    const [femaleCount, setFemaleCount] = useState(0);
    const [hasInsurance, setHasInsurance] = useState(false);
    const [hasVaccination, setHasVaccination] = useState(false);
    const [diseases, setDiseases] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            beneficiaryId,
            villageName,
            maleCount,
            femaleCount,
            hasInsurance,
            hasVaccination,
            diseases,
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
                                    onChange={(e) => setMaleChildCount(parseInt(e.target.value))}
                                />
                            </FormControl>
                            <FormControl id="femaleChildCount" isRequired>
                                <FormLabel>Female Count</FormLabel>
                                <Input
                                    type="number"
                                    value={femaleCount}
                                    onChange={(e) => setFemaleChildCount(parseInt(e.target.value))}
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
