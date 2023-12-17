import { Box, HStack, Heading, Image, Spacer, Stack } from "@chakra-ui/react";
import SolidButton from "../../Sections/Buttons/SolidButton";
import HeaderImage from "../../../assets/thirrdStudent.jpg"

export default function LandingPageHeader() {
    return (
        <Box bg="#004138" height={600}>
            <HStack justify="center" align="center" wrap="wrap">
                <Box padding={5}>
                    <Image height={550} src={HeaderImage} alt="Header image" />
                </Box>
                <Stack justify="center" align="center" color="white">
                    <Heading textTransform="uppercase" fontSize="60px">Welcome to <br /> campus life</Heading>
                    <Heading mt={15} as="h4" fontSize={22}>Crafting memories</Heading>
                    <Heading as="h4" fontSize={22}>Building a future</Heading>
                    <Spacer mb={50} height={50} />
                    <HStack gap={10} wrap="wrap">
                        <SolidButton buttonText="Sign in" />
                        <SolidButton buttonText="Sign up" />
                    </HStack>
                </Stack>
            </HStack>
        </Box >
    )
}