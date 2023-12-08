import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function UnverifiedMessage() {
    return (
        <Center>
            <Box borderRadius={8} alignItems="center" justifyContent="center" background="#FEB74D" width="70vw" height={200}>
                <Stack height="100%" align="center" justify="center">
                    <Heading>Your account is yet to be verified</Heading>
                    <Text>Hello Isa'ac, You account is not yet verified, <Link to="/check-point"><u>click here to verify your account</u></Link></Text>
                </Stack>
            </Box>
        </Center>
    )
}