import React, { FormEvent, useState } from 'react';
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
import { NavLink, redirect } from 'react-router-dom';
import { BaseApiUrl } from '../../../utils/envKeys/keys';



interface RegistrationValues {
    username: string;
    password: string;
}

interface ValidationFunction {
    (value: string): string;
}

export default function Login() {

    const [loading, setLoading] = useState(false);

    const [values, setValues] = useState<RegistrationValues>({
        username: '',
        password: '',
    });
    const [mobileDevice] = useMediaQuery('(max-width: 650px)')

    const [errors, setErrors] = useState<Partial<RegistrationValues>>({});
    const toast = useToast();

    const validatePassword: ValidationFunction = (value) => {
        if (!value || value.length < 6) {
            return 'Password must be 11 characters!';
        }
        return '';
    };

    const validateUsername: ValidationFunction = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value || !emailRegex.test(value)) {
            return 'Please enter a valid email address!';
        }
        return '';
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const newErrors: Partial<RegistrationValues> = {};

        // Validate each field
        Object.entries(values).forEach(([key, value]: [string, any]) => {
            let error: string = '';

            switch (key) {
                case 'username':
                    error = validateUsername(value);
                    break;
                case 'password':
                    error = validatePassword(value);
                    break;
                default:
                    break;
            }

            if (error) {
                newErrors[key as keyof RegistrationValues] = error;
            }
        });

        // If there are validation errors, set the errors and stop form submission
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post(
                `${BaseApiUrl}auth-token/`,
                {
                    username: values.username,
                    password: values.password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                }
            );

            const { token } = response.data;

            localStorage.setItem('token', token);

            console.log('Login successful', response.data);

            toast({
                title: 'Login successful',
                status: 'success',
                duration: 3000,
            });
            redirect('/dashboard')
        } catch (error: unknown) {
            // Handle the error
            console.error('Login failed', error);

            toast({
                title: 'Registration failed',
                description: error instanceof Error && error.message === "Network Error" && "Internal Server error",
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
                <form onSubmit={handleSubmit}>
                    <Stack boxShadow="2px 0px 16px 1px rgba(226,232,240,0.57)" w={!mobileDevice ? "600px" : "95vw"} m={6} p={6} borderRadius="lg" spacing={4}>
                        <FormControl isInvalid={!!errors.username}>
                            <FormLabel>Username (your email)</FormLabel>
                            <Input
                                type="text"
                                name="username"
                                value={values.username}
                                onChange={handleChange}
                            />
                            <FormErrorMessage>{errors.username}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!errors.password}>
                            <FormLabel>Password (default password is your reg number)</FormLabel>
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
                        <Button colorScheme="teal" isLoading={loading} type='submit'>
                            Login
                        </Button>
                        <Text textAlign="center">Don't have an account? Click <NavLink style={{ fontWeight: "bold", color: "teal" }} to="/sign-up">here</NavLink> to sign up</Text>
                    </Stack>
                </form>
            </Box>
        </Center>
    );
}