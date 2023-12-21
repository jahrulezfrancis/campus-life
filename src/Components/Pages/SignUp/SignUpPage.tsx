import React, { useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Stack,
    useToast,
    useMediaQuery,
    Center, Text
} from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';



interface RegistrationValues {
    reg_number: string;
    email: string;
}

interface ValidationFunction {
    (value: string): string;
}

const Registration: React.FC = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState<RegistrationValues>({
        reg_number: '',
        email: '',
    });
    const [mobileDevice] = useMediaQuery('(max-width: 650px)')

    const [errors, setErrors] = useState<Partial<RegistrationValues>>({});
    const toast = useToast();

    const validateregistrationNumber: ValidationFunction = (value) => {
        if (value.length !== 11) {
            return 'registration number must be at least 11 characters!';
        }
        return '';
    };

    // const validatePassword: ValidationFunction = (value) => {
    //     if (!value || value.length < 6) {
    //         return 'Password must be at least 6 characters!';
    //     }
    //     return '';
    // };

    const validateEmail: ValidationFunction = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value || !emailRegex.test(value)) {
            return 'Please enter a valid email address!';
        }
        return '';
    };

    const handleSubmit = async () => {
        const newErrors: Partial<RegistrationValues> = {};

        // Validate each field
        Object.entries(values).forEach(([key, value]: [string, string]) => {

            let error = '';

            switch (key) {
                case 'reg_number':
                    error = validateregistrationNumber(value);
                    break;
                case 'email':
                    error = validateEmail(value);
                    break;
                default:
                    break;
            }

            if (error) {
                newErrors[key] = error;
            }
        });

        // If there are validation errors, set the errors and stop form submission
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const examplePromise = new Promise((resolve) => {
            setLoading(true)
            setTimeout(() => {
                // setLoading(true)
                resolve(200)
            }, 5000)
            setTimeout(() => {
                setLoading(false)
                navigate('/dashboard')
            }, 6000)
        })
        toast.promise(examplePromise, {
            success: { position: "top", duration: 1000, title: 'Registration Successful.', description: "Redirecting..." },
            error: { title: 'Upload failed', duration: 1000, description: 'Image upload failed, please try again' },
            loading: { title: "Validating data", description: "" },
        })
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    return (
        <Center>
            <Box>
                <Stack boxShadow="2px 0px 16px 1px rgba(226,232,240,0.57)" w={!mobileDevice ? "600px" : "95vw"} m={6} p={6} borderRadius="lg" spacing={4}>
                    <FormControl isInvalid={!!errors.reg_number}>
                        <FormLabel>Registration Number</FormLabel>
                        <Input
                            type="text"
                            name="reg_number"
                            value={values.reg_number}
                            onChange={handleChange}
                        />
                        <FormErrorMessage>{errors.reg_number}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.email}>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>
                    <Button colorScheme="teal" isLoading={loading} onClick={handleSubmit}>
                        Register
                    </Button>
                    <Text textAlign="center">Already have an account? Click <NavLink style={{ fontWeight: "bold", color: "teal" }} to="/sign-in">here</NavLink> to sign in</Text>
                </Stack>

            </Box>
        </Center>
    );
};

export default Registration;









// import { Box, Heading, FormControl, FormLabel, Input, Button, Alert, AlertIcon, useMediaQuery, Center, } from '@chakra-ui/react';
// import { useState } from "react";

// export default function SignUpPage() {
//     const [mobileDevice] = useMediaQuery('(max-width: 650px)')
//     const [password, setPassword] = useState("")
//     const [registrationNumber, setRegistrationNumber] = useState("")
//     const [error, setError] = useState("")

//     function handleSubmit() {
//         if (!registrationNumber.trim() || !password.trim()) {
//             setError("Please fill out all fields.");
//             return;
//         }

//         if (password.length < 6) {
//             setError("Password must be at least 6 characters long.");
//             return;
//         }
//     }

//     return (
//         <Box>
//             <Center>
//                 <Box boxShadow="2px 0px 16px 1px rgba(226,232,240,0.57)" w={!mobileDevice ? "600px" : "95vw"} m={6} p={6} borderRadius="lg">
//                     <Heading as="h2" size="xl" mb={4}>
//                         Registration
//                     </Heading>
//                     {error && (
//                         <Alert status="error" mb={4}>
//                             <AlertIcon />
//                             {error}
//                         </Alert>
//                     )}
//                     <FormControl id="registrationNumber" mb={4}>
//                         <FormLabel>Registration Number</FormLabel>
//                         <Input
//                             type="text"
//                             placeholder="Enter your registration number"
//                             value={registrationNumber}
//                             name='registrationNumber'
//                             onChange={(e) => setRegistrationNumber(e.target.value)}
//                         />
//                     </FormControl>
//                     <FormControl id="password" mb={6}>
//                         <FormLabel>Password</FormLabel>
//                         <Input
//                             type="password"
//                             name="password"
//                             placeholder="Enter your password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </FormControl>
//                     <Button colorScheme="teal" onClick={handleSubmit}>
//                         Register
//                     </Button>
//                 </Box>
//             </Center>
//         </Box>
//     )
// }