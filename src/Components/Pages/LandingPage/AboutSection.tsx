import { Box, HStack, Heading, Stack } from "@chakra-ui/react";

export default function AboutSection() {
    return (
        <Box>
            <HStack>
                <Stack>
                    <Heading>About Campuslife</Heading>
                </Stack>
                <Stack>
                    <Heading>
                        An innovative campus life record system is envisioned as a comprehensive digital platform designed to empower students, enhance their academic journey, and foster a vibrant campus community.
                    </Heading>
                    <Heading>
                        This multifaceted system serves as a dynamic hub where students can document their achievements, skills, and experiences while seamlessly connecting with peers and faculty members.
                    </Heading>
                </Stack>
            </HStack>
        </Box >
    )
}