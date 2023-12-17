import { Box, Heading, Spacer, Flex, Text, Stack, Center } from "@chakra-ui/react";
import LandingPageHeader from "./Header";
import AboutSection from "./AboutSection";
import BackgroundImage from "../../../assets/graduating-students.jpg"
import SolidButton from "../../Sections/Buttons/SolidButton";


export default function HomePage() {
    return (
        <Box>
            <LandingPageHeader />
            <section>
                <Box color="whitesmoke" background="rgba(0, 5, 10 0.5)" backgroundSize="cover" bgImage={BackgroundImage} height={700}>
                    <Flex p={10} align="flex-start" justify="space-around" height="100%" background="rgba(0, 0, 10, 0.5)">
                        <Stack>
                            <Heading fontWeight="500" fontSize={50} as="h3">The road map to a life <br /> long connected Alumni.</Heading>
                            <Heading textTransform="capitalize" fontSize={50}>It begins <strong>here___</strong></Heading>
                        </Stack>
                        <SolidButton buttonText="Sign up today" />
                    </Flex>
                </Box>
            </section>
            <section>
                <AboutSection />
            </section>
            <section>
                <Box bg="#000000" h={"700px"}>
                    <Text color="whitesmoke">Who campus life is for</Text>
                    <Text color="whitesmoke">Students looking out to connect and have a record of their experiences</Text>
                </Box>
            </section>
        </Box>
    )
}