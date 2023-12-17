import { Box, Heading, Flex, Text, Stack, useMediaQuery, } from "@chakra-ui/react";
import LandingPageHeader from "./Header";
import AboutSection from "./AboutSection";
import BackgroundImage from "../../../assets/graduating-students.jpg"
import SolidButton from "../../Sections/Buttons/SolidButton";


export default function HomePage() {
    const [isMobile] = useMediaQuery("(max-width: 650px)")
    return (
        <Box>
            <LandingPageHeader />
            <section>
                <Box color="whitesmoke" background="rgba(0, 5, 10 0.5)" backgroundSize="cover" bgImage={BackgroundImage} height={700}>
                    <Flex p={10} wrap="wrap" align="flex-start" justify="space-around" height="100%" background="rgba(0, 0, 10, 0.5)">
                        <Stack fontSize={isMobile ? 30 : 50}>
                            <Heading fontWeight="500">The road map to a life <br /> long connected Alumni.</Heading>
                            <Heading textTransform="capitalize">It begins <strong>here___</strong></Heading>
                        </Stack>
                        <SolidButton buttonText="Sign up today" />
                    </Flex>
                </Box>
            </section>
            <section>
                <AboutSection />
            </section>
            <section>
                <Box color="whitesmoke" bg="#000000" h={"700px"}>
                    <Stack>
                        <Text width={isMobile ? "300px" : "400px"} fontSize={isMobile ? 50 : 100}>Who is campuslife for</Text>
                        <Text fontSize={40}>Students</Text>
                        <Text fontSize={30}>Students looking out to connect and have a record of their experiences</Text>
                    </Stack>
                </Box>
            </section>
        </Box>
    )
}