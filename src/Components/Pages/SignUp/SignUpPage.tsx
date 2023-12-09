import { Box, Heading, FormControl, FormLabel, Input, Button, Alert, AlertIcon, useMediaQuery, Center, } from '@chakra-ui/react';
import { useState } from "react";

export default function SignUpPage() {
    const [mobileDevice] = useMediaQuery('(max-width: 650px)')
    const [password, setPassword] = useState("")
    const [registrationNumber, setRegistrationNumber] = useState("")
    const [error, setError] = useState("")

    function handleSubmit() {
        if (!registrationNumber.trim() || !password.trim()) {
            setError("Please fill out all fields.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }
    }

    return (
        <Box>
            <Center>
                <Box boxShadow="2px 0px 16px 1px rgba(226,232,240,0.57)" w={!mobileDevice ? "600px" : "95vw"} m={6} p={6} borderRadius="lg">
                    <Heading as="h2" size="xl" mb={4}>
                        Registration
                    </Heading>
                    {error && (
                        <Alert status="error" mb={4}>
                            <AlertIcon />
                            {error}
                        </Alert>
                    )}
                    <FormControl id="registrationNumber" mb={4}>
                        <FormLabel>Registration Number</FormLabel>
                        <Input
                            type="text"
                            placeholder="Enter your registration number"
                            value={registrationNumber}
                            name='registrationNumber'
                            onChange={(e) => setRegistrationNumber(e.target.value)}
                        />
                    </FormControl>
                    <FormControl id="password" mb={6}>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>
                    <Button colorScheme="teal" onClick={handleSubmit}>
                        Register
                    </Button>
                </Box>
            </Center>
        </Box>
    )
}