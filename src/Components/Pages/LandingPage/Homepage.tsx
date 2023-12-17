import { Box, Heading, Text } from "@chakra-ui/react";
import LandingPageHeader from "./Header";
import AboutSection from "./AboutSection";

export default function HomePage() {
    return (
        <Box>
            <LandingPageHeader />
            <section>
                <Heading as="h3">The road map to a life <br /> long connected Alumni.</Heading>
                <Heading>It begins<strong>here___</strong></Heading>
            </section>
            <section>
                <AboutSection />
            </section>
            <section>
                <Box bg="#000000" h={"700px"}>
                    <Text>Who campus life is for</Text>
                </Box>
            </section>
        </Box>
    )
}