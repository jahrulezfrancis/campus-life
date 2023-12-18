import { Image, Box, Stack, Heading, Text, HStack, useMediaQuery } from "@chakra-ui/react";


interface TestimonialCardProps {
    clientImage: string;
    message: string;
    clientName: string;
    clientSector?: string;
    bgColor: "base" | "ash";
    placement: "right" | "left";
}

export default function TestimonialCard(props: TestimonialCardProps) {
    const [isMobile] = useMediaQuery("(max-width: 650px)")
    return (
        <Box p="50px 12px">
            <HStack gap={0} wrap="wrap">
                {props.placement === "left" &&
                    <Box>
                        <Image objectFit="cover" h="300px" width="300px" maxW="95vw" src={props.clientImage} />
                    </Box>
                }
                <Stack p={10} minH="300px" color="whitesmoke" bg={props.bgColor === "base" ? "#535353" : "#B4B0AB"} >
                    <Text w={isMobile ? "95vw" : "600px"} fontSize="26px">
                        {props.message}
                    </Text>
                    <Text fontWeight={800} fontSize="23px">{props.clientName}</Text>
                    <Heading fontWeight={500} fontSize="18px">{props.clientSector}</Heading>
                </Stack>
                {props.placement === "right" &&
                    <Box>
                        <Image objectFit="cover" h="300px" width="300px" maxW="95vw" src={props.clientImage} />
                    </Box>
                }
            </HStack>
        </Box>
    )
}