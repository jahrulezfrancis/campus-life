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
import axios from 'axios';
import { NavLink } from 'react-router-dom';



interface RegistrationValues {
    registrationNumber: string;
    password: string;
    email: string;
    name: string;
}

interface ValidationFunction {
    (value: string): string;
}

export default function Login() {
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState<RegistrationValues>({
        registrationNumber: '',
        password: '',
        email: '',
        name: '',
    });
    const [mobileDevice] = useMediaQuery('(max-width: 650px)')

    const [errors, setErrors] = useState<Partial<RegistrationValues>>({});
    const toast = useToast();

    const validateRegNumber: ValidationFunction = (value) => {
        if (!value || value.length < 11 || value.length >= 12) {
            return 'Reg number must be 11 characters long';
        }
        return '';
    };

    const validatePassword: ValidationFunction = (value) => {
        if (!value || value.length < 6) {
            return 'Password must be at least 6 characters!';
        }
        return '';
    };

    const validateEmail: ValidationFunction = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value || !emailRegex.test(value)) {
            return 'Please enter a valid email address!';
        }
        return '';
    };

    const validateName: ValidationFunction = (value) => {
        if (!value || value.length < 2) {
            return 'Name must be at least 2 characters!';
        }
        return '';
    };

    const handleSubmit = async () => {
        const newErrors: Partial<RegistrationValues> = {};

        // Validate each field
        Object.keys(values).forEach((key) => {
            const value = values[key];
            let error = '';

            switch (key) {
                case 'registrationNumber':
                    error = validateRegNumber(value);
                    break;
                case 'password':
                    error = validatePassword(value);
                    break;
                case 'email':
                    error = validateEmail(value);
                    break;
                case 'name':
                    error = validateName(value);
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

        setLoading(true);

        try {
            // Simulate an API request using Axios without async/await
            const response = await axios.post('/api/register', values);

            // Assuming the server returns a token upon successful registration
            const { token } = response.data;

            // Save the token to localStorage or a secure storage method
            localStorage.setItem('token', token);

            // Handle the response
            console.log('Registration successful', response.data);

            toast({
                title: 'Registration successful',
                status: 'success',
                duration: 3000,
            });
        } catch (error: unknown) {
            // Handle the error
            console.error('Registration failed', error);

            toast({
                title: 'Registration failed',
                description: error.message,
                status: 'error',
                duration: 3000,
            });
        } finally {
            setLoading(false);
        }
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
                    <FormControl isInvalid={!!errors.registrationNumber}>
                        <FormLabel>Registration Number</FormLabel>
                        <Input
                            type="text"
                            name="registrationNumber"
                            value={values.registrationNumber}
                            onChange={handleChange}
                        />
                        <FormErrorMessage>{errors.registrationNumber}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.password}>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>
                    {/* <FormControl isInvalid={!!errors.email}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.name}>
                        <FormLabel>Name</FormLabel>
                        <Input
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                        />
                        <FormErrorMessage>{errors.name}</FormErrorMessage>
                    </FormControl> */}
                    <Button colorScheme="teal" isLoading={loading} onClick={handleSubmit}>
                        Login
                    </Button>
                    <Text textAlign="center">Don't have an account? Click <NavLink style={{ fontWeight: "bold", color: "teal" }} to="/sign-up">here</NavLink> to sign up</Text>
                </Stack>
            </Box>
        </Center>
    );
}