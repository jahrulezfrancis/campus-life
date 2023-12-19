import { Box, HStack, Heading, Stack, Image, Text, useMediaQuery } from "@chakra-ui/react";
import CampuslifeMockup from "../../../assets/desktop-mockup.png"

export default function AboutSection() {
    const [isMobile] = useMediaQuery("(max-width: 650px)")
    return (
        <Box p={10}>
            <HStack wrap="wrap" gap={10} justify="center" align="center">
                <Stack>
                    <Heading width={isMobile ? "300px" : "500px"} fontSize={isMobile ? 50 : 80}>About Campuslife</Heading>
                    <Image maxW={isMobile ? "95vw" : "600px"} width="400px" src={CampuslifeMockup} />
                </Stack>
                <Stack wrap="wrap" gap={10} align="center" width={isMobile ? "auto" : "600px"} fontWeight={700}>
                    <Text color="black" fontSize={30} textAlign="start">
                        An innovative campus life record system is envisioned as a comprehensive digital platform designed to empower students, enhance their academic journey, and foster a vibrant campus community.
                    </Text>
                    <Text fontSize={30}>
                        This multifaceted system serves as a dynamic hub where students can document their achievements, skills, and experiences while seamlessly connecting with peers and faculty members.
                    </Text>
                </Stack>
            </HStack>
        </Box>
    )
}