import { Box, Heading, Flex, Text, Stack, useMediaQuery, Divider, Image, Icon, } from "@chakra-ui/react";
import LandingPageHeader from "./Header";
import AboutSection from "./AboutSection";
import BackgroundImage from "../../../assets/graduating-students.jpg"
import HandWithBook from "../../../assets/hands-holding-book.png"
import RoundedBorderImage from "../../../assets/male-image-with-radius.png"
import SolidButton from "../../Sections/Buttons/SolidButton";
import { PiArrowBendDownRightBold } from "react-icons/pi";


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
                <Box color="whitesmoke" bg="#000000" minH="600px" padding={10}>
                    <Stack align="center" justify="center" wrap="wrap" >
                        <Flex wrap="wrap" justify="space-around">
                            <Stack maxW="95vw" w={"400px"}>
                                <Text width={isMobile ? "300px" : "400px"} fontSize={isMobile ? 50 : 100}>Who is campuslife for</Text>
                                <Text fontSize={40}>Students</Text>
                                <Text fontSize={30}>Students looking out to connect and have a record of their experiences</Text>
                            </Stack>
                            <Image objectFit="cover" maxW="90vw" w={400} src={RoundedBorderImage} />
                        </Flex>
                        <Flex width="100%" align="center" justify="space-around" wrap="wrap" >
                            <Divider border="2px solid white" width={160} />
                            <Flex gap="10">
                                <Icon fontSize={30} as={PiArrowBendDownRightBold} />
                                <Text>Connect with me today</Text>
                            </Flex>
                        </Flex>
                    </Stack>
                </Box>
            </section>
            <section>
                <Box>
                    <Flex wrap="wrap" height="auto" minH={750} justify="space-evenly" align="center">
                        <Stack gap={10}>
                            <Text fontSize="40px">Educationist</Text>
                            <Heading fontWeight="700" w="450px" maxW="90vw">Lecturers building their portfolio and connecting with other institutions.</Heading>
                            <Divider width={150} border="2px solid black" />
                        </Stack>
                        <Box>
                            <Image objectFit="cover" h="auto" width="400px" maxW="90vw" src={HandWithBook} />
                        </Box>
                    </Flex>
                </Box>
            </section>
        </Box>
    )
}