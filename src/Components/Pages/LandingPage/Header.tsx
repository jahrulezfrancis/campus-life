import { Box, HStack, Heading, Spacer, Stack } from "@chakra-ui/react";
import SolidButton from "../../Sections/Buttons/SolidButton";
// import HeaderImage from "../../../assets/thirrdStudent.jpg"
import BackgroundImage from "../../../assets/graduating-students-atbu.jpg"

export default function LandingPageHeader() {
    return (
        <Box bgSize="cover" bgImage={BackgroundImage} h={"600px"} minH={600}>
            <HStack height="100%" bg="rgba(0, 0, 10, 0.5)" justify="center" align="center" wrap="wrap">
                {/* <Box padding={5}>
                    <Image width="auto" objectFit="cover" height={550} src={HeaderImage} alt="Header image" />
                </Box> */}
                <Stack wrap="wrap" justify="center" align="center" color="white">
                    <Heading textAlign="center" textTransform="uppercase" fontSize="60px">Welcome to <br /> campus life</Heading>
                    <Heading mt={15} fontSize={22}>Crafting memories</Heading>
                    <Heading fontSize={22}>Building a future</Heading>
                    <Spacer mb={50} height={50} />
                    <HStack justify="center" gap={10} wrap="wrap">
                        <SolidButton buttonText="Sign in" />
                        <SolidButton buttonText="Sign up" />
                    </HStack>
                </Stack>
            </HStack>
        </Box >
    )
}