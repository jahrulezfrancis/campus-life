import { Box, Heading, Flex, Text, Stack, useMediaQuery, Divider, Image, Icon, } from "@chakra-ui/react";
import LandingPageHeader from "./Header";
import AboutSection from "./AboutSection";
import BackgroundImage from "../../../assets/graduating-students.jpg"
import HandWithBook from "../../../assets/hands-holding-book.png"
import RoundedBorderImage from "../../../assets/male-image-with-radius.png"
import IliasImage from "../../../assets/usman.jpg";
import JblinksImage from "../../../assets/isaac-jblinks.jpg";
import GraduantImage from "../../../assets/student-with-prof.jpg";
import AdocheImage from "../../../assets/adoche.png";
import AtbuGraduants from "../../../assets/graduating-students-atbu.jpg";
import CurvyArc from "../../../assets/curvy-arc.svg";

import SolidButton from "../../Sections/Buttons/SolidButton";
import { PiArrowBendDownRightBold } from "react-icons/pi";
import UserCard from "../../Sections/Cards/UserCard";
import TestimonialCard from "../../Sections/Cards/TestimonialCard";
import { SocialLinks } from "./SocialLinks";
import { Link } from "react-router-dom";


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
                        <Link to="/sign-up">
                            <SolidButton buttonText="Sign up today" />
                        </Link>
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
            <section>
                <Box p={isMobile ? "20px 5px" : "50px 10px"} bg="#F6F6F6">
                    <Heading textAlign="center">Meet Our Users</Heading>
                    <Box padding={"30px 0px 40px 0px"}>
                        <Divider />
                    </Box>
                    <Stack gap={20}>
                        <UserCard userImage={IliasImage} userName="Ilias" aboutUser="Hi!, I am a diligent senior software engineer with years of experience in product development and  business applications. I'm a studnet of ATBU BAUCHI. I am skilled in developing plans, managing projects, and user documentation." />
                        <UserCard userImage={AdocheImage} userName="Adoche" aboutUser="I'm a studnet of UNI LAG. I am skilled in developing plans, managing projects, and user documentation." />
                        <UserCard userImage={JblinksImage} userName="Isaac" aboutUser="I'm a studnet of UNN. I am skilled in developing plans, managing projects, and user documentation." />
                    </Stack>
                </Box>
            </section>
            <section>
                <Stack align="center">
                    <TestimonialCard placement="left" bgColor="base" clientName="Arron Simon" clientImage={GraduantImage} message="I am glad to have studied at Abubakar Tafawa Balewa University Bauchi with many years of intellectual and moral discipline aquired." clientSector="DEPARTMENT OF MECHATRONIC & SYSTEM ENGINEERING" />
                    <TestimonialCard placement="right" bgColor="ash" clientName="Students" clientImage={AtbuGraduants} message="We are all glad to have worked with with amazingly intelligent and kind lecturerers that can balance multiple responsibilities at once. Any organization would be lucky to have them" />
                </Stack>
            </section>
            <section>
                <Box bg="#142140" height="700px" minH={"700px"}>
                    <Flex wrap="wrap" height="100%" align="center" justify="space-around">
                        <Stack wrap="wrap" width="450px" bg="black" gap={1}>
                            <Stack align="start" justify="center" padding={10} height="140px" backgroundColor="#071332">
                                <Heading color="#57E4FF" fontSize="70px">Contact</Heading>
                            </Stack>
                            <Stack color="black" align="start" justify="center" padding={10} height="140px" backgroundColor="#FFFFFF">
                                <Heading fontSize="24px">Contact</Heading>
                                <Text fontSize="20px">(234) 806-7890-938</Text>
                            </Stack>
                            <Stack align="start" justify="center" padding={10} height="140px" backgroundColor="#FFFFFF">
                                <Heading fontSize="24px">Email</Heading>
                                <Text fontSize="20px">hello@secureng.com</Text>
                            </Stack>
                            <Stack direction={isMobile ? "column" : "row"} align="center" justify="space-between" padding={10} height="140px" width="100%" backgroundColor="#57E4FF">
                                <Heading textTransform="uppercase" fontSize="24px">Secure NG</Heading>
                                <Flex align="center" justify="center" gap={5} wrap="wrap">
                                    {SocialLinks.map((item) => {
                                        return (
                                            <Link key={item.id} to={item.link}>
                                                <Icon fontSize={25} as={item.Icon} />
                                            </Link>
                                        )
                                    })}
                                </Flex>
                            </Stack>
                        </Stack>
                        <Box>
                            <Image alt="about-section" src={CurvyArc} />
                        </Box>
                    </Flex>
                </Box>
            </section>
            <footer>
                <Flex color="white" bg="black" padding={8} justify="space-between">
                    <Text>© Powered by Startup Bauchi</Text>
                    <Flex align="center" justify="center" gap={5} wrap="wrap">
                        {SocialLinks.map((item) => {
                            return (
                                <Link key={item.id} to={item.link}>
                                    <Icon fontSize={25} as={item.Icon} />
                                </Link>
                            )
                        })}
                    </Flex>
                    <Text>Terms & Support</Text>
                </Flex>
            </footer>
        </Box>
    )
}