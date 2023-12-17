import { Box, HStack, Heading, Stack } from "@chakra-ui/react";
import SolidButton from "../../Sections/Buttons/SolidButton";

export default function LandingPageHeader() {
    return (
        <Box bg="#004138" height={600}>
            <HStack wrap="wrap">
                <Stack>
                    <Heading>Welcome to campus life</Heading>
                    <Heading as="h4">Crafting memories</Heading>
                    <Heading as="h4">Building a future</Heading>
                    <HStack wrap="wrap">
                        <SolidButton buttonText="Sign in" />
                        <SolidButton buttonText="Sign up" />
                    </HStack>
                </Stack>
            </HStack>
        </Box >
    )
}